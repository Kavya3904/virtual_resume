import React,{useState,useRef,useEffect} from "react";
import "./Mainpart.css"
import pics from './image/hsp2.png'
import chat_img from './image/chat.png'
import react_pic from './image/react-pic.png'
import Avatar from "./SupportEng/Avatar";
import Modal from "./Modal";

export default function Mainpart(){

const [isopen , setIsopen ] =useState(false)
  
    return(
        
      
     

      <div className="main-div"  >

     
        <div className="main-div1"   >
      
        <section className="Main-s1-sec1" >
        <div className="Main-s1-div1">
        <h1 className="Main-s1-div1-h1">Hai I am 👋 <br /> Kavya M</h1>
        </div>
        </section >
       <section  className="Main-s2-sec1" >
        <div>
            <h4>It's being 2 months I started to learn Js , HTML , CSS  <br />and few days in React js</h4>

        </div>
       </section>
<section className="Main-s3-sec1" >


<div className="btn-wrapper-div">
<button onClick={()=>{setIsopen(true)}} className="Main-s3-sec1-btn1" >Mail me


</button>
<Modal open={isopen} onclose={()=>setIsopen(false)}>
    ffff
</Modal>
</div>
    

   
    <div  className="Main-s3-sec1-div2">
Project
    </div>
</section>
       <section className="Main-s4-sec1" >
<div className="Main-s4-sec1-div" >
    <div><h2>6</h2></div>
    <div><h4>Project Done</h4></div>
</div>





</section>
<section className="Main-s5-sec1" >
<div className="Main-s5-sec1-div">
<div><h2>Contact</h2></div>
    <div><h4>kavya3904@gmail.com</h4></div>
</div>
<div className="Main-s5-sec1-div">
<div><h2>Resume pdf</h2></div>
    <div>
   <a href="KavyaMreume.pdf" download="KavyaMreume.pdf">

  <h4 className="download-resume"> Download </h4> </a> </div>
</div>

</section>
<section className="Main-s6-sec1" >
    <div className="Main-s6-sec1-main-div1">
<div className="Main-s6-sec1-main-div1-innerdiv1" >
<h2 >Project <br/>Status</h2>
</div>

<div className="Main-s6-sec1-main-div2-innerdiv1" >
<h2 className="Main-s6-sec1-main-div2-innerdiv1-h2-name" >Web Design</h2>
<h2 className="Main-s6-sec1-main-div2-innerdiv1-h2-number"> &nbsp; 5</h2>
</div>



    </div>
    
<div  className="Main-s6-sec1-main-div2" >

<a href="https://github.com/Kavya3904">
<div className="Main-s6-sec1-main-div1-innerdiv2">
<h2 >Know More</h2>

</div>
</a>
<div className="Main-s6-sec1-main-div2-innerdiv2">
<h2 className="Main-s6-sec1-main-div2-innerdiv2-h2-name" >Mobile App</h2>
<h2 className="Main-s6-sec1-main-div2-innerdiv2-h2-name"> &nbsp; 1</h2>
</div>
</div>
</section>


<img className="react-div" src={react_pic} alt=""  />

     
        </div>
      





        <div className="main-div2"     >
<div className="main-div2-img-div">
<img className="hspic" src={pics} alt=""  />
</div>


< Avatar



style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '10px',
                }}
 />
{/* 
<div className="main-div2-heading"><h3 className="main-div2-heading-h3">
    It's Me
</h3></div> */}



        </div>
        
        
        </div>
    );
}