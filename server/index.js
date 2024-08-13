const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const FoodModel = require('./models/food');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://kishovarmamani:R5cmc5pJ9ZhxYqDp@cluster0.bjfrz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

  app.post('/insert', async (req, res) => {
    const { foodName, session, calorieIntake, quantity, unit } = req.body;

    console.log('Received data:', req.body); 

    if (!foodName || !session || !calorieIntake || !quantity || !unit) {
        console.log('Missing fields:', { foodName, session, calorieIntake, quantity, unit });
    }

    const food = new FoodModel({ 
        foodName, 
        calorieIntake, 
        session, 
        quantity, 
        unit 
    });

    try {
        await food.save();
        res.send('Food added successfully');
    } catch (err) {
        console.log('Error adding food:', err);
    }
});


  



app.get('/read', async (req, res) => {
  try {
    const result = await FoodModel.find({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

app.put('/update', async (req, res) => {
  const { id, newFoodName } = req.body;
  console.log('Received update request:', { id, newFoodName });  // Debugging line


  try {
    const updatedFood = await FoodModel.findById(id);
    if (updatedFood) {
      updatedFood.foodName = newFoodName;
      await updatedFood.save();
      res.send('Food updated successfully');
    } else {
    }
  } catch (err) {
    console.log('Error updating food:', err); 
  }
});


app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  console.log('Received delete request for ID:', id);


  try {
    await FoodModel.findByIdAndDelete(id);
    res.send('Food deleted successfully');
  } catch (err) {
    console.log('Error deleting food:', err);
  }
});

app.listen('3002', () => {
  console.log('Server is running on port 3002');
});
