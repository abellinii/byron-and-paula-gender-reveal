import * as WebBrowser from 'expo-web-browser';
import React , { useState } from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';
import { Image, Platform, StyleSheet, Text, TouchableOpacity,TouchableHighlight, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Asset, AppLoading } from 'expo';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {

  const [color1,setColor1]=useState('');
  const [color2,setColor2]=useState('');
  const [color3,setColor3]=useState('');
  const [press1,setPress1]=useState(false);
  const [press2,setPress2]=useState(false);
  const [press3,setPress3]=useState(false);


  return (
    
    <View style={styles.container}>
        {press1  && press2 && press3 ?
      
          <ImageBackground source={require('../assets/images/pink.png') }  style={styles.image}>
<view style={styles.girl}>
<ConfettiCannon count={200} origin={{x: -10, y: 0}} />
 </view>
</ImageBackground>

    
        :
      <ImageBackground source={require('../assets/images/gender.jpg') } style={styles.image}>
      
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
    
        
        <View style={styles.helpContainer}>

          <View style={styles.babybut}>
          <TouchableHighlight
  activeOpacity={1}
  underlayColor="black"
  onClick={() => {setColor1("pink"); setPress1(true)}}
        
   style={{
       borderWidth:1,
       borderColor:'grey',
       alignItems:'center',
       justifyContent:'center',
       paddingTop:"20%",
       paddingBottom:"20%",
       width:'150%',
       height:'150%',
       backgroundColor:color1,
       borderRadius:'100%',
     }}
 >
      <Image
            source={require('../assets/images/babyboy.png')}
            style={styles.welcomeImage}
          />
 </TouchableHighlight>
 </View>
 <View style={styles.babybut}>
 <TouchableHighlight
  activeOpacity={1}
  underlayColor="black"
  onClick={() => { setColor2("#89cff0") ; setPress2(true)}}
        
   style={{
       borderWidth:1,
       borderColor:'grey',
       alignItems:'center',
       justifyContent:'center',
       paddingTop:"20%",
       paddingBottom:"20%",
       width:'150%',
       height:'150%',
       backgroundColor:color2,
       borderRadius:'100%',
     }}
 >
      <Image
            source={require('../assets/images/babyboy.png')}
            style={styles.welcomeImage}
          />
 </TouchableHighlight>
 </View>
 <View style={styles.babybut}>
 <TouchableHighlight
  activeOpacity={1}
  underlayColor="black"
  onClick={() => {setColor3("pink") ; setPress3(true)}}
        
   style={{
       borderWidth:1,
       borderColor:'grey',
       alignItems:'center',
       justifyContent:'center',
       paddingTop:"20%",
       paddingBottom:"20%",
       width:'150%',
       height:'150%',
       backgroundColor:color3,
       borderRadius:'100%',
     }}
 >
      <Image
            source={require('../assets/images/babyboy.png')}
            style={styles.welcomeImage}
          />
 </TouchableHighlight>
 </View>
        </View>
        


      </ScrollView>
    
      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Wake the sleeping babies to find out if we are having a boy or a girl!</Text>

      
      </View>
      </ImageBackground>
}
    </View>

  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

async function _cacheResourcesAsync() {
  return Asset.loadAsync([
    require('../assets/images/pink.png'),
    require('../assets/images/gender.jpg'),
    require('../assets/images/babyboy.png'),
    require('../assets/images/gender.jpg')
  ]);
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    
    flexDirection: 'column-reverse',
   
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  developmentModeText: {
    marginBottom: 20, 
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  babybut: {
    alignItems: 'center',
    paddingLeft:'14%',
    paddingRight:'14%'
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 40,
    color: 'rgba(0,0,0,0.4)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection:'row',
    width:'100%',
    marginBottom: '10%',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
