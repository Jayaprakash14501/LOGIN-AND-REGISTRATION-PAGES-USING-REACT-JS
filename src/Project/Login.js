import React  ,{useState}from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import './web.css';
export default function Login(){
const[datas,setDatas]=useState([]);
function validate(){
    var det=JSON.parse(localStorage.getItem("data"));
    if(/[a-z0-9]+@[a-z0-9]+[.][com]{3}/.test(datas.mail)){
        if(/[A-Z][a-z]+[@#$&]?[0-9]?/.test(datas.password)){
            if(det && det.find(data=>data.mail===datas.mail && data.password===datas.password)){
            return true;
        }
        else{
            alert("Invalid mail or password");
        }}
        else{
            alert("please enter valid password");
        }}
        else{
            alert("please enter valid mail");
        }
                }
const handleChange=(e)=>{
    var name=e.target.name;
    var value=e.target.value;
    setDatas(values=>({...values,[name]:value}));
}
const handleSubmit=(e)=>{
    e.preventDefault();
    if(validate(true)){
        alert("login successfully");
        setDatas({mail:"",password:""})
    }
}
return(
        <div class="main">
            <div class="submain">
                    <h1>LOGIN</h1><hr></hr><br></br>
                    <MdContactMail class="comp" autoFocus/> <input type="text" class="box" placeholder="Enter Mail Id" autoFocus name="mail" value={datas.mail} onChange={handleChange}></input><br></br><br></br><br></br>
                   <RiLockPasswordLine class="comp" autoFocus/><input type="password" placeholder="Enter Password" autoFocus class="box" name="password" value={datas.password} onChange={handleChange}></input><br></br><br></br><br></br>
                    <button onClick={handleSubmit}>log in</button><br></br><br></br>
                    didn't have any account? <br></br><Link to='/signup'>Create Account</Link><hr></hr>
                    <h2><Link to="https://www.facebook.com/login/"><FaFacebook /></Link></h2>
                        <h2><Link to="https://www.instagram.com/accounts/login/?hl=en"><FaInstagram /></Link></h2>
                        <h2><Link to="https://x.com/i/flow/login"><FaTwitter /></Link></h2>
                        <h2><Link to="https://www.google.co.in/"><FaGoogle /></Link></h2>
    </div>
</div>
    )
}