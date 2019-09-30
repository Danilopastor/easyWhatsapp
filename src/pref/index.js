import React, { Component } from 'react';
import { Switch } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { handleAndroidBackButton,removeAndroidBackButtonHandler } from '../utils/backbutton';

import { 
    Box,
    Item,
    Label,
    LabelInfo,
    Input,
    Buttom,
    TextButtom,
    BoxSwitch,
    CustomSwitch
 } from './style';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Country : '',
        City: '',
        Vib: false
    };
  }
  async componentDidMount(){
    handleAndroidBackButton(onBackButtonPressAndroid);

    Config = await AsyncStorage.getItem('@EasyWhatsapp:Configs');
    Config = JSON.parse(Config);
    this.setState({
        Country : Config.Country,
        City : Config.City,
        Vib : Config.Vib
    })
  }
  render() {
    const { param , dispatch} = this.props;
    UpdateStatus = (status) => {
        return {
            type: 'UPDATE_STATUS',
            status
          }
     }
    UpdateConfig = (status) => {
            return {
                type: 'UPDATE_CONFIG',
                status
              }
    }
    onBackButtonPressAndroid = () => {
        const { navigation } = this.props
        navigation.navigate('Home');
        dispatch(UpdateStatus(true))
        return true;
     }
     handleSubmit = async () => {
        const { navigation } = this.props
        const { Country,City, Vib } = this.state;
        DataConfig = {Country,City,Vib}
        await AsyncStorage.setItem('@EasyWhatsapp:Configs',JSON.stringify(DataConfig));
        navigation.navigate('Home');
        dispatch(UpdateConfig(true))
      }
     handleVib = () => {
       const { Vib } = this.state;
       if(Vib){
         this.setState({Vib: false})
         return
       }
       this.setState({Vib: true})

     }
    const { Country,City,Vib } = this.state;
    return (
      <Box>
        <Item>
           <Label>Código do País</Label> 
           <LabelInfo>Defina o código do país, pra ser usado como padrão</LabelInfo>
           <Input keyboardType="phone-pad" value={Country} onChangeText={(text) => this.setState({ Country: text})}/>
        </Item>
        <Item>
           <Label>Código da Cidade</Label>
           <LabelInfo>Defina um código de área assim não precisa informar sempre</LabelInfo>
           <Input keyboardType="phone-pad" value={City} onChangeText={(text) => this.setState({ City: text })}/>
        </Item>
        <Item>
          <>
            <BoxSwitch>
                <Label>Vibrar ao Digitar</Label>
                <CustomSwitch onValueChange={handleVib} value={Vib}/>
            </BoxSwitch>
            <LabelInfo>Faz o telefone vibrar levemente ao digitar um número</LabelInfo>
           </>
        </Item>
        <Item>
            <Buttom onPress={handleSubmit}>
                <TextButtom>Salvar</TextButtom>
            </Buttom>
        </Item>
      </Box>
    );
  }
}

index.navigationOptions = {
    title: 'Preferências',
    headerStyle: {
        backgroundColor: '#00e676',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
  }
  export default connect(state => ({ param : state.status_backbutton }))(index)