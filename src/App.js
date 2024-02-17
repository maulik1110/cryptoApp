import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './component/Header';
import Home from './component/Home';
import Exchanges from './component/Exchanges';
import Coins from './component/Coins';
import CoinDetails from './component/CoinDetails';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exchanges' element={<Exchanges/>}/>
        <Route path='/coins' element={<Coins/>}/>
        <Route path='/coin/:id' element={<CoinDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
