import React, { Component } from 'react';

export class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    };
    this._changeHandler = this._changeHandler.bind(this);
  }

  _changeHandler(event) {
    const inputValue = event.value;
    if (!this.props.scan) this.setState({ text: inputValue });
  }

  render() {
    return (
      <input
        id="scanner_input"
        className="form-control"
        name="name"
        placeholder="Manually enter code"
        type="text"
        value={this.state.text}
        onChange={e => {
          this.setState({ text: e.target.value });
        }}
      />
    );
  }
}

export default Result;

// export const Result = (props) => {
//   const [state, setState] = useState({
//     text: props.text
//   })

//   const _changeHandler = (event) => {
//     const inputValue = event.value;
//     if (!props.scan) setState({ text: inputValue });
//   }

//   return (
//     <input
//       id="scanner_input"
//       className="form-control"
//       name="name"
//       placeholder="Manually enter code"
//       type="text"
//       value={state.text}
//       onChange={_changeHandler}
//     />
//   );
// }

// export default Result