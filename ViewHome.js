import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Platform,
  TouchableNativeFeedback,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Home = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundColor = isDarkMode ? Colors.darker : Colors.white;
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.white,
    };

    return (
        <SafeAreaView style={[backgroundStyle,{flex:1,flexDirection:'column'}]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundColor} />
        <View style={styles.contentView}>
            {/* <ActionBar/> */}
            <View style={styles.fabView}>
            <TouchableNativeFeedback onPress={() => navigation.navigate('Scanner')} background={TouchableNativeFeedback.Ripple('#ffffff', true)}>
                <View style={styles.fab}>
                  <Image style={styles.fabIcon} source={require('./res/drawable/scanner.png')}/>
                </View>
            </TouchableNativeFeedback>
            </View>
            <View style={{backgroundColor: isDarkMode ? Colors.black : Colors.white, alignItems:'center', justifyContent:'center',position: 'absolute',height:'100%',width:'100%',zIndex:1}}>
                  <View style={{bottom:50}}>
                    <Text style={{color:'rgb(185,185,185)',fontSize:20}}>Scan a document ;)</Text>
                  </View>
            </View>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            
            </ScrollView>
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contentView:{
      flex:1
    },
    actionBar:{
      height: 62,
      flexDirection:'row'
    },
    fabView:{   
      width: 57,  
      height: 57,   
      borderRadius: 30,                            
      position: 'absolute',                                          
      bottom: 20,                                                    
      right: 20,
      zIndex:1,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
    },
    fab:{
      width: 57,  
      height: 57,   
      borderRadius: 30,            
      backgroundColor: '#ee6e73',                                    
      alignItems: 'center',
      justifyContent:'center'
    },
    fabIcon:{
      width: 30,
      height: 30
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
});

export default Home;