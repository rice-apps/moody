import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class Card extends React.Component {
    render() {
        return (
          <TouchableHighlight style={styles.touchable}
            underlayColor="transparent"
            style = {styles.container}
            onPress={() => 
              this.props.navigation.navigate('Details',this.props)
            }>
            <ImageBackground style={{borderRadius:100, height: 200, width:"100%", marginTop:10}}  imageStyle={{ borderRadius: 10, width:"100%"}} source={{uri: this.props.image}}>
              <LinearGradient
                colors={['rgba(0, 0, 0, .9)', 'rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .1)','rgba(0, 0, 0, 0)']}
                style={{ padding: 15, position: 'left', borderRadius: 5 }}
              > 
                  <Text style={{textAlign: "left", color:"white", textTransform: "uppercase", fontSize: 30, marginTop:-10, marginLeft:-5}}> {this.props.name} </Text>
              </LinearGradient>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, .1)', 'rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .9)']}
                style={{ padding: 15, position: 'right', flex: 1, justifyContent: 'flex-end', borderRadius: 5 }}
              > 
                  <Text style={{textAlign: "right", color:"white", fontSize: 20, marginBottom:0, marginRight:0}}>10min 🕒 </Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableHighlight>
        );
      }
    }

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});