import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {name: "",};
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          <div className="container">

              <div>
                  <h2>Checkout Form</h2>
              </div>
            <form className="form">

                <div className="form-group-lg">
                    <div className="col-md-6">
                        <input type="text" name="name" placeholder="Name" className=" form-control"/>
                    </div>

                    <div className="col-md-6">
                        <input type="text" name="lastname" placeholder="Last Name" className="col-md-6 form-control"/>
                    </div>
                </div>

                <div className="form-group-lg">
                    <input type="email" name="email" placeholder="E-mail" className="col-md-6 form-control"/>
                    <input type="tel" name="tel" placeholder="Phone" className="col-md-6 form-control"/>
                </div>

                <div className="form-group-lg">
                    <select name="country" placeholder="Country" className="col-md-6 form-control">
                        <option value="" selected>Country</option>
                    </select>
                    <input type="text" name="city" placeholder="City" className="col-md-4 form-control"/>
                    <input type="text" name="postcode" placeholder="Post code" className="col-md-2 form-control"/>
                </div>

                <div className="form-group-lg">
                    <input type="number" name="lat" placeholder="Latitude" className="col-md-6 form-control"/>
                    <input type="number" name="lng" placeholder="Longitude" className="col-md-6 form-control"/>
                </div>

                <div className="form-group-lg">
                    <input type="text" name="address" placeholder="Address" className="form-control"/>
                </div>

                <div className="form-group-lg">
                    <input type="text" name="additionalInfo" placeholder="Additional Information" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-default">Send</button>


            </form>
        </div>
      </div>
    );
  }
}

export default App;
