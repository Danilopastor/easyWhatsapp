import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAndroidBackButton,removeAndroidBackButtonHandler } from '../utils/backbutton';
import logo from '../assets/logo.png';

import {
    BoxImage,
    Logo,
    Box,
    Item,
    Label,
    LabelInfo
 } from './style';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  async componentDidMount(){
    handleAndroidBackButton(onBackButtonPressAndroid);
  }
  render() {
    const { param , dispatch} = this.props;
    UpdateStatus = (status) => {
        return {
            type: 'UPDATE_STATUS',
            status
          }
     }
    onBackButtonPressAndroid = () => {
        const { navigation } = this.props
        navigation.navigate('Home');
        dispatch(UpdateStatus(true))
        return true;
     }
    return (
      <Box>
         <>
            <BoxImage><Logo source={logo}></Logo></BoxImage>
            <Item>
                <LabelInfo>Informações:</LabelInfo>
                <Label>Este aplicativo foi criado para estudo, baseado na tecnologia React-Native</Label>
            </Item>
            <Item>
                <LabelInfo>Casos de Uso:</LabelInfo>
                <Label>O EasyWhatsApp é usada para chamar contatos no WhatsApp sem que o Usuario tenha que salvar o contato na sua agenda, para isso basta colocar o número no teclado na pagina inicial e clicar no icone que aparece abaixo.</Label>
            </Item>
            <Item>
                <LabelInfo>Sobre o Desenvolvedor:</LabelInfo>
                <Label>Danilo Pastor, desenvolvedor web e entrando no mundo dos aplicativos, você pode encontrar no @danilopastorr no Twitter e Instagram.</Label>
            </Item>
          </>
      </Box>
    );
  }
}

index.navigationOptions = {
    title: 'Sobre',
    headerStyle: {
        backgroundColor: '#00e676',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
  }
  export default connect(state => ({ param : state.status_backbutton }))(index)