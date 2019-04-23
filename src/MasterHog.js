import React, { Component } from 'react'
import Master from './assets/master-hog.png'
import BabyHog from './BabyHog'
import offspring from './db.js'

export default class MasterHog extends Component {

  // constructor() {
  //   super() //MasterHog is also the child class from Component. So before we use the this, we have to call super, that's why we need it
    state = { 
      eyeColor: "blue"
    }
  // }


  changeEyeColor = (e) => {
    this.setState({ 
      eyeColor: e.target.value 
    })
  } 

  generateBaybyHog = () =>{
    return offspring.map((baby)=><BabyHog {...baby} eyeColor = {this.state.eyeColor}/>)
  }


  render() {
    return ( 
      <div>
        <input type="radio" name="eyeColor" value="blue" onChange={this.changeEyeColor} />
        Blue<br></br>
        <input type="radio" name="eyeColor" value="sun" onChange={this.changeEyeColor} />
        Sun<br></br>
        <input type="radio" name="eyeColor" value="glowing" onChange={this.changeEyeColor} />
        Glowing<br></br>
      
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        
        <ul className="hoglist">
           {this.generateBaybyHog()}
        </ul>

      </div>
    )
  }

}


/*
  <BabyHog />
  <BabyHog /> 
  <BabyHog />  
*/
