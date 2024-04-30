import React, { ChangeEvent } from "react";

class TextArea extends React.Component {
  handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <label>Discription</label>
        <textarea
          value=""
          onChange={this.handleChange}
          rows={4}
          cols={50}
          placeholder="Enter text here..."
        />
      </div>
    );
  }
}

export default TextArea;
