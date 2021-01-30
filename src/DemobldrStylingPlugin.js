import { FlexPlugin } from 'flex-plugin';

const PLUGIN_NAME = 'DemobldrStylingPlugin';

export default class DemobldrStylingPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    const { REACT_APP_LOGO_URL } = process.env;
    flex.MainHeader.defaultProps.logoUrl = REACT_APP_LOGO_URL;
  }
}
