import React, { Component } from 'react';
import './Button.css'

export default class Button extends Component {

    audio = new Audio(this.props.soundSrc)

    playAudio = () => {
        this.audio.currentTime = 0
        this.audio.play()
    }

    render() {
      return(
        <div class="col text-center">
          <img 
            src="./button.png" 
            onClick={this.playAudio} 
            role="button"
            height="50px"
            width="50px"></img>
          <p>{this.props.name}</p>
        </div>
      )
    }
  }