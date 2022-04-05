import React from "react";
import classes from './skills.module.css';
const Skills=()=>{
return(
    <div className={classes.align}>
    <h2 className={classes.skillname}>Skills</h2>
    <div className={classes.display}>
    <img src="./htmle.png" className={classes.img} alt="vignesh"></img>
    <img src="./css.jpg" className={classes.img} alt="vignesh"></img>
    <img src="./js.jpg" className={classes.img} alt="vignesh"></img>
    <img src="./bootstrap.png" className={classes.img} alt="vignesh"></img>
    <img src="./react.png" className={classes.img} alt="vignesh"></img>
    <img src="./redux.png" className={classes.img} alt="vignesh"></img>
    </div>
    </div>
)
};

export default Skills;