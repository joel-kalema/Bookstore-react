import React from 'react';

class InputBook extends React.Component {
  state = {
    title: '',
    author: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBookProps(this.state.title, this.state.author);
    this.setState({
      title: '',
      author: '',
    });
  };

  render() {
    return (
      <form>
        <input type="text" placeholder="Add title..." value={this.state.title} name="title" onChange={this.onChange} />
        <input type="text" placeholder="Add author..." value={this.state.author} name="author" onChange={this.onChange} />
        <button>Submit</button>
      </form>
    );
  }
}

export default InputBook;
