import './App.css';

//components
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import MainSection from "./components/MainSection/MainSection"
import Statistics from "./components/Statistics/Statistics"
import Boost from "./components/Boost/Boost"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainSection />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
