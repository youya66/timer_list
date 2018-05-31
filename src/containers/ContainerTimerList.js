import React from "react";
import {connect} from "react-redux";
import Timers from "../components/Timers";
import actions from "../actions";

// timer_list component -> timersに変更　App.js参照
const mapStateToProps = state => ({
    timers: state.timers
});
  
const mapDispatchToProps = dispatch => ({
    update_timer: (parentId, childId, count, date) => dispatch(actions.update_timer(parentId, childId, count, date)),
    delete_timer: (parentId, childId, inervalId) => dispatch(actions.delete_timer(parentId, childId, inervalId)),
    set_interval: (parentId, childId, intervalId) => dispatch(actions.set_interval(parentId, childId, intervalId)),
    stop_timer: (parentId, childId) => dispatch(actions.stop_timer(parentId, childId)),
    resume_timer: (parentId, childId) => dispatch(actions.resume_timer(parentId, childId))
});
const TimerList = (props) => {
    return (
        <div className="timer_list">
            {props.timers.map((items,i)=>(
                <Timers
                    update_timer={props.update_timer}
                    delete_timer={props.delete_timer}
                    set_interval={props.set_interval}
                    stop_timer={props.stop_timer}
                    resume_timer={props.resume_timer}
                    items={items}
                    key={"timers-" + i}
                />
            ))}
        </div>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimerList);