import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './nikecomponents/navbar';
import './nikecomponents/Nike.css';
import Article from './nikecomponents/Article';
import Contactpage from './nikecomponents/Contactpage';
import Locationpage from './nikecomponents/Locationpage';
import Aboutpage from './nikecomponents/About';
import Footer from './nikecomponents/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {

  return (
    <Router>
<div>  

  <NavScrollExample/>
<Routes>
  <Route path='/about' element={<Aboutpage/>}/>
  <Route path='/location' element={<Locationpage/>}/>
  <Route path='/contact' element={<Contactpage/>}/>
</Routes>
   <Article/>
   <Footer/>
   
    </div>
     // </Router>
  );
}

export default App;
