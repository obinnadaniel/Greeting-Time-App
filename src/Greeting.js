import React, {Component} from 'react';

class Greeting extends Component {
    render() {
      const styles = {
        color: "FF8C00",
        backgroundColor: "#FF2D00",
        fontSize: "70px",
        textAlign: "center"
      }
      const date = new Date()
      const hours = date.getHours()
      let timeofDay
    
      if (hours < 12) {
        timeofDay = "Morning🌝"
        styles.color="#2E0927"
      }else if (hours >=12 && hours< 16) {
         timeofDay = "Afternoon🌔"
         styles.color="green"
      }else if (hours >=16 && hours< 21) {
        timeofDay = "Evening🌘"
        styles.color="purple"
      }else{
        timeofDay = "Goodnight🌙"
         styles.color="blue"
      }
      return(
        <h1 style={styles}>Good {timeofDay} to you, Sir !</h1>
      )
    }
    
   }
  
export default Greeting;  