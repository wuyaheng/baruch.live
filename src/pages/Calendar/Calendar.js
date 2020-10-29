import React, { Component } from "react";
import Scheduler from "../../components/Scheduler";
import { Link } from "react-router-dom";
import "../../App.css";
import axios from "axios";
import cheerio from "cheerio";


const CORS = "https://cors-anywhere.herokuapp.com/";

async function scrapeRealtor() {
  const html = await axios.get(CORS + 'https://www.realtor.com/news/real-estate-news/');
  const $ = await cheerio.load(html.data);
  let data = [];

  $('.site-main article').each((i, elem) => {
    if (i <= 3) {
      data.push({
        image: $(elem).find('img.wp-post-image').attr('src'),
        title: $(elem).find('h2.entry-title').text(),
        excerpt: $(elem).find('p.hide_xxs').text().trim(),
        link: $(elem).find('h2.entry-title a').attr('href')
      })
    }
  });

  console.log(data);
}

scrapeRealtor()

const data = [
  {
    start_date: "2020-10-29 12:30",
    end_date: "2020-10-29 13:15",
    text:
      "Bloomberg Excel Add-In workshop (Register Link: https://www.baruch.cuny.edu/calendar/EventRegistration.aspx?Rid=3341&Iid=1121732&Frm=)",
    id: 1,
  },
  {
    start_date: "2020-10-20 15:30",
    end_date: "2020-10-20 17:00",
    text:
      "Tools for Clear Speech workshop - Describing Line Graphs (Register Link: https://tfcs.mywconline.com/schedule.php?scheduleid=sc5f16d957565b5)",
    id: 2,
  },
];





class Calendar extends Component {

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
              Back Home
            </Link>
          </li>
        </ul>
        <div className="scheduler-container">
          <Scheduler events={data} />
        </div>
      </div>
    );
  }
}
export default Calendar;
