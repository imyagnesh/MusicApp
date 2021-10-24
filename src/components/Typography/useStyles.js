import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

import normalize from '../../utils/normalize';

const useStyles = () => {
  const {colors} = useTheme();
  return StyleSheet.create({
    h1: {
      fontSize: normalize(32),
      lineHeight: normalize(32) * 1.4,
      fontWeight: '700',
      letterSpacing: 1.1,
      textTransform: 'capitalize',
      color: colors.text,
    },
    h2: {
      fontSize: normalize(24),
      lineHeight: normalize(24) * 1.3,
      fontWeight: '500',
      letterSpacing: 1,
      color: colors.text,
    },
    body1: {
      fontSize: normalize(20),
      lineHeight: normalize(20) * 1.2,
      fontWeight: '500',
      letterSpacing: 1,
      color: colors.text,
    },
    body2: {
      fontSize: normalize(18),
      lineHeight: normalize(18) * 1.2,
      fontWeight: '400',
      letterSpacing: 1,
      color: colors.text,
    },
    body3: {
      fontSize: normalize(16),
      lineHeight: normalize(16) * 1.2,
      fontWeight: '400',
      letterSpacing: 1,
      color: colors.text,
    },
    caption: {
      fontSize: normalize(12),
      lineHeight: normalize(12) * 1.2,
      fontWeight: '400',
      letterSpacing: 0.8,
      color: colors.text,
    },
    btn: {
      fontSize: normalize(18),
      lineHeight: normalize(18) * 1.2,
      fontWeight: '500',
      letterSpacing: 1.2,
      color: '#fff',
      textTransform: 'uppercase',
    },
    inlineError: {
      fontSize: normalize(14),
      lineHeight: normalize(14) * 1.2,
      fontWeight: '400',
      letterSpacing: 1,
      color: colors.notification,
      textTransform: 'capitalize',
    },
    error: {
      fontSize: 18,
      fontWeight: '500',
      lineHeight: 22,
      letterSpacing: 1.2,
      color: colors.notification,
      textTransform: 'capitalize',
    },
  });
};

export default useStyles;
