'use strict';

import React from 'react';
import {connect} from 'react-redux';

class Note extends React.Component {
  delete() {
    var {index, dispatch} = this.props;
    dispatch({type:'DELETE',index});
  }
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.delete.bind(this)}>Xoa</button>
      </div>
    );
  }
}

export default connect()(Note);