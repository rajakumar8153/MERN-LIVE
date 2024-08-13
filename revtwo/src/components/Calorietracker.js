import './CalorieTrack.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function CalorieTrack() {
    const [foodName, setFoodName] = useState("");
    const [session, setSession] = useState("Breakfast");
    const [quantity, setQuantity] = useState(0);
    const [unit, setUnit] = useState("");
    const [calorieIntake, setCalorieIntake] = useState(0);
    const [foodList, setFoodList] = useState([]);
    const [caloriesFetched, setCaloriesFetched] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:3002/read").then((response) => {
            setFoodList(response.data);
        });
    });

    const calculateCalories = async () => {
        try {
            const apiKey = 'hgASbtGH1mREGIQK7YLGCA==p2tzVeJIzAcOOrSb';
            const query = `${quantity} ${unit} ${foodName}`;
            const response = await Axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${encodeURIComponent(query)}`, {
                headers: { 'X-Api-Key': apiKey },
            });

            if (response.data.items.length > 0) {
                const calories = response.data.items[0].calories;
                setCalorieIntake(calories);
                setCaloriesFetched(true);
            } else {
                alert("No nutritional data found for this food item.");
                setCaloriesFetched(false);
            }
        } catch (error) {
            console.error("Error fetching calorie data:", error);
            setCaloriesFetched(false);
        }
    };

    const addToList = async () => {
        if (foodName && session && calorieIntake > 0) { 
            try {
                const response = await Axios.post("http://localhost:3001/insert", {
                    foodName,
                    session,
                    calorieIntake,
                    quantity,
                    unit,
                });
                alert('Food added successfully');
            } catch (error) {
                if (error.response) {
                    console.error('Response error:', error.response.data);
                    console.error('Status code:', error.response.status);
                    console.error('Headers:', error.response.headers);
                    alert(`Failed to add food. Server responded with status code ${error.response.status}.`);
                } else if (error.request) {
                    console.error('No response error:', error.request);
                    alert('No response received from the server. Please check your network or server.');
                } else {
                    console.error('Axios setup error:', error.message);
                    alert('An error occurred while setting up the request.');
                }
                console.error('Error config:', error.config);
            }
        } else {
            alert("Please fill in all required fields before adding to the list.");
        }
    };
    



    const updateFood = (id) => {
        Axios.put("http://localhost:3002/update", {
            id,
            newFoodName: foodName,
        });
    };

    const deleteFood = (id) => {
        Axios.delete(`http://localhost:3002/delete/${id}`);
    };

    return (
        <div className="calorie-tracker">
            <h1 id='heading-1'>Track Your Food Intake</h1>
            <div className="calorie-form">
                <label>Food Name:</label>
                <input type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)} />
                <label>Session:</label>
                <select onChange={(e) => setSession(e.target.value)} required>
                    <option  disabled>Select a session</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Morning Snack">Morning Snack</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Evening Snack">Evening Snack</option>
                    <option value="Dinner">Dinner</option>
                </select>

                <label>Quantity:</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <label>Unit:</label>
                <select  onChange={(e) => setUnit(e.target.value)}>
                    <option value="grams">grams</option>
                    <option value="ml">ml</option>
                    <option value="pieces">pieces</option>
                </select>
                <button onClick={calculateCalories}>Calculate Calories</button>
                {caloriesFetched && <h3>Calorie Intake: {calorieIntake} kcal</h3>}
                <button onClick={addToList} disabled={!caloriesFetched}>Add to List</button>
            </div>

            <h1 id='heading-2'>Food List</h1>
            {foodList.map((val, key) => (
                <div className="food" key={key}>
                    <h2>{val.foodName}</h2>
                    <p>Session: {val.session}</p>
                    <p>Quantity: {val.quantity} {val.unit}</p>
                    <p>Calorie Intake: {val.calorieIntake} kcal</p>
                    <button onClick={() => deleteFood(val._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default CalorieTrack;
