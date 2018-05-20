"use strict"
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import MY from "./my";

var hoge = new MY.HourSecond("0000")
class App extends React.Component{
    constructor(props){
        super();
        this.state = {
            count: "0000",
            type: 0
        };
    }
    render(){
        return(
            <main className="main">
                <TimerInput 
                    {...this.state}
                    handle_submit={this.handle_submit.bind(this)}
                />
                <TimerManager />
            </main>
        )
    }
    handle_submit(){
        this.setState({
            count: "0000",
        });
    }
}

class TimerInput extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="timer-input">
                <form 
                    className="timer-input__form"
                    action="javascript:void(0)"
                    onSubmit={this.props.handle_submit}
                >
                    <input 
                        type="text"
                        value={this.props.count}
                        readOnly
                    />
                    <input 
                        type="submit" 
                        value="add"
                    />
                </form>
            </div>
        )
    }
    normalize_timer(str){
        
    }
}

TimerInput.propTypes = {
    count: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired
}


class TimerManager extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [[
                {parent_id: 0, child_id: 0, count: 0}
            ]]
        };
    }
    render(){
        return(
            <div className="timer_list">
                {this.state.items.map((items,i)=>(
                    <Timers
                        tick={this.tick.bind(this)}
                        items={items}
                        index={i}
                        key={"timers-" + i}
                    />
                ))}
            </div>
        )
    }
    tick(){
        const args = arguments[0];
       
        let new_state = this.state.items.slice();
        new_state[args.parent_id][args.child_id].count += 1;
      
        this.setState(()=>({
            items: new_state
        }));
    }
}

const Timers = (props) => {
    return (
        <ul>
            {props.items.map((item, i) => (
                <li key={"timer-" + props.index + "-" + i}>
                    <Timer 
                        item={item}
                        tick={props.tick}
                    />
                </li>
            ))}
        </ul>
    )
}

Timers.propTypes = {
    item: PropTypes.array
};

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.interval;
    }
    render(){
        return (
            <div className="timer">
                {this.props.item.count}
                <div className="timer__btns">
                    <input type="button" value="start" onClick={this.start.bind(this)} />
                    <input type="button" value="stop" onClick={this.stop.bind(this)} />
                </div>
            </div>
        )
    }
    start(){
        const props = this.props.item;
        this.interval = setInterval(() => this.props.tick(
            {
                parent_id: props.parent_id,
                child_id: props.child_id
            }
        ), 1000);
    }
    stop(){
        clearInterval(this.interval);
    }
}

Timer.propTypes = {
    count: PropTypes.number,
    item: PropTypes.shape({
        parent_id: PropTypes.number,
        child_id: PropTypes.number
    })
};

ReactDOM.render(
    <App />,
    document.getElementById("root")
)