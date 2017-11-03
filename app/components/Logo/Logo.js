import React,  { Component , PropTypes  } from 'react';
import { View, Image, Text, Keyboard, Animated, Platform } from 'react-native';
import styles from './styles';

//declaring a stateless function that will implicitly 
//return the what is to be diaplayed on the screen 


const ANIMATION_DURATION = 250;

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      containerImageWidth: new Animated.Value(styles.$largeContainerSize),
      imageWidth: new Animated.Value(styles.$largeImageSize),
    };
  }

  componentDidMount() {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    this.keyboardDidShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      this.keyboardWillShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
    `keyboard${name}Hide`,
     this.keyboardWillHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

   //this is the function where animation will take place after the 
  //keyboard is shown 
  keyboardWillShow = () => {

    //will generate array of animations and render all the 
    //animations in an array together
    Animated.parallel([
      Animated.timing(this.state.containerImageWidth, {
        toValue: styles.$smallContainerSize, // declared variable in stylesheet
        duration: ANIMATION_DURATION,//duration in which these animations will occur
      }),
     Animated.timing(this.state.imageWidth, {
        toValue: styles.$smallImageSize,
       duration: ANIMATION_DURATION,
      }),
    ]).start();//start the function 
  };


  //this is the function where animation will take place after the 
  //keyboard is hidden 
  keyboardWillHide = () => {
    Animated.parallel([
      Animated.timing(this.state.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.state.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyles = [
      styles.containerImage,
      { width: this.state.containerImageWidth, height: this.state.containerImageWidth },
    ];
    const imageStyles = [
      styles.logo,
      { width: this.state.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null,
    ];

    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          style={containerImageStyles}
          source={require('./images/background.png')}
       >
          <Animated.Image
            resizeMode="contain"
            style={imageStyles}
            source={require('./images/logo.png')}
          />
        </Animated.Image>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}
 
 export default Logo;
 
