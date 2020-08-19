import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
const customer = {
  'name' : '홍길동',
  'gender' : '남',
  'image' : 'https://placeimg.com/500/500/any'
}

class App extends Component {
  render(){
    return (
        <Customer
          name={customer.name}
          gender={customer.gender} 
          image={customer.image}
        />
      );
  }

}

export default App;
