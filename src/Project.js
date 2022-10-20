import React, { useEffect } from "react";
import "./Project.css";
import kry1 from "./image/kyr1.jpg";
import kry2 from "./image/kyr2.jpg";
import movie_about from "./image/Movieabout1.JPG";
import piano from "./image/piano1.JPG";
import food from "./image/foodpicreact.JPG";
import news from "./image/newsapi.JPG";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Project() {

  useEffect(()=>{
    Aos.init({duration:1500});
  },[])


  return (
    <main className="project-main">
      <section data-aos="flip-left"  className="project-main-s1">
        <div className="project-main-s1-div1">
          <h1>Know Your Road</h1>
          <fieldset>
            <legend>Summary</legend>
            <p>
              Its and android and web application to know our road more. we can
              upload a image in the android app and that image will send to the
              required authority for taking desired action. And this application
              can also send emergency loaction.{" "}
            </p>
          </fieldset>

          <h2>FrontEnd: Android , Python</h2>
          <h2>BackEnd: Mysql</h2>
        </div>

        <div className="project-main-s1-div2">
          <img src={kry1} alt="" width="300px" height="500px" />
          <img
            src={kry2}
            className="kyr-img2"
            alt=""
            width="300px"
            height="500px"
          />
        </div>
      </section>

      <section data-aos="fade-right"  className="project-main-s2">
        <div className="project-main-s2-div1">
          <h1>About Movie</h1>
          <fieldset>
            <legend>Summary</legend>
            <p>
              This is website where you can search for variour movies , see each of the movie's rating and read
              it's discription.
            </p>
          </fieldset>

          <h2>Frontend: Javascript , HTML , CSS</h2>
          
        </div>

        <div className="project-main-s2-div2">
      
          <img
            src={movie_about}
            className="movie-img2"
            alt=""
            width="100%"
            height="700px"
          />
        </div>
      </section>

      <section data-aos="fade-up"  className="project-main-s3">
        <div   className="project-main-s3-div1">
          <h1>Piano</h1>
          <fieldset>
            <legend>Summary</legend>
            <p>
            It's simple virtual piano which you can play in your laptop by pressing the mentioned keys for playing particular notes.
            </p>
          </fieldset>

          <h2>FrontEnd: Javascript , HTML , CSS </h2>
         
        </div>

        <div className="project-main-s3-div2">
          
          <img
            src={piano}
            className="piano-img2"
            alt=""
            width="100%"
            height="500px"
          />
        </div>
      </section>

      <section data-aos="fade-left"  className="project-main-s4">
        <div className="project-main-s4-div1">
          <h1>Food</h1>
          <fieldset>
            <legend>Summary</legend>
            <p>
              This is a website just for searching different kind of foods and 
              it shows you the  recipy , calories for the food you searched.
            </p>
          </fieldset>

          <h2>FrontEnd: React js , HTML , CSS/SCSS</h2>

        </div>

        <div className="project-main-s4-div2">
   
          <img
            src={food}
            className="food-img"
            alt=""
            width="100%"
            height="500px"
          />
        </div>
      </section>

      <section data-aos="flip-right"  className="project-main-s5">
        <div className="project-main-s5-div1">
          <h1>News</h1>
          <fieldset>
            <legend>Summary</legend>
            <p>
              Its just a simple website for providing some news about tech. This has done my web scrapping using AJAX .
            </p>
          </fieldset>

          <h2>FrontEnd: Javascript , HTML , CSS/SCSS </h2>

        </div>

        <div className="project-main-s5-div2">
        
          <img
            src={news}
            className="api-img"
            alt=""
            width="100%"
            height="500px"
          />
        </div>
      </section>
    </main>
  );
}
