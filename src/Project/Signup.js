import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './web.css';
export default function Signup(){
    const [datas,setDatas]=useState(JSON.parse(localStorage.getItem("data"))||[]);
    const [newdatas,setNewdatas]=useState("");
  
    function validate(){
        var det=JSON.parse(localStorage.getItem("data"));
        if(/^[a-zA-Z]+$/.test(newdatas.firstname)){
            if(/^[a-zA-Z]+$/.test(newdatas.laststname)){
                if (!det || !det.find(datas => datas.mail === newdatas.mail && datas.phone === newdatas.phone)) {
                if(/^[6-9][0-9]{9}$/.test(newdatas.phone)){
                 if(/[a-z0-9]+@[a-z0-9]+[.][com]{3}/.test(newdatas.mail)){
                      if(/[A-Z][a-z]+[@#$&]?[0-9]?/.test(newdatas.password)){
                        if(/[A-Z][a-z]+[@#$&]?[0-9]?/.test(newdatas.confirm)){
                           if(newdatas.password===newdatas.confirm){
                            return true;
                        }
                        else
                        {
                          alert("password mismatch");
                        }}
                        else{
                            alert("confirm password is incorrect");
                        }}
                        else{
                            alert("password is incorrect");
                        } }
                        else{
                            alert("mailid is invalid");
                        }}
                        else{
                            alert("phone number is invalid");
                        }} 
                        else{
                             alert("data already exist");
                         }}}
                        else{
                            alert("name is invalid");
                            return false;
                           }
    }
     const handleChange=(e)=>{
        var name=e.target.name;
        var value=e.target.value;
        setNewdatas(values=>({...values,[name]:value}));
    }
    useEffect(()=>{
        var store=JSON.parse(localStorage.getItem("data"));
        if(store){
            setDatas(store);
        }
    },[]);
    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(datas));
    },[datas]);
    const addNew=(item)=>{
        const id=datas.length?datas[datas.length-1].id+1:111;
        const obj={id:id,...item};
        const list=[...datas,obj];
        setDatas(list);
    }
    const handleSubmit=(e)=>{
    e.preventDefault();
        if(validate(true)){
            alert("registered succesfully");
            window.location.href="/home";
           if(!newdatas)return;
           addNew(newdatas);
           setNewdatas({firstname:"",lastname:"",mail:"",phone:"",password:"",confirm:""});
           };
    }
return(
        <div class="main">
             <div class="submain">
          
                    <h1>SIGN UP</h1><hr></hr><br></br>
                    <input type="text" class="box1" placeholder="Enter First Name" autoFocus name="firstname" value={newdatas.firstname} onChange={handleChange} ></input>
                    <input type="text" class="box1" placeholder="Enter Last Name" autoFocus  name="lastname" value={newdatas.lastname} onChange={handleChange}></input><br></br>
                    <input type="text" class="box1" placeholder="Enter Mail Id" autoFocus name="mail" value={newdatas.mail} onChange={handleChange} ></input>
                    <input type="text" class="box1" placeholder="Enter Phone Number" autoFocus name="phone" value={newdatas.phone} onChange={handleChange} ></input><br></br>
                   <input type="text" class="box1" placeholder="Enter Password" autoFocus  name="password" value={newdatas.password} onChange={handleChange}></input>
                    <input type="text" class="box1" placeholder="Enter Confirm Password" autoFocus name="confirm" value={newdatas.confirm} onChange={handleChange} ></input>
                   <button onClick={handleSubmit} class="button1">Register</button><br></br><br></br>
                    
                    Already have any account? <br></br><Link to='/'>Log in</Link><hr></hr>
                    <h2><Link to="https://www.facebook.com/login/"><FaFacebook /></Link></h2>
                        <h2><Link to="https://www.instagram.com/accounts/login/?hl=en"><FaInstagram /></Link></h2>
                        <h2><Link to="https://x.com/i/flow/login"><FaTwitter /></Link></h2>
                        <h2><Link to="https://www.google.co.in/"><FaGoogle /></Link></h2>
    </div>
 </div>
    )
}