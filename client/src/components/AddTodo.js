import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Radium from 'radium';

import Modal from './Modal';
import { addTodo } from '../actions/todoActions';
import InputElement from './InputElement';

@Radium
export class AddTodo extends Component {
  state = {
    value: '',
  }

  _addTodo = () => {
    this.props.dispatchAddTodo(this.state.value);
  }

  _handleOnInput = (value) => {
    this.setState({
      value,
    });
  }

  render() {
    return (
      <Modal
        defaultAction={ this._addTodo }
        defaultActionText="Add Todo"
      >
        <InputElement
          value={ this.state.value }
          handleChange={ this._handleOnInput }
          handleEnterPress={ this._addTodo }
        />
      </Modal>
    );
  }
}

AddTodo.defaultProps = {};
AddTodo.propTypes = {};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    dispatchAddTodo: addTodo,
  }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
