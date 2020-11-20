import React from "react";
import styles from "./Team.module.css";

const Team = () => (
  <>
    <div style={styles.teammember} className="col-md-2 text-center">
      <img
        style={styles.teamphoto}
        alt="Jing"
        width="80%"
        src="https://cdn.glitch.com/8c639e73-4683-4cc1-b093-ef7b7328e9e5%2FJingWang.png?v=1603066917833"
      />
      <h4
        className="text-center"
        style={{ color: "#5394A0", letterSpacing: "-1px" }}
      >
        Jing Wang
      </h4>
      <p>Business Analyst</p>
    </div>

    <div style={styles.teammember} className="col-md-2 text-center">
      <img
        style={styles.teamphoto}
        alt="Sichan"
        width="80%"
        src="https://cdn.glitch.com/8c639e73-4683-4cc1-b093-ef7b7328e9e5%2FSichanChen.png?v=1603066923278"
      />
      <h4
        className="text-center"
        style={{ color: "#5394A0", letterSpacing: "-1px" }}
      >
        Sichan Chen
      </h4>
      <p>System Designer</p>
    </div>

    <div style={styles.teammember} className="col-md-2 text-center">
      <img
        style={styles.teamphoto}
        alt="Yajie"
        width="80%"
        src="https://cdn.glitch.com/8c639e73-4683-4cc1-b093-ef7b7328e9e5%2FYajieHou.png?v=1603066925778"
      />
      <h4
        className="text-center"
        style={{ color: "#5394A0", letterSpacing: "-1px" }}
      >
        Yajia Hou
      </h4>
      <p>Product Manager</p>
    </div>

    <div style={styles.teammember} className="col-md-2 text-center">
      <img
        className={styles.teamphoto}
        alt="Phoebe"
        width="80%"
        src="https://cdn.glitch.com/8c639e73-4683-4cc1-b093-ef7b7328e9e5%2FYahengWu.png?v=1603066913331"
      />
      <h4
        className="text-center"
        style={{ color: "#5394A0", letterSpacing: "-1px" }}
      >
        Yaheng Wu
      </h4>
      <p>Web Developer</p>
    </div>
  </>
);

export default Team;