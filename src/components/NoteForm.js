'use strict';

import React from 'react';
import {connect} from 'react-redux';

class NoteForm extends React.Component {
    // constructor(props){
    //     super(props);
    // }
  add(){
    var {dispatch} = this.props;
    dispatch({type:'ADD', item:this.refs.txt.value});
  }
  render() {
    return (
      <div>
        <input type="text" ref="txt"></input>
        <button onClick={this.add.bind(this)}>Add</button>
      </div>
    );
  }
}


module.exports = connect(function(state){
    return {mang:state.mang}
})(NoteForm);