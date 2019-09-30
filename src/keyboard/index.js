import React, { Component } from 'react';
import { StatusBar, Vibration,Linking, Animated,Dimensions,Clipboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import Screen from '../screen';
import KeyMap from './keys';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    KeyboardContent,
    BoardInputContent,
    BoardInput,
    BoardInputItem,
    InputItemText,
    BoxActions,
    BtnAction,
    BoardContent,
    CallBtns,
    Call,
    ScreenTouch,
    ShowKeyboard
} from './style';
var {height} = Dimensions.get('window');
var translateY = new Animated.Value(420)

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pressedDelete : false,
        defaultCountry: '55',
        defaultCity   : '75',
        defaultVib    : true,
        number        : '',
        screenTouch1  : true,
        keyboards      : [
          { key : '1' , border : '1px'  },
          { key : '2' , border : '1px'  },
          { key : '3' , border : '1px'  },
          { key : '4' , border : '1px'  },
          { key : '5' , border : '1px'  },
          { key : '6' , border : '1px'  },
          { key : '7' , border : '1px'  },
          { key : '8' , border : '1px'  },
          { key : '9' , border : '1px'  },
          { key : '', border   :  '0'   },
          { key : '0' , border : '1px'  },
          { key : '+' , border : '1px'  },
        ]
    };
  }
  componentDidMount(){
    this.LoadStorage();

    Animated.timing(translateY, {
      duration: 300,
      toValue : 0
     }).start();
  }
  filterByID(obj) {
    if (obj.realNumber) {
      return true;
    } else {
      return false;
    }
  }
  LoadStorage = async () => {
    const { dispatch } = this.props;
    var DataConfig = await AsyncStorage.getItem('@EasyWhatsapp:Configs');
    if(!DataConfig) {
      DataConfig = {
        Country : '55',
        City    : '75',
        Vib     : true
      }
      await AsyncStorage.setItem('@EasyWhatsapp:Configs',JSON.stringify(DataConfig));
    }
    var itemDebug = await AsyncStorage.getAllKeys();
    var keys = await AsyncStorage.multiGet(itemDebug);
    var dataNumbers = [];
      keys.forEach((el,i) => {
        jsonData = JSON.parse(el[1]);
            dataNumbers[i] = {
              _id : el[0],
              number : jsonData.number,
              realNumber : jsonData.realNumber
            }
      });
      newArray = dataNumbers.filter(this.filterByID);
      newArray.reverse();
      asyncData = { data: newArray }
      DataConfig = JSON.parse(DataConfig)
      this.setState({
        defaultCountry:DataConfig.Country,
        defaultCity:DataConfig.City,
        defaultVib:DataConfig.Vib
       });
      dispatch(this.LoadStore(asyncData));
  }
  haddleSubmit = async() => {
    try {
    const { number,defaultCountry, defaultCity } = this.state;
    NumberPlus = '';
    if(number.substring(0, 1) === '+') {
    NumberPlus = number.replace('+','');
    }else{
    NumberPlus = (number.length > 9) ? number : defaultCity + number;
    NumberPlus = defaultCountry + NumberPlus;
    }
      var time = Date.now();
      var data = {
          _id       : `@EasyWhatsapp:Numbers_${time}`,
          number    : number,
          realNumber: NumberPlus
     }
      await AsyncStorage.setItem(`@EasyWhatsapp:Numbers_${time}`, JSON.stringify(data));

      this.LoadStorage();
      Linking.openURL(`whatsapp://send?text=Oi!&phone=+${NumberPlus}`);
    } catch (error) {
      console.log(error);
    }
    this.setState({number : ''})
    this.showHistory();
   }
  LoadStore(data){
    return {
      type: 'LOAD_DATA',
      data
    }
  }
  showHistory = () => {

     Animated.timing(translateY, {
      duration: 400,
      toValue : 420
     }).start(
      this.setState({screenTouch1: false })
     );
  }
  showKeyBoard = () =>{
    
    Animated.timing(translateY, {
      duration: 400,
      toValue : 0
     }).start(
      this.setState({screenTouch1: true })
     );
  }
  handleInputKey(value){
    const { number } = this.state;
    newNumber = number + value;
    this.setState({number: newNumber})

    this.Vib(10);
  }
  handleDelete = () =>{
    const { number } = this.state;
    if(number.length > 0){
        newNumber =  number.substring(0,(number.length - 1));
        this.setState({number: newNumber})
        this.Vib(10);
    }
  }
  Vib(DURATION = 100){
    if(this.state.defaultVib) Vibration.vibrate(DURATION);
  }
  haddleDig = async() => {
    const content = await Clipboard.getString();
    if(!isNaN(content)){
      if(content.length < 14){
          this.setState({number : content})
      }
    }
  }
  render() {
    const { number,screenTouch1,keyboards } = this.state;
    const { navigation } = this.props;
    const markClicable = (height-394);
    return (
      <>
        <StatusBar backgroundColor="#00e676" barStyle="dark-content" />
        <Screen 
        handleClick={this.LoadStorage}
        navigation={navigation}
        reloadData={this.LoadStorage}
        />
        <KeyboardContent style={{
          transform : [{
            translateY
          }]
        }}>
            <BoardInputContent>
                <BoardInput>
                    <BoardInputItem onPress={this.haddleDig}><InputItemText>{number}</InputItemText></BoardInputItem>
                    <BoxActions>
                        {(number !== '') ?
                          <BtnAction onPress={this.handleDelete}>
                            <Icon
                                 name="ios-backspace"
                                 size={25}
                                 color="#999999"
                            />
                          </BtnAction> :
                          <></>
                        }
                    </BoxActions>
                </BoardInput>
            </BoardInputContent>
              <BoardContent>
              { keyboards.map(keyboard => (
                <KeyMap key={keyboard.key} border={keyboard.border} handleClick={(e) => this.handleInputKey(keyboard.key)} value={keyboard.key} />
              ))}
              </BoardContent>
        </KeyboardContent>
        {(number !== '' && screenTouch1) ? <CallBtns>
          <Call onPress={this.haddleSubmit}>
            <Icon name="logo-whatsapp" size={45} color="#00e676" />
          </Call>
        </CallBtns> : <></> }
       { screenTouch1 && <ScreenTouch style={{height: markClicable}} onPress={this.showHistory} /> }
      { ! screenTouch1 && <ShowKeyboard onPress={this.showKeyBoard} ><Icon name="md-keypad" size={35} color="#fff" /></ShowKeyboard> }
      </>
    );
  }
}

index.navigationOptions = {
  header:null
}

export default connect(state => ({ config : state.DataConfig }))(index)
