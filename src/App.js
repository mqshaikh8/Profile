import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import StarWrapper from './components/StarWrapper';
import StarsCanvas from './3d_components/Stars';

const App = () => {
  return (
    <div id="app" className="App h-full relative z-0 bg-black'">
        <StarsCanvas/>
        <Header/>
        <Body/>
        <About/>
        <Projects/>
        <Skills/>
        <Footer/>
    </div>
  );
}

export default App;