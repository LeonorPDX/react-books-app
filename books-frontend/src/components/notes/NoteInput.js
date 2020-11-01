import React, { Component } from 'react';

class NoteInput extends Component {
  
  state = {
    content: '',
    username: ''
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  //handleOnSubmit(event) {
  //  event.preventDefault();
  //  this.props.addNote(this.state.content);
  //  this.setState({
  //    content: '',
  //  });
  //}

  render() {
    return (
      <div>
        <form>
          <textarea
            className="form-control"
            rows="4"
            placeholder="What are your thoughts?..."
            name="content"
            value={this.state.content}
            onChange={(event) => this.handleOnChange(event)} />
            <br />
            <input 
            name="username"
            placeholder="Username"
            className="form-control"
            value={this.state.username}
            onChange={(event) => this.handleOnChange(event)} />
            <br />
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    );
  }
};

export default NoteInput;