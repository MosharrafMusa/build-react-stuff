import React, { Component } from 'react'

export class CounterClass2 extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: props.initialCount
        }
    }
    render() {
        return (
            
                <div>
                <button  onClick = {()=>this.changeCount(-1)}>-</button>
                <span>{this.state.count}</span>
                <button onClick = {()=>this.changeCount(1)}>+</button>
            </div>
            
        )
    }
    changeCount(amount){
        this.setState(prevState=>{return {count: prevState.count + amount}
        })
        this.setState(prevState=>{return {count: prevState.count + amount}
        })
        this.setState(prevState=>{return {count: prevState.count + amount}
        })
    }
}

export default CounterClass2
