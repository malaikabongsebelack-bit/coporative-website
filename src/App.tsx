import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <Home />
        <Footer />
        <MobileFooter />
      </div>
    </LanguageProvider>
  );
}

export default App;
