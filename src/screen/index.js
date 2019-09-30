import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { BackHandler, FlatList, Alert} from 'react-native';
import { handleAndroidBackButton,removeAndroidBackButtonHandler } from '../utils/backbutton';
import More from '../more';
import ItemHistory from '../Item';
import { 
  Screen,
  Header,
  BtnHeader,
  TitleHeader,
  ContentList
} from './style';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      more_params : {
        status: false ,
        width : 0,
        height: 0
      }
    };
  }
  componentDidMount() {
    handleAndroidBackButton(this.onBackButtonPressAndroid);
  }
  handleMore = () =>{
    const { more_params } = this.state;
    if(!more_params.status){
      this.setState(
      {
        more_params : { 
          status : true, 
          width  : 170,
          height : 100 
        } 
      }
      )
    }else{
      this.setState({
        more_params : {
          status: false,
          width : 0,
          height: 0 
          }
        })
    }
  }
  onBackButtonPressAndroid = () => {
    
    const { more_params } = this.state;

    if(more_params.status){
      this.setState({
        more_params :
          {
           status: false,
           width : 0,
           height: 0
          }
        })
        this.props.dispatch({type: 'UPDATE_STATUS'})
      return true
    }
    BackHandler.exitApp();

  }
  componentWillUnmount() {
    if(!more_params.status) removeAndroidBackButtonHandler();
  }
  UpdateConfig = (status) => {
    return {
        type: 'UPDATE_CONFIG',
        status
      }
  }
  render() {
    const { data, handleClick,navigation,statusBB,UpdateConfig,reloadData,dispatch,DispAlert } = this.props;
    const { more_params } = this.state;

    if(statusBB) handleAndroidBackButton(this.onBackButtonPressAndroid);
    if(UpdateConfig){
         reloadData();
         dispatch(this.UpdateConfig(false))
    }
    //console.log(dados);
    //console.log(dados);
    return (
            <Screen>
                <Header>
                  <BtnHeader>
                   <TitleHeader>Atividade Recentes</TitleHeader>
                  </BtnHeader>
                  <BtnHeader onPress={this.handleMore} style={{paddingLeft: 25,}}>
                    <Icon 
                      name="md-more"
                      size={25}
                      color="#999999"
                    />
                  </BtnHeader>
                  <More
                    navigation={navigation}
                    params={more_params}
                    handleClick={this.handleMore}
                    BackPress={this.onBackButtonPressAndroid}
                  />
                </Header>
                <ContentList>
                  <FlatList
                      data={data}
                      keyExtractor={item => item._id.toString()}
                      renderItem={({ item }) => (
                                                <ItemHistory
                                                  Item={item}
                                                  handleClick={handleClick}
                                                />
                                                )}
                  />
                 </ContentList>
              </Screen>
      );
  }
}

export default connect(state => ({ data: state.data, statusBB: state.status_backbutton, UpdateConfig : state.updateConfig }))(index)