import React, { Component } from 'react';
import MyInfo from './myInfo';
import AddDetails from './addDetailForm'
class App extends Component {

  state = {
    infoDetails : []
  }

  addInfo = (data) => {
    data.id = Math.random();
    let infoDetails = [...this.state.infoDetails, data]
    this.setState({
      infoDetails: infoDetails
    })
  }

  deleteInfo = (id) => {
    console.log(id);
    let infoDetails = this.state.infoDetails.filter((infoDetail) => {
        return infoDetail.id !== id
    })
    this.setState({
      infoDetails: infoDetails
    })
  }


  render(){
    return (
      <div className="App">
        <h1>My first React Application</h1>
        <p> Welcome!</p>
        <MyInfo deleteInfo={this.deleteInfo} details={this.state.infoDetails} />
        <AddDetails addInfo={this.addInfo}/>
      </div>
    )
  }
}

export default App;
