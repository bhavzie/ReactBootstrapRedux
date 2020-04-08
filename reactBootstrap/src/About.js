import React, { Component } from 'react';


export default class About extends Component {
    render() {
        return (
          <div className="container">
            <h1 className="display-4">About</h1>
            <hr />
            <p className = "lead">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        );
    }
}
