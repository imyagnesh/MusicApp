import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import FastImage from 'react-native-fast-image';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

const Login = ({navigation}) => {
  const {colors} = useTheme();
  const passwordRef = useRef();
  const mobileRef = useRef();
  const initialValues = {
    username: '',
    password: '',
    mobileNumber: '',
  };
  const {width: screenWidth} = useWindowDimensions();
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });
    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}} edges={['bottom']}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={{flex: 1, justifyContent: 'center'}}>
          {!isKeyboardVisible && (
            <FastImage
              source={{
                uri: 'https://reactjs.org/logo-og.png',
                priority: FastImage.priority.high,
              }}
              style={{
                height: moderateScale(100),
                width: screenWidth * 0.4,
                alignSelf: 'center',
                marginVertical: moderateScale(10),
              }}
            />
          )}
        </View>

        <View style={{marginHorizontal: moderateScale(10)}}>
          <Typography
            variant="h1"
            style={{
              textAlign: 'center',
            }}
            allowFontScaling={true}
            numberOfLines={1}
            maxFontSizeMultiplier={1.2}>
            Login
          </Typography>
          <Formik
            onSubmit={values => {
              console.log(values);
              navigation.navigate('HomeTab');
            }}
            validate={values => {
              const errors = {};
              if (!values.username) {
                errors.username = 'Username is required...';
              }
              if (!values.password) {
                errors.password = 'Password is required..';
              }
              return errors;
            }}
            initialValues={initialValues}>
            {({
              values,
              handleChange,
              handleSubmit,
              handleBlur,
              errors,
              touched,
              setFieldValue,
            }) => (
              <>
                <Input
                  value={values.username}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  name="username"
                  error={touched.username ? errors.username : ''}
                  placeholder="Username"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoComplete="email"
                  textContentType="emailAddress"
                  onSubmitEditing={() => {
                    mobileRef.current?.focus();
                  }}
                />
                <Input
                  value={values.mobileNumber}
                  name="mobileNumber"
                  error={touched.password ? errors.mobileNumber : ''}
                  onChangeText={handleChange('mobileNumber')}
                  onBlur={handleBlur('mobileNumber')}
                  ref={mobileRef}
                  keyboardType="phone-pad"
                  placeholder="Mobile Number"
                  autoComplete="tel"
                  textContentType="telephoneNumber"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordRef.current?.focus();
                  }}
                />
                <Input
                  value={values.password}
                  name="password"
                  error={touched.password ? errors.password : ''}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  ref={passwordRef}
                  placeholder="Password"
                  autoComplete="password"
                  textContentType="password"
                  returnKeyType="go"
                  secureTextEntry
                  onSubmitEditing={handleSubmit}
                />

                <Button title="Login" onPress={handleSubmit} />
              </>
            )}
          </Formik>
          <Typography
            variant="body3"
            style={{
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            Don't have an account?{' '}
            <Typography
              onPress={() => {}}
              variant="body2"
              style={{
                color: colors.primary,
                fontWeight: '700',
              }}>
              Sign Up
            </Typography>
          </Typography>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
