import { Text,View,StyleSheet } from 'react-native';
import React from 'react';

const BackActionBar = () => {
    return(
      <View style={styles.actionBar}>
      <View style={{flex:1}}>
        {/* Navigation */}
      </View>
      <View style = {{flex:4,justifyContent: 'center',alignItems: 'center'}}>
        <Text style={{fontWeight: "bold",fontFamily:"San Francisco",color:"#3779ea",fontSize:20}}>QuickScan</Text>
      </View>
      <View style={{flex:1}}>
        {/* ContentView */}
      </View>
    </View>
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
});

export {ActionBar};