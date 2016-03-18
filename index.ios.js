/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var _test = require('lodash');
var Cards = require('./data/cards.js');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
} from 'react-native';

//équivalent de React.createClass()
class hsBrowser extends Component {
  
constructor() {
  super();
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {dataSource:ds.cloneWithRows(Cards.cards)};
}
/*    
getInitialState() {
  //var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
  return {
      
    dataSource: new ListView.DataSource({
        
        rowHasChanged: (r1, r2) => r1 !== r2,
    
    })
      
  };
    
}
      
    
componentDidMount() {
    
    this.setState({
        
        dataSource:this.state.dataSource.cloneWithRows(Cards.cards)
        
    });
    
}*/
    
  render() {
      
    return (
        
        <ListView
        dataSource={this.state.dataSource}
        renderRow = {this.renderCard}
        style={styles.listView}></ListView>
      
    );
      
  }
      

  renderCard(card) {
      
      return (
      
      <View>
          
          <Image source={{uri: 'card.image_url'}}></Image>
          
          <View>
              
              <Text>{card.name}</Text>
              <Text>Hero : {card.hero}</Text>
              <Text>{card.description}</Text>
              <Text>{card.mana}</Text>
              
          </View>
          
      </View>
          
    );
      
  }
      
}

/*

        <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello world
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
      
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('hsBrowser', () => hsBrowser);
