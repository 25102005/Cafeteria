
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/root';

function App() {
  return (
    <div className="App">
      <Navbar />
      < RouterProvider router={router}/>
      <Footer />
    </div>
    
  );
}

export default App;
