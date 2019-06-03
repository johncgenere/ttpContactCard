import React, {Component} from 'react';
import icon from './contactIcon.png';

// NOTE: I used Semantic UI, an open-source library for React to build the UI

class ContactCard extends Component {
  constructor(props){
      super(props);
      this.checkWorkPhone = this.checkWorkPhone.bind(this);
  }

  checkWorkPhone = (number) => {
    if(number === false)
      return "optional"
    else
      return number;
  }

  render(){
    return(
      <div className="card">
        <div className="content">
          <img className="right floated mini ui image" src={icon} alt="Contact Icon"/>
          <div className="header" style={{marginTop: '1%', float: 'left'}}>
            <h2>{this.props.name}</h2>
          </div>
        </div>
        <div className="content">
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary">
                  <p> Mobile Number: {this.props.mobile} </p>
                  <p> Work Number: {this.checkWorkPhone(this.props.work)} </p>
                  <p> Email: {this.props.email} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactCard;
