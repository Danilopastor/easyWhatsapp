import { Animated } from 'react-native';
import styled from 'styled-components';


export const BoxMore = styled(Animated.View)`
    position:absolute;
    right:5px;
    top:5px;
    border-radius:4px;
    background-color:#fff;
    overflow:hidden;
    z-index: 9999;
`;
export const MaskMore = styled.TouchableOpacity`
    position:absolute;
    right:0px;
    top:0px;
    background-color:#000;
    z-index: 9998;
    opacity:0.1;
`;
export const ContentMore = styled.View`

`;
export const ItemMore = styled.TouchableOpacity`
    padding-top: 15px;
    padding-bottom:15px;
    padding-left:15px;
`;
export const ButtomText = styled.Text`
    font-size:16px;
`;