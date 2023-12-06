import {Text, View, ScrollView, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './login.style';
import {BackBtn, Button} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be atleast 8 characters')
    .required('Required'),
  email: Yup.string()
    .email('Provide a valid email address')
    .required('Required'),
});

const LoginPage = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  return (
    <ScrollView>
      <SafeAreaView style={{marginHorizontal: 20}}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <Image
            source={require('../../App/assets/images/bk.png')}
            style={styles.cover}
          />
          <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}>
            {({handleChange, handleBlur, handleSubmit, values, errors, isValid, setFieldTouched}) => (
            <View>
              <View style= {styles.wrapper}>
                <Text style={styles.label}></Text>
              </View>
              <Button title={'L O G I N'} onPress={() => {}} />
            </View>
            )}
            
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginPage;
