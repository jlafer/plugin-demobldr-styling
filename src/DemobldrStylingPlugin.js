import { FlexPlugin } from 'flex-plugin';

const PLUGIN_NAME = 'DemobldrStylingPlugin';

export default class DemobldrStylingPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    flex.MainHeader.defaultProps
    .logoUrl = "https://www.mercuryinsurance.com/assets/images/mi-logo-web.svg";
  }
}
