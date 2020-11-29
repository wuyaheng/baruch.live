import React, { Component } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
 
const scheduler = window.scheduler;
 
export default class Scheduler extends Component {
    state = {
        events: [],
      };
      componentDidMount() {
        this.update();
      }
    
      shouldComponentUpdate(nextProps, nextState) {
        return this.state.events.length !== nextProps.events.length;
      }
      componentDidUpdate(){
          this.update();
      }
    
      update = () => {
        scheduler.skin = "material";
        scheduler.config.header = [
          "day",
          "week",
          "month",
          "date",
          "prev",
          "today",
          "next",
        ];
 
        const { events } = this.props;
        scheduler.init(this.schedulerContainer, new Date(2020, 10, 11), "month");
        scheduler.clearAll();
        scheduler.parse(events);
    }
 
    render() {
        return (
            <div
                ref={ (input) => { this.schedulerContainer = input } }
                style={ { width: '100%', height: '600px' } }
            ></div>
       );
    }
}