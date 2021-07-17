import React,{PureComponent,useState,Component} from 'react';
import {AppRegistry, StyleSheet, Text, TouchableOpacity, View, Image, Button, TouchableNativeFeedback, SafeAreaView, useColorScheme, StatusBar } from 'react-native';

import CustomCrop from "react-native-perspective-image-cropper";

class CropView extends Component {
    constructor(props){
        super(props);
        console.log(this.props.route.params.data);
        Image.getSize(this.props.route.params.data, (width, height) => {
          this.setState({
            imageWidth: width,
            imageHeight: height,
            initialImage: this.props.route.params.data,
            rectangleCoordinates: {
              topLeft: { x: 10, y: 10 },
              topRight: { x: 10, y: 10 },
              bottomRight: { x: 10, y: 10 },
              bottomLeft: { x: 10, y: 10 }
            }
          });
        });
    }

  updateImage(image, newCoordinates) {
    this.setState({
      image,
      rectangleCoordinates: newCoordinates
    });
  }

  crop() {
    this.customCrop.crop();
  }

  render() {
    return (
      <View style={{flex:1}}>
        {/* <CustomCrop
          updateImage={this.updateImage.bind(this)}
          rectangleCoordinates={this.state.rectangleCoordinates}
          initialImage={this.state.initialImage}
          height={this.state.imageHeight}
          width={this.state.imageWidth}
          ref={ref => (this.customCrop = ref)}
          overlayColor="rgba(18,190,210, 1)"
          overlayStrokeColor="rgba(20,190,210, 1)"
          handlerColor="rgba(20,150,160, 1)"
          enablePanStrict={false}
        /> */}
        <TouchableOpacity>
          <Button style={{position:'absolute',bottom:0}} title="CROP"/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CropView;