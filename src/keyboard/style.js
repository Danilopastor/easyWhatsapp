import { Animated } from 'react-native';
import styled from 'styled-components';

export const KeyboardContent = styled(Animated.View)`
    width:100%;
    height: 370px;
    bottom: 0;
    background-color:#fff;
    z-index:5;
    position:absolute;
`;
export const BoardInputContent = styled.View`
    width:100%;

`;
export const BoardInput = styled.View`
    justify-content:center;
    align-items:center;
    padding-top: 8px;
    padding-bottom:8px;
    padding-left:25px;
    padding-right:65px;
    border-top-width:1px;
    border-top-color:#f2f2f2;
    border-bottom-width: 1px;
    border-bottom-color:  #f2f2f2;
    margin-bottom:10px;
    position:relative;
`
export const BoxActions = styled.View`
    position:absolute;
    right:10px;
    top:20px;
`;
export const BtnAction = styled.TouchableOpacity`
    padding-left:5px;
`;
export const BoardInputItem = styled.TouchableOpacity`
    width:100%;
    align-items:center;
`;
export const InputItemText = styled.Text`
    font-size:43px;
    color: #4d4d4d;
    font-weight:normal;
`;
export const BoardContent = styled.View`
    width:280px;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-between;
`;
export const Key = styled.TouchableOpacity`
    width:80px;
    height:50px;
    align-items:center;
    justify-content:center;
    border-bottom-width: ${props => props.border};
    border-bottom-color:#f9f6f6;
`;
export const KeyText = styled.Text`
    font-size:23px;
`;
export const CallBtns = styled.View`
    position:absolute;
    bottom: 5px;
    width:100%;
    height:100px;
    z-index:10;
    align-items:center;
    justify-content:center;
`;
export const Call = styled.TouchableOpacity`
    background-color: #fbf9f9;
    padding:5px 50px;
    border-radius:30px;
`;
export const ScreenTouch = styled.TouchableOpacity`
    background-color: #0000002b;
    position:absolute;
    width:100%;
    z-index:5;
`;
export const ShowKeyboard = styled.TouchableOpacity`
    background-color: #00e676;
    position:absolute;
    align-items:center;
    justify-content:center;
    width:60px;
    height:60px;
    border-radius:30px;
    bottom:30px;
    right:20px;
    z-index:5;
`;