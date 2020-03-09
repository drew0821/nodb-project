import React, {Component} from 'react';
import Header from './Components/Header'
import Add from './Components/Add'
import RoommateList from './Components/RoommateList'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      allRoommates: []
    }

    this.addRoomie = this.addRoomie.bind(this)
    this.deleteRoommate = this.deleteRoommate.bind(this)
  }
  
  componentDidMount(){
    axios.get('/api/roomies')
    .then ( res => {
      this.setState({
        allRoommates: res.data
      })
      console.log(this.state.allRoommates)
    })
  }
  addRoomie(roommate){
    axios.post('/api/roomie', {roommate})
    .then ( res => {
      this.setState({
        allRoommates: res.data
      })
    })
  }
  editRating=(id, rating) => {
    axios.put (`/api/roomie/${id}`, rating).then
    (res => {
      this.setState({
      allRoommates: res.data
      })
    })
  }
  deleteRoommate(id) {
    axios.delete(`/api/roomie/${id}`)
    .then(res => {
      console.log('hit delete roommate')
      this.setState({
        allRoommates: res.data
      })
    })
  }

  render(){
    console.log(this.state.allRoommates)
  return (
    <div className="App">
      <Header />
    {
    this.state.allRoommates&&this.state.allRoommates.length>0 && 
      <Add allRoommates={this.state.allRoommates} 
      addRoomie={this.addRoomie}/>
    }
    {
      this.state.allRoommates&&this.state.allRoommates.length>0 && 
      <RoommateList editRating={this.editRating} allRoommates={this.state.allRoommates} 
      deleteRoommate={this.deleteRoommate} 
      />
    }
    </div>
  );
}
}
export default App;
