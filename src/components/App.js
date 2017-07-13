'use strict';

import React from 'react';
import { Router, browserHistory } from 'react-router';
import Note from './Note';
import NoteForm from './NoteForm';
import {connect} from 'react-redux';

class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state ={mang: ['Androd', 'Ios', 'NodeJS'],varStr:true};
    // }
    // remove(index) {
    //     this.state.mang.splice(index,1);
    //     this.setState(this.state);
    // }
    // add(item){
    //     this.state.mang.push(item);
    //     this.setState(this.state);
    // }
  render() {
    return (
      <div>
        <NoteForm />
        {this.props.mang.map((e, i)=><Note index={i}
                    key={i}>{e}
                </Note>)}
      </div>
    );
  }
}

export default connect(function(state){
    return {mang:state.mang};
})(App);