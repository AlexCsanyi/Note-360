import React from "react";

class Pricing extends React.Component {
  render() {
    return (
      <div className="secondary-text-container">
        <h2>
          An app that is <span id="green-subtitle">FREE</span>, designed with
          the <span id="green-underline">user in mind</span>.
        </h2>
        <p id="secondary-bold-paragraph">
          The app is complitely free - you only pay if you want to upgrade the
          storage and invite friends and colleagues to share your directory.
        </p>
        <div className="secondary-info">
          <p className="secondary-info-title">Basic Plan</p>
          <p className="secondary-info-title">Demo</p>
          <p className="secondary-info-value">1 GB of free storage</p>
          <p className="secondary-info-value">20 MB of free storage</p>
        </div>
        <div>
          <p className="secondary-info-title">Upgrade when you are ready</p>
          <p className="secondary-info-value">
            There is no minimum length of term; you nly have to upgrade if you
            ran out of space
          </p>
        </div>
        <div className="secondary-noMargin">
          <p className="secondary-info-title">See below for upgraded plans</p>
          <p className="secondary-info-value">Table is coming soon</p>
        </div>
      </div>
    );
  }
}

export default Pricing;
