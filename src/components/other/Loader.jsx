import React from "react";
// import FadeIn from "react-fade-in";
// import Lottie from "react-lottie";
import ReactLoading from "react-loading";

export default class Loading extends React.Component {
    constructor(props){
       super(props)
       this.state = {
          done: undefined
       }
    }
    render(){
       return(
        <div>
            {!this.state.done ? (
            <ReactLoading type={"bars"} color={"black"} />
            ) : (
            <h1>hello world</h1>
            )}
        </div>
       )
    }
 }
