import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { version } from 'react-dom/package.json';

import { storiesOf } from '@storybook/react';

class MyComponent extends Component {
  componentDidMount() {
    console.log(`calling findDOMNode with react-dom@${version}`);
    console.log(findDOMNode(this));
  }
  render() {
    return <div />;
  }
}

storiesOf('Test', module).add('fails', () => <MyComponent />);
