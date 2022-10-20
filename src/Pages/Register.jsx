import React, { useState } from "react";
import Add from "../image/addAvatar.png";
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth ,db, storage } from "../firebase";
import "../style.scss"
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from "react-router-dom";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export function Register(){
    const [err , setErr ] = useState(false);
    const navigate = useNavigate()
      const handlesubmit = async (e)=>{
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
    
    
    
      try{
        
        const res = await createUserWithEmailAndPassword(auth, email, password)
       
    
    
    const storageRef = ref(storage, displayName);
    
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    
    uploadTask.on(
     
      (err) => {
        setErr(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await  updateProfile(res.user,{
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "Users", res.user.uid),{
                uid: res.user.uid,
                displayName,
                email,
                photoURL:downloadURL,
              });
              await setDoc(doc(db,"UserChats", res.user.uid),{});
              if(email =="kavya3904@gmail.com"){
             
                navigate("/hometwo")
              }
              else{
              
                navigate("/home")
              }
             
            });
     
      }
    );
    
      }catch(err){
    setErr(true)
      }
    
    
      }


    return(
<div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Register</span>
    
        <form onSubmit={handlesubmit}>
          <input  type="text" placeholder="display name" />
          <input  type="email" placeholder="email" />
          <input  type="password" placeholder="password" />
          <input  style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button  >Sign up</button>
        {err && <span>{err}</span>}
        </form>
        <p>
          You do have an account? <Link className="reg-login-link" to="/login">Login</Link>
        </p>
      </div>
    </div>


    );

}