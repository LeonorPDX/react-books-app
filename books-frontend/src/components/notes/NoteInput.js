import React, { Component } from 'react';

class NoteInput extends Component {
  
  state = {
    content: '',
  }

  handleOnChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    let configObj = {
      content: this.state.content,
      user_id: this.props.userId,
      book_id: this.props.bookId
    }

    this.props.addNote(configObj);

    this.setState({
      content: '',
    });
  }

  render() {
    console.log(this.props)

    return (
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <textarea
            className="form-control"
            rows="4"
            placeholder="What are your thoughts?..."
            value={this.state.content}
            onChange={(event) => this.handleOnChange(event)} />
            <br />
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    );
  }
};

export default NoteInput;