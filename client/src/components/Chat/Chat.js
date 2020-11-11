import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'http://localhost:5000';

  useEffect(() => {
    const data = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(data.name);
    setRoom(data.room);
    console.log(socket);
  }, [ENDPOINT, location.search]);

  return <h1>Chat</h1>;
};

Chat.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Chat;
