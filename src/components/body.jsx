import React, { Component } from 'react';
import '../css/body.css';
import {myFunction} from '../util/body.js'

class Body extends Component {
    render(){
        return(
            <div className = 'body'>
            <div className = 'div1'>
            <label for = "username">Name: </label>
            <input type = "text" name = "username" id = "name" required/><br/><br/>
            
            <label for = "userage">Age:</label>
            <input type = "text" name = "userage" id = "age" required/><br/><br/>
            
            Gender:<br/>
                <input type = "radio" name = "ggender" id = "male" value = "male"/>Male<br/>
                <input type = "radio" name = "ggender" id = "female" value = "female"/>Female<br/>
            
        <button id = "submit" onClick = {myFunction}>Submit</button>
            </div>
            
            <div className = 'div2'>
            Print:
            <p id = "uname"></p>
            <p id = "uage"></p>
            <p id = "gender"></p>
            </div>
            </div>
        );
    }
}

export default Body;