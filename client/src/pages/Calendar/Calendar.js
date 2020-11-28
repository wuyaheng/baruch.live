import React, { Component } from "react";
import Scheduler from "../../components/Scheduler";
import { Link } from "react-router-dom";
import "../../App.css";
import moment from "moment";
import axios from "axios";
import cheerio from "cheerio";


class Calendar extends Component {
  state = {
    events: [],
  };
  
  componentDidMount() {
    this.getRSS();
    this.scrapeRealtor();
    this.getSchoolCalendar();
  }

  getSchoolCalendar = async () => {
    const CORS = "https://cors-anywhere.herokuapp.com/";
    const RSS_URL = CORS + "https://www.baruch.cuny.edu/calendar/RSSSyndicator.aspx?category=&location=&type=N&binary=Y&keywords=&ics=Y";
    try {
      const response = await fetch(RSS_URL);
      const str = await response.text();
      const data = await new window.DOMParser().parseFromString(
        str,
        "text/xml"
      );
      let extraData = [];
      const items = data.querySelectorAll("item");
      items.forEach((el) => {
        console.log(el)
        extraData.push({
          text: [
            el.getElementsByTagName("title")[0].innerHTML.slice(9,(el.getElementsByTagName("title")[0].innerHTML.length-3)),
            "Link: https://www.baruch.cuny.edu/calendar/EventList.aspx?view=Summary#"
          ].join("\n"),
          start_date: moment(
            el.getElementsByTagName("pubDate")[0].innerHTML
          ).format("YYYY-MM-DD HH:mm"),
          end_date: moment(
            el.getElementsByTagName("pubDate")[0].innerHTML
          ).format("YYYY-MM-DD HH:mm")
        });
      });

      this.setState({ events: [...this.state.events, ...extraData] });
    } catch (error) {
      console.log(error);
    }
  };
  
  scrapeRealtor = async () => {
    const CORS = "https://cors-anywhere.herokuapp.com/";
    const html = await axios.get(
      CORS + "https://blogs.baruch.cuny.edu/writingcenter/events/"
    );
    const $ = await cheerio.load(html.data);
    let data = [];

    $(".tribe-events-calendar-list__event-row").each((i, el) => {
      var time = $(el).find(".tribe-event-date-start").text().trim();
      var text = $(el).find(".tribe-common-anchor-thin").text().trim();
      if (time.includes("am") || time.includes("pm")) {
        var convTime = moment(time, "MMMM D, h:mm a");

        const obj = {
          text,
          start_date: convTime.format("YYYY-MM-DD HH:mm"),
          end_date: convTime.add(1, "hour").format("YYYY-MM-DD HH:mm"),
        };

        data.push(obj);
      }
    });

    this.setState({ events: [...this.state.events, ...data] });
  };

  getRSS = async () => {
    const CORS = "https://cors-anywhere.herokuapp.com/";
    const RSS_URL = CORS + "https://baruch.campuslabs.com/engage/events.rss";
    try {
      const response = await fetch(RSS_URL);
      const str = await response.text();
      const data = await new window.DOMParser().parseFromString(
        str,
        "text/xml"
      );
      let newData = [];
      const items = data.querySelectorAll("item");
      items.forEach((el) => {
        newData.push({
          text: [
            el.getElementsByTagName("title")[0].innerHTML,
            el.getElementsByTagName("link")[0].innerHTML,
            el.getElementsByTagName("location")[0].innerHTML,
          ].join("\n"),
          start_date: moment(
            el.getElementsByTagName("start")[0].innerHTML
          ).format("YYYY-MM-DD HH:mm"),
          end_date: moment(el.getElementsByTagName("end")[0].innerHTML).format(
            "YYYY-MM-DD HH:MM"
          ),
        });
      });

      this.setState({ events: [...this.state.events, ...newData] });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link
              to="/"
              type="button"
              id="calenderBtn"
              className="btn btn-outline-dark mt-2 mr-3"
            >
              Home
            </Link>
          </li>
        </ul>
        <div className="scheduler-container">
          <Scheduler events={this.state.events} />
        </div>
      </div>
    );
  }
}
export default Calendar;
