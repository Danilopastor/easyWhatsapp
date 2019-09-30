import styled from 'styled-components';

export const Box = styled.View`
    flex:1;
    padding-top: 30px;
`;
export const Item = styled.View`
    padding-left:20px;
    padding-right:20px;
`;
export const Label = styled.Text`
    font-size:15px;
    color: #4d4d4d;
`;
export const LabelInfo = styled.Text`
    font-size:12px;
    color: #ccc;
`;
export const Input = styled.TextInput`
    font-size:18;
    padding-bottom:5px;
    margin-bottom:10px;
    border-bottom-width:1px;
    border-bottom-color:#f9f6f6;
`;
export const Buttom = styled.TouchableOpacity`
    width: 100%;
    justify-content:center;
    align-items:center;
    padding-top:10px;
    padding-bottom:10px;
    margin-top:30px;
    background-color:#00e676;
`;
export const TextButtom = styled.Text`
    font-size:13px;
    color:#fff;
`;
export const BoxSwitch = styled.View`
    position:relative;
    padding-top: 5px;
    padding-bottom:5px;
`;
export const CustomSwitch = styled.Switch`
    padding:0;
    position:absolute;
    right:0;
`;