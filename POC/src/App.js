import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Pages/NavBar';
import CstAccount from './Components/Services/CstAccount';
import CstService from './Components/Services/CstService';
import Dashboard from './Components/Services/Dashboard';


function App() {
  
  return (
    <>
     <BrowserRouter>
        <Routes>
        <Route path='/' element={<NavBar/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/cst_account' element={<CstAccount/>}></Route>
        <Route path='/cst_service' element={<CstService/>}></Route>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
