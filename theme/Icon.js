import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './variables';

export default (variables = variable) => {
  const iconTheme = {
    fontSize: variables.iconFontSize,
  };


  return iconTheme;
};
