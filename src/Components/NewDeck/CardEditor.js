import React, {Component} from "react"

export default class CardEditor extends Component{

    render(){
        return(
            <div>
                <div>
                    <h3>{this.props.card}</h3><button onClick={()=>{console.log("-")}}>-</button><p>0</p><button onClick={()=>{console.log("+")}}>+</button>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={() => {console.log("MVP")}} >edit</button>
                    <button className="btn btn-secondary" onClick={() => {console.log("close to MVP")}}> delete </button>
                </div>
            </div>
        )
    }
}