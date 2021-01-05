import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import reducers, { namespace } from './states';

const PLUGIN_NAME = 'DemobldrStylingPlugin';

export default class DemobldrStylingPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    flex.MainHeader.defaultProps
    .logoUrl = "https://www.mercuryinsurance.com/assets/images/mi-logo-web.svg";
  }

}
