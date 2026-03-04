import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {SafeAreaView,TouchableOpacity, ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Button, TextInput,Alert} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer,useNavigation} from '@react-navigation/native';
import ProfileScreen from './ProfileScreen';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {actions as signInActions,
  selectors as SignInSelectors,
} from './store/modules/signIn';
import * as Keychain from "react-native-keychain";


const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userCredential = {
        email: email,
        password: password
    }
    const fetchSignInData = () => dispatch(signInActions.signInGetUsrId(userCredential));

    const handleCheckSignIn = async () => {
      const tokenCredentialsId = await Keychain.getGenericPassword();

      if (!tokenCredentialsId) {
        throw new Error("No credentials found");
      }
      const userToken = {
        usrUniqueId: tokenCredentialsId.password
      }
      console.log("Sign_In_userToken", userToken)
      dispatch(signInActions.fetchUserData(userToken));
      };

    const signInfetchData = async()=>{
    try {
      await fetchSignInData(); ///getToken
      await handleCheckSignIn()
      .then(navigation.navigate('Tab'))
    } catch (error) {
    }
    }

    const enterPhone = (phoneData) =>{
      setPhone(phoneData)
    }

    const enterEmail = (emailData) =>{
      setEmail(emailData.toLowerCase())
    }

    const enterPassword = (passwordData) =>{
      setPassword(passwordData)
    }

    const register =()=>{
      navigation.navigate('Register');
      }

    return (
      <SafeAreaView style={styles.container}>
      <View >
        {/* <Text>Welcome Please Sign In</Text>
        <Text>Phone</Text>
        <TextInput onChangeText={enterPhone}></TextInput>
        <Text>Email</Text>
        <TextInput onChangeText={enterEmail}></TextInput>
        <Text>Password</Text>
        <TextInput onChangeText={enterPassword}></TextInput> */}
          {/* <Button title='Register Here' onPress={()=>(register())}>Register Here</Button> */}
          {/* <Button title='Sign In'       onPress={()=>(signIn())}></Button> */}
          {/* <Button title='Sign-In' onPress={()=>{signInfetchData()}}>fetchData</Button> */}
          {/* <Button title='Home'          onPress={() => {navigation.navigate('Home');
                // navigation.navigate('Profile', {
                //   itemId: 86,
                //   otherParam: 'anything you want here',
                //   name:'Abc'
                // });
              }}></Button> */}



              {/*  */}



  
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Logo */}
      <View style={styles.logoContainer}>
        {/* Replace with your logo image */}
        {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}
        <Text style={styles.logoText}>UrbanSalon</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subtitle}>Create a new account</Text>

      {/* Input Fields */}
      <TextInput
        placeholder="Name"
        placeholderTextColor="#A0A0A0"
        style={styles.input}
        onChangeText={(e)=>{console.log("Name",e)}}
      />
      <TextInput
        placeholder="Phone"
        placeholderTextColor="#A0A0A0"
        style={styles.input}
        onChangeText={enterPhone}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={enterEmail}
        value={email}
        
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#A0A0A0"
        secureTextEntry
        style={styles.input}
        onChangeText={enterPassword}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button}
        onPress={()=>{signInfetchData()}}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Terms */}
      <Text style={styles.termsText}>
        By continuing Sign up you agree to the following{' '}
        <Text style={styles.linkText}>Terms & Conditions</Text> without reservation
      </Text>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}> Sign up</Text>
        </TouchableOpacity>
        <Button title='Register Here' onPress={()=>(register())}>Register Here</Button>
        <Button title='Home'          onPress={() => {navigation.navigate('Home');
                // navigation.navigate('Profile', {
                //   itemId: 86,
                //   otherParam: 'anything you want here',
                //   name:'Abc'
                // });
              }}></Button>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  backButton: {
    marginTop: 10,
    width: 40,
  },
  backText: {
    fontSize: 22,
    color: '#1C1C1E',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 30,
    color: '#1C1C1E',
  },
  subtitle: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 6,
    marginBottom: 24,
  },
  input: {
    height: 54,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    height: 56,
    backgroundColor: '#3A49F9',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  termsText: {
    fontSize: 12,
    color: '#8E8E93',
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 18,
  },
  linkText: {
    color: '#6C63FF',
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  footerText: {
    fontSize: 14,
    color: '#8E8E93',
  },
  footerLink: {
    fontSize: 14,
    color: '#6C63FF',
    fontWeight: '600',
  },
}
 
    );
  ;

  