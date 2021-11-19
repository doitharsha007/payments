import './App.css';
import Top from './component/Top';
import React, { Component } from 'react';
import DisplayDate from './component/DisplayDate';
import Sender from './component/Sender';
import Receiver from './component/Receiver';
import Transaction from './component/Transaction';

class App extends Component {
  state={
    users:[{
      customerId:83020817828620,
      accountHolderName:"A KRISHNA MOHAN",
      clearBalance:56000
    },
  {
    customerId:71319440983198,
      accountHolderName:"A M MAYANNA",
      clearBalance:224000
  }],
  benficier:[
    {
      bic:'ABBLINBBXXX',
      institution:'AB BANK LIMITED'
    },
    {
      bic:'DBSSINBBID',
      institution:'DBS BANK LTD,MUMBAI BRANCH'
    }
  ],
  sacList:[
    'binladen',
    'naeem',
    'morpheus'
  ],
  currentuser:null,
  accountHolderName:'',
  clearBalance:null,
  bic:'',
  institution:'',
  msg:''
  }
  senderChangeHandler=(event)=>{
    if(event.target.value.length>=14){
    let arr=this.state.users;
    let foundName='user not found';
    let tobeFoundName=Number(event.target.value);
    let foundBalance=null;
    for (let index = 0; index < arr.length; index++) {
      if(tobeFoundName===arr[index].customerId){
      foundName=arr[index].accountHolderName;
      foundBalance=arr[index].clearBalance;
      }
    }
    this.setState({currentuser:event.target.value,accountHolderName:foundName,clearBalance:foundBalance});
  }
  }
  receiverChangeHandler=(event)=>{
    if(event.target.value.length>=11){
    let arr=this.state.benficier;
    let foundBic='BIC not found';
    let tobeFoundBic=String(event.target.value);
    for (let index = 0; index < arr.length; index++) {
      if(tobeFoundBic===arr[index].bic){
      foundBic=arr[index].institution;
      }
    }
    this.setState({bic:event.target.value,institution:foundBic});
    }
  }
  nameChangeHandler=(event)=>{
    let name=String(event.target.value);
    let found=this.state.sacList.find(element=>element===name);
    let mesg='';
    if(typeof(found)!="undefined")
    mesg="PLEASE HOLD THE TRANSACTION !!!"
    this.setState({msg:mesg});
  }
  render(){
  
  return (
    <div className="App">
      <Top/>
      <DisplayDate/>
      <Sender changed={this.senderChangeHandler} 
      accountHolderName={this.state.accountHolderName} 
      clearBalance={this.state.clearBalance}/>
      <Receiver bicchanged={this.receiverChangeHandler}
      institution={this.state.institution}
      namechanged={this.nameChangeHandler}
      prompt={this.state.msg}/>
      <Transaction/>
    </div>
  );
}
}

export default App;
