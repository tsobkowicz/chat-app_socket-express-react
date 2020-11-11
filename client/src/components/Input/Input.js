import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
    />
    <button
      className="sendButton"
      onClick={(e) => sendMessage(e)}
      type="submit"
    >
      Send
    </button>
  </form>
);

Input.propTypes = {
  setMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Input;
