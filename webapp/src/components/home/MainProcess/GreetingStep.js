import React, { Component } from 'react';

class GreetingStep extends Component {
  render() {
    const { app } = this.props;
    return (
      <div className="result">
        <a onClick={() => this.props.changeStep(1)}>
          <div>
            <h1>{app.item.name}</h1>
          </div>
          <img src="http://hotfunapps.com/soulmates/images/ogshare.jpg" />
        </a>
        <a className="btn-process">
          <b>Click here to know your Results</b>
        </a>
        <div className="des">
          <p>
            {' '}
            Please Login with Facebook to see your Results. We don't share App
            Result on your Wall without your Permission.{' '}
          </p>
          <p>
            You have been to war, seen success, experienced defeat, and created
            new allies within your clan. Now find out exactly which Clash of
            Clans” character are you!
          </p>
        </div>
      </div>
    );
  }
}

export default GreetingStep;
