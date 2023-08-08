import Featured from './components/Featured'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div>
     <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
