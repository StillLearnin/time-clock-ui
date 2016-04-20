import React from 'react';
import { Component } from 'react';

// components (scenes) that will be displayed by this component
import Home from './pages/Home';

// scenes is a silly trick to avoid routes, check the file to see it how works
import {Scene, SceneLink} from './Scenes';

export default class App extends Component {

  render() {
    // extract some fields from the props (to avoid use this.prop.bla after)
    const { scene } = this.props;

    return (
      <div className="container">
        <Scene scene="home" current={scene}>
          <Home {...this.props}/>
        </Scene>
        <hr />
        <p className="help-block">
          <strong>Use CTRL + H to show/hide the redux dev tool.</strong> <br />
          <strong>Note</strong> that the state and the application data are independent,
          so despite you can time travel on the state you can not do it on changes pushed to the API
          just like when you are working with a real remote database. <br />
          <a target="_blank" href="https://github.com/cristianszwarc/react_crud_localStorage">GitHub</a>
        </p>

      </div>
    );

  }
}
