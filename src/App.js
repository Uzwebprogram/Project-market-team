import './App.css';
import {Routes , Route} from "react-router-dom"
import Main from './Pages/Main/Main';
import Service from './Pages/Service/Service';
import Cooperation from './Pages/Cooperation/Cooperation';
import Contact from './Pages/Contact/Contact';
import Install from './Pages/Install/Install';
import Drshop from './Pages/Drshop/Drshop';
import Dastavka from './Pages/Dastavka/Dastavka';
import About from './Pages/About/About';
import Aksiya from './Pages/Aksiya/Aksiya';
import Order from './Pages/Order/Order';
import Favorites from './Pages/Favorites/Favorites';
import Compare from './Pages/Compare/Compare';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Order' element={<Order/>}/>
      <Route path='/Install' element={<Install/>}/>
      <Route path='/Favorites' element={<Favorites/>}/>
      <Route path='/Drshop' element={<Drshop/>}/>
      <Route path='/Dastavka' element={<Dastavka/>}/>
      <Route path='/Aksiya' element={<Aksiya/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path="/Compare" element={<Compare/>}/>
      <Route path='/Cooperation' element={<Cooperation/>}/>
    </Routes>
    </>
  );
}

export default App;
