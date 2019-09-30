import styled from 'styled-components';

export const ContentItem = styled.View`
    height:80px;
    padding:10px 15px;
    border-bottom-width:1px;
    border-bottom-color:#e6e6e6;
    align-items:center;
    flex-direction:row;
    position: relative;
`;
export const RoundItem = styled.View`
    width:60px;
    height:60px;
    align-items:center;
    justify-content:center;
    border-radius:30;
    border-width:1px;
    border-color:#e6e6e6;
`;
export const InfomationNumber = styled.View`
    margin-left:20px;
`;
export const Number = styled.Text`
    font-size:18px;
`;
export const Details = styled.Text`
    font-size:13px;
    color:#cccccc;
`;
export const CallBtns = styled.View`
    position: absolute;
    flex-direction:row;
    width:60px;
    height:60px;
    align-items:center;
    justify-content:center;
    right:10px;
`;
export const Call = styled.TouchableOpacity`
    margin-right:10px;
`;