import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Login from "./Project/Login";
import Signup from "./Project/Signup";
import Home from "./Project/Home";
function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
   </Routes>
    </BrowserRouter>
);
}
export default App;

