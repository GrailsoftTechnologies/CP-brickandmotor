import React, { Component } from "react";
import "./styles.css";

class Contact extends Component {
  render() {
    return (
      <main className="wrapper">
        <section>
          <div className="lineStyle2">Call- 971.988.6575 </div>
          <hr />
          <div className="lineStyle2">
            <a
              href="https://www.amazon.com/restaurants/brick-and-motor-portland/d/B079J6MDKB?ref_=amzrst_b_B079J6MDKB_23"
              alt="link to amazon delivery"
            >
              Amazon Delivery
            </a>
          </div>
          <hr />
          <div className="lineStyle2">Map will Go here</div>
          <hr />
          <div className="lineStyle2">Follow</div>
          <div className="lineStyle2">STUFF</div>
          <div className="lineStyle2">HERE</div>
        </section>
      </main>
    );
  }
}

export default Contact;
