import React from 'react';
import { Component } from 'react';
import styles from './App.css';

// components (scenes) that will be displayed by this component
import Home from './pages/Home';

// scenes is a silly trick to avoid routes, check the file to see it how works
import {Scene, SceneLink} from './Scenes';

export default class App extends Component {

  render() {
    // extract some fields from the props (to avoid use this.prop.bla after)
    const { scene } = this.props;

    return (
      <div className={styles.container}>
        <Scene scene="home" current={scene}>
          <Home {...this.props}/>
        </Scene>
      </div>
    );

  }
}
