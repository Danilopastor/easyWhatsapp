import React from 'react';
import { Linking,Alert } from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-community/async-storage';
import { 
    ContentItem,
    RoundItem,
    InfomationNumber,
    Number,
    Details,
    CallBtns,
    Call
} from './style';

function ItemHistory({Item , handleClick, dispatch}){
    haddleSubmit = (number) =>{
        Linking.openURL(`whatsapp://send?text=Oi!&phone=+${number}`);
    }
    removeItem = async (id) =>{
         await AsyncStorage.removeItem(id);
        //dispatch(ActionStorage(id));
        handleClick()
    }
    confirmRemove = (id) =>{
      Alert.alert(
        'Confirmar',
        'Tem certeza que deseja remover esse item?'
        [
          {text: 'CANCEL', style: 'cancel'},
          {text: 'OK', onPress: () => removeItem(id) }
        ]
      )
    }
    function ActionStorage(id){
      return {
        type: 'RELOAD',
        id
      }
    }
    return <ContentItem>
            <RoundItem><Icon name="ios-person" size={35} color="#e6e6e6" /></RoundItem>
            <InfomationNumber>
                <Number>{ Item.number }</Number>
                <Details>Detalhes</Details>
            </InfomationNumber>
            <CallBtns>
              <Call onPress={(e) => this.removeItem(Item._id)} >
                <Icon name="ios-remove-circle" size={35} color="#e6e6e6" />
              </Call>
            <Call onPress={(e) => this.haddleSubmit(Item.realNumber)} >
                <Icon name="logo-whatsapp" size={35} color="#e6e6e6" />
              </Call>
            </CallBtns>
          </ContentItem>
}
export default connect(state => ({}))(ItemHistory)
