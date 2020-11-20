import React, { Component } from "react";
import "dhtmlx-scheduler";
import "dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css";

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

    this.setState({ events });
    scheduler.config.buttons_right = ["dhx_cancel_btn"];
    scheduler.config.buttons_left = [];
    scheduler.config.lightbox.sections = [
      {
        name: "description",
        height: 140,
        map_to: "text",
        type: "textarea",
        focus: true,
      },
      { name: "time", height: 50, type: "time", map_to: "auto" },
    ];

    scheduler.init(this.schedulerContainer, new Date(2020, 10, 11), "month");

    scheduler.clearAll();
    scheduler.parse(events);
  };

  render() {
    return (
      <div
        ref={(input) => {
          this.schedulerContainer = input;
        }}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    );
  }
}
