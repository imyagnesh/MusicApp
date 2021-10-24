import React, {useState, forwardRef} from 'react';
import {View, TextInput} from 'react-native';
import {
  BorderlessButton,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import VisibilityIcon from '../../../assets/icons/visibility.svg';
import VisibilityOffIcon from '../../../assets/icons/visibility_off.svg';
import useStyles from './useStyles';
import Typography from '../Typography';
import {useTheme} from '@react-navigation/native';

const RightIcon = gestureHandlerRootHOC(
  ({isPasswordVisible, ...rest}) => {
    const {colors} = useTheme();
    const IconProps = {
      height: 24,
      width: 24,
      fill: colors.primary,
    };
    return (
      <BorderlessButton {...rest}>
        <View accessible accessibilityRole="button">
          {isPasswordVisible ? (
            <VisibilityIcon {...IconProps} />
          ) : (
            <VisibilityOffIcon {...IconProps} />
          )}
        </View>
      </BorderlessButton>
    );
  },
  {
    flex: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    paddingHorizontal: moderateScale(10),
    height: moderateScale(44, 0.3),
    justifyContent: 'center',
  },
);

const Input = forwardRef(({style, error, secureTextEntry, ...rest}, ref) => {
  const styles = useStyles(error);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={{marginVertical: moderateScale(10)}}>
      <TextInput
        ref={ref}
        style={[styles.input, style]}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        {...rest}
      />
      {!!error && <Typography variant="inlineError">{error}</Typography>}
      {!!secureTextEntry && (
        <RightIcon
          isPasswordVisible={isPasswordVisible}
          onPress={() => setIsPasswordVisible(val => !val)}
        />
      )}
    </View>
  );
});

export default Input;
