import React, { useEffect } from 'react';
import BotUserPairCards from './BotUserPairCards';
import * as MessagesActions from './redux/actions/messagesActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import config from './config';

const { userEmail } = config;

const App = ({ messages, loadMessages }) => {
  useEffect(() => {
    loadMessages(userEmail);
    setTimeout(() => {
      loadMessages(userEmail);
    }, 15000);
  }, []);

  return messages.map(({ botMsg, userMsg }, index) => (
    <BotUserPairCards botMsg={botMsg} userMsg={userMsg} key={`${userEmail}-${index}`} />
  ));
};

App.propTypes = {
  messages: PropTypes.array,
  loadMessages: PropTypes.func.isRequired,
};

const mapStateToProps = function (state) {
  return {
    messages: state.messages,
  };
};

export default connect(mapStateToProps, { loadMessages: MessagesActions.fetchMessages })(App);
