import "./input.css"
import React, { Component } from "react";

class input extends Component {

    render() {
        return( 
          <div 
            className="input">
             {this.props.children}
          </div>
        )
      }
    }

export default input;
