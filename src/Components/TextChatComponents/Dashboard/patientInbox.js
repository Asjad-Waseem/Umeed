import React, { PureComponent } from 'react';
// import { View, SafeAreaView, Text, ImageBackground,StyleSheet,FlatList,Image,TouchableOpacity } from 'react-native';
import { FlatList } from 'flatlist-react';
import firebase from 'firebase';
import Fire from '../fire';
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from 'react-router-dom';

// const chatClient = new StreamChat('y4s364brhrg8');
// const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic2hyaWxsLW1vdW50YWluLTEifQ.d5eunqnGAfJRzh8AZfjg1UD-RALMu7JPsYKbFc5Spcg';
// const user = {
//   id: 'shrill-mountain-1',
//   name: 'Shrill mountain',
//   image:
//     'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
// };

// chatClient.setUser(user, userToken);

class patientInbox extends PureComponent {
  static navigationOptions = () => ({
    headerTitle: (
      <p style={{ fontWeight: 'bold' }}>Awesome Conversations</p>
    ),
  });

  renderChannels() {
    return (
      <List>
        <ListItem button>
          <ListItemAvatar>
            <Avatar>D</Avatar>
          </ListItemAvatar>
          <ListItemText primary="Dr.Usman"/>
        </ListItem>
      </List>
    );
  }

  renderChannelsHeader() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Chats
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
  renderChatHeader() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Default chat
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

  renderPerson = (person, idx) => {
    return (
        <li key={`${person.firstName}-${idx}`}>
          <b>{person.firstName} {person.lastName}</b> (<span>{person.info.age}</span>)
        </li>
    );
  }

  render() {

  const  people = [
      {firstName: 'Elson', lastName: 'Correia', info: {age: 24}},
      {firstName: 'John', lastName: 'Doe', info: {age: 18}},
      {firstName: 'Jane', lastName: 'Doe', info: {age: 34}},
      {firstName: 'Maria', lastName: 'Carvalho', info: {age: 22}},
      {firstName: 'Kelly', lastName: 'Correia', info:{age: 23}},
      {firstName: 'Don', lastName: 'Quichote', info: {age: 39}},
      {firstName: 'Marcus', lastName: 'Correia', info: {age: 0}},
      {firstName: 'Bruno', lastName: 'Gonzales', info: {age: 25}},
      {firstName: 'Alonzo', lastName: 'Correia', info: {age: 44}}
    ]
   
       return people.map( person => <people key = {people._id} people = {people} />);
                      
      // <SafeAreaView>
      //   <Chat client={chatClient}>
      //     <View style={{ display: 'flex', height: '100%', padding: 10 }}>
      //       <ChannelList
      //         filters={{ type: 'messaging', members: { $in: ['shrill-mountain-1'] } }}
      //         sort={{ last_message_at: -1 }}
      //         Preview={ChannelPreviewMessenger}
      //         onSelect={() => {
      //           this.props.navigation.navigate('Chat');
      //         }}
      //       />
      //     </View>
      //   </Chat>
      // </SafeAreaView>
  }
}
export default patientInbox;

const styles = {
  button:{
       flexDirection:"row",
       padding:20,
       borderBottomColor:'black',
       borderBottomWidth:0.2,
       alignItems:"center",
       paddingVertical:10,
       width:'100%'
   },image:{
     width:40, height:40, marginLeft: 5, marginTop: 10,borderRadius:99
   },name:{
      
       color:'black',
       fontSize:14,
       padding:10,
       marginLeft:20
   },type:{
     
     color:'black',
     fontSize:8,
     paddingLeft:30
 }
 }

//  const styles = {
//   container: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "row",
//     height: "100vh",
//   },
//   channelList: {
//     display: "flex",
//     flex: 1,
//     flexDirection: "column",
//   },
//   chat: {
//     display: "flex",
//     flex: 3,
//     flexDirection: "column",
//     borderWidth: "1px",
//     borderColor: "#ccc",
//     borderRightStyle: "solid",
//     borderLeftStyle: "solid",
//   },
//   settings: {
//     display: "flex",
//     flex: 1,
//     flexDirection: "column",
//   },
// };