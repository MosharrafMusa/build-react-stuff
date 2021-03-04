import './App.css'
import React, {Component} from 'react'
import Navbar from './components/layout/Navbar'
// import Users from './components/users/Users'
import axios from 'axios'
import MyFetch from './components/users/MyFetch'
import Hello from './components/users/Hello'

export default class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount(){
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users:res.data, loading:false})
    console.log(res.data)
  }
  render(){
  return (
    <div className="App">
     
     <Hello/>
    </div>
  );
}
}

