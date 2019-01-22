import React from "react";
import Counter from "./Counter";


class Player extends React.PureComponent {

  render(){
    console.log( this.props.name + " rendered");
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>
            ✖
          </button>
          {this.props.name}
        </span>

        <Counter 
          score= {this.props.score}
          changeScore = {this.props.changeScore} 
          id = {this.props.id}
          />
      </div>
    );

  }


} 

export default Player;
