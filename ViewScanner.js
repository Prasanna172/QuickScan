import React,{PureComponent,useState,Component} from 'react';
import {AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, TouchableNativeFeedback, SafeAreaView, useColorScheme, StatusBar } from 'react-native';
  

import { RNCamera } from 'react-native-camera';
import DocumentScanner from "react-native-document-scanner";
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Scanner extends PureComponent {
    render() {
    return (
        <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
        <View style={styles.container}>
            <Headerbar/>
            <RNCamera
                ref={ref => {
                this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
                }}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                    <View style={captureButton.out}>
                        <View style={captureButton.in}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
      );
    }


    takePicture() {
        const op = {};
        this.camera.takePictureAsync(op)
          .then((data) => {
            this.setState({'photoUri' : data})
            console.log(data);
            var uploadUrl = this.state.uploadUrl;
    
            var photo = {
              uri: data,
              type: 'image/jpeg',
              name: 'photo.jpg',
            };  
    
          }).then(() => this.props.navigation.navigate('CropView',{data:this.state.photoUri.uri}))
          .catch(err => alert('takePicture: ' + err));
      }
}

class DScanner extends Component {
    render() {
      return (
        <View>
          <DocumentScanner
            useBase64
            saveInAppDocument={false}
            onPictureTaken={data =>
              this.setState({
                image: data.croppedImage,
                initialImage: data.initialImage,
                rectangleCoordinates: data.rectangleCoordinates
              })
            }
            overlayColor="rgba(255,130,0, 0.7)"
            enableTorch={false}
            brightness={0.3}
            saturation={1}
            contrast={1.1}
            quality={0.5}
            onRectangleDetect={({ stableCounter, lastDetectionType }) =>
              this.setState({ stableCounter, lastDetectionType })
            }
            detectionCountBeforeCapture={5}
            detectionRefreshRateInMS={50}
            onPermissionsDenied={() => console.log("Permissions Denied")}
          />
          {/* <Image
            source={{ uri: `data:image/jpeg;base64,${this.state.image}` }}
            resizeMode="contain"
          /> */}
        </View>
      );
    }
  }

const Headerbar = () => {
    const defaultColor = 'rgba(0, 0, 0, 0.4)';
    const activeColor = '#3779ea';

    const [flashOn, isFlashOn] = useState(false);
    const [hdrOn, isHDROn] = useState(false);
    return(
        <View style={headerStyles.headerBar}>
            <TouchableNativeFeedback onPress={()=>{isFlashOn(flashOn => !flashOn);}}>
                <View style={headerStyles.contentView}>
                    <Image style={[headerStyles.icons,{tintColor:flashOn?activeColor:defaultColor}]} source={require('./res/drawable/flash_off.png')}/>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={()=>{isHDROn(hdrOn => !hdrOn);}}>
                <View style = {headerStyles.contentView}>
                    <Image style={[{height:40,width:40},{tintColor:hdrOn?activeColor:defaultColor}]} source={require('./res/drawable/hdr.png')}/>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={headerStyles.contentView}>
                    <Image style={[headerStyles.icons,headerStyles.defaultColor]} source={require('./res/drawable/refocus.png')}/>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};


// Styles
const headerStyles = StyleSheet.create({
    contentView:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerBar:{
        height: 62,
        flexDirection:'row'
    },
    icons:{
        height:25,
        width:25
    },
    defaultColor:{
        tintColor: 'rgba(0, 0, 0, 0.4)'
    }
});

const captureButton = StyleSheet.create({
    parent:{
        justifyContent: 'center',
        alignItems: 'center'  
    },
    out:{
        width: 70,  
        height: 70,   
        borderRadius: 40,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center'  
    },
    in:{
        width: 50,  
        height: 50,   
        borderRadius: 30,
        backgroundColor: 'white'   
    }
});
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });

export default Scanner;
