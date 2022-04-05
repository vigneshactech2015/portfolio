import React from "react";
import classes from './myworks.module.css';
const MyWorks=()=>{
return(
    <div className={classes.project}>
    <h2 className={classes.mywork}>My Works</h2>
    <div className={classes.work}>
    <div className={classes.card}>
    <h5 className={classes.title}>Amazon Clone</h5><br/>
    <img src="./amazonclone.jpg" alt="u" className={classes.photo}></img><br/><br/>
    <a href="https://clone-3da42.web.app" className={classes.website}>Visit Website</a>
    </div>
     
    <div className={classes.card}>
    <h5 className={classes.title}>Netflix Clone</h5><br/>
    <img src="./netflixclone.jpg" alt="u" className={classes.photo}></img><br/><br/>
    <a href="https://nimble-tapioca-dab0e9.netlify.app/" className={classes.website}>Visit Website</a>
    </div>
    <div className={classes.card}>
    <h5 className={classes.title}>Mobile Cart</h5><br/>
    <img src="./mobilecart.png" alt="u" className={classes.photo}></img><br/><br/>
    <a href=" https://mobilecart-58459.web.app" className={classes.website}>Visit Website</a>
    </div>
    </div>
    <div className={classes.work}>
    
   
     
    <div className={classes.card}>
    <h5 className={classes.title}>Foodapp</h5><br/>
    <img src="./foodapp.png" alt="u" className={classes.photo}></img><br/><br/>
    <a href="https://food-delivery-app-1b1f8.web.app/" className={classes.website}>Visit Website</a>
    </div>

    <div className={classes.card}>
    <h5 className={classes.title}>Training </h5><br/>
    <img src="./trainingtracker.png" alt="u" className={classes.photo}></img><br/><br/>
    <a href="https://trainingtracker-2055e.web.app" className={classes.website}>Visit Website</a>
    </div>

    </div>
   
    </div>
);
}

export default MyWorks;