import React from 'react';
import {Text} from 'react-native';
import useStyles from './useStyles';

const Typography = ({
  variant,
  style,
  allowFontScaling,
  maxFontSizeMultiplier,
  ...rest
}) => {
  const styles = useStyles();
  return (
    <Text
      style={[styles[variant], style]}
      allowFontScaling={allowFontScaling || true}
      maxFontSizeMultiplier={maxFontSizeMultiplier || 1.2}
      {...rest}
    />
  );
};

export default Typography;
