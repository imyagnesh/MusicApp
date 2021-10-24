import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const useStyles = error => {
  const {colors} = useTheme();
  return StyleSheet.create({
    btn: {
      marginVertical: moderateScale(10),
      borderRadius: moderateScale(4),
      height: moderateScale(44),
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnText: {
      color: '#fff',
    },
  });
};

export default useStyles;
