import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Booking from './components/Booking';
import BMICalculator from './components/Bmicalc';
import PaymentForm from './components/Payment';
import WorkoutList from './components/WorkoutList';
import Login from './components/Login';
import CalorieTrack from './components/Calorietracker';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/book' element={<Booking />} />
        <Route path='/work' element={<Work />} />
        <Route path='/bmicalculator' element={<BMICalculator />} />
        <Route path='/payment' element={<PaymentForm />} />
        <Route path='/workout' element={<WorkoutList />} />
        <Route path='/calorie' element={<CalorieTrack  />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
