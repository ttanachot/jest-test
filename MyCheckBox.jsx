import React from 'react';

export default class MyCheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
    this.toggleCheckBox = this.toggleCheckBox.bind(this);
  }

  toggleCheckBox() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleCheckBox}
        />
        {this.state.isChecked && this.props.labelText}
      </label>
    );
  }
}