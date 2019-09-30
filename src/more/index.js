import React, { Component } from 'react';
import { Dimensions, Animated} from 'react-native';

import {
    BoxMore,
    MaskMore,
    ContentMore,
    ItemMore,
    ButtomText
} from './style';

const {height, width} = Dimensions.get('window');
var widthAnimate = new Animated.Value(0)
var heightAnimate = new Animated.Value(0)

function OpenClose(param){

    Animated.timing(widthAnimate, {
        duration: 200,
        toValue: param.width
       }).start();
    Animated.timing(heightAnimate, {
        duration: 400,
        toValue: param.height
       }).start();

}
export default More = ({ params, handleClick,navigation,BackPress }) =>{
    OpenClose(params);

    handdleConfig = ()=> {
        BackPress();
        navigation.navigate('Config');
    }
    handleAbout = () => {
        BackPress();
        navigation.navigate('About');
    }

    return <>
    <BoxMore
    style={{
        width: widthAnimate, height: heightAnimate
    }}
    >
    <ContentMore>
        <ItemMore onPress={this.handdleConfig}><ButtomText>Preferências</ButtomText></ItemMore>
        <ItemMore onPress={this.handleAbout}><ButtomText>Sobre</ButtomText></ItemMore>
    </ContentMore>
    </BoxMore>
    {params.status && <MaskMore style={{height, width}} onPress={handleClick}/> }
    </>
}
