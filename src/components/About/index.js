import React, { Component } from 'react';
import './styles.css';

class About extends Component {
render() {
  return(
      <main className='wrapper'>
        <section>
          <div className="lineStyle1">Pizza </div>
          <div className="lineStyle2">Wood-Fired to Perfection</div>
          <div className="lineStyle1">Dough </div>
          <div className="lineStyle2"> hand-mixed daily</div>
          <div className="lineStyle2">Serving Satisfaction from 4 PM to LATE.</div>

        </section>
      </main>
    );
  }
}

export default About;
