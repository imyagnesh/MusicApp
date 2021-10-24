import React from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import useStyles from './useStyles';
import Typography from '../Typography';

const Button = ({style, title, textStyle, ...rest}) => {
  const styles = useStyles();
  return (
    <RectButton style={[styles.btn, style]} {...rest}>
      <View accessible accessibilityRole="button">
        <Typography style={[styles.btnText, textStyle]} variant="btn">
          {title}
        </Typography>
      </View>
    </RectButton>
  );
};

export default Button;
