import "./Clear.css"
import React, { Component } from "react";

class clear extends Component {

    render() {
        return( 
          <div 
            className="clear"
            onClick={() => this.props.handleClear()}
             >
             {this.props.children}

          </div>
        )
      }
    }

export default clear;
