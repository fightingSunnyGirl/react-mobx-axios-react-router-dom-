import React, { Component } from 'react';
import { Switch} from 'react-router-dom';

import { FrontendAuth } from './FrontendAuth';
import { routerConfig } from './config';


class Routes extends Component {
  render() {
    return (
      <Switch>
        <FrontendAuth config={routerConfig} />
      </Switch>
    )
  }
}

export default Routes