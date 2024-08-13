import React, { useEffect, useState } from 'react';
import { fetchWorkouts } from './WorkoutService';
import './Workout.css';

const WorkoutList = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const getWorkouts = async () => {
            try {
                const data = await fetchWorkouts(); // Fetch all workouts
                setWorkouts(data);
            } catch (error) {
                setError('Failed to fetch workouts. Please check the console for more details.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getWorkouts();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredWorkouts = workouts.filter(workout => {
        const workoutName = workout.WorkOut ? workout.WorkOut.toLowerCase() : '';
        const intensityLevel = workout.Intensity_Level ? workout.Intensity_Level.toLowerCase() : '';
        const equipment = workout.Equipment ? workout.Equipment.toLowerCase() : '';

        return workoutName.includes(searchTerm) ||
               intensityLevel.includes(searchTerm) ||
               equipment.includes(searchTerm);
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="workout-container">
            <div className="workout-topic">
                <h1>Workouts</h1>
                <input
                    type="text"
                    placeholder="Search workouts..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="workout-search-bar"
                />
            </div>
            <div className="workout-cards">
                {filteredWorkouts.map((workout, index) => (
                    <div className="workout-card" key={index}>
                        <h2>{workout.WorkOut}</h2>
                        <p><strong>Intensity Level:</strong> {workout.Intensity_Level}</p>
                        <p><strong>Beginner Sets:</strong> {workout['Beginner Sets']}</p>
                        <p><strong>Intermediate Sets:</strong> {workout['Intermediate Sets']}</p>
                        {workout['Expert Sets'] && <p><strong>Expert Sets:</strong> {workout['Expert Sets']}</p>}
                        <p><strong>Equipment:</strong> {workout.Equipment}</p>
                        <p><strong>Explanation:</strong> {workout.Explaination}</p>
                        {workout.Video && <a href={workout.Video} target="_blank" rel="noopener noreferrer">Watch Video</a>}
                    </div>
                ))}
            </div>
            {showScroll && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    &#8679; Back to Top
                </button>
            )}
        </div>
    );
};

export default WorkoutList;
