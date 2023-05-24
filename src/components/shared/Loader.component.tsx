import React from 'react';

export class Loader extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="loader">
        <div className="bounceball"></div>
      </div>
    );
  }
}
