import React, {Component} from 'react';
import ContactCard from './ContactCard'
import './App.css';

// NOTE: I used Semantic UI, an open-source library for React to build the UI

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="ui cards">
            <ContactCard name="John Smith" mobile="(234)567-8901" work={false} email="jsmith@smith.com"/>
            <ContactCard name="Some Person" mobile="(987)654-3210" work="(800)888-8888" email="someone@gmail.com"/>
            <ContactCard name="Another Person" mobile="(135)790-8642" work={false} email="anotherPerson@email.com"/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
