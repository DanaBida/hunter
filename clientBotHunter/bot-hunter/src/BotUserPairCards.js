import React from 'react';
import { Grid } from '@material-ui/core';
import { BotCard, UserCard } from './styles/app';
import PropTypes from 'prop-types';

const BotUserPairCards = ({ botMsg, userMsg }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <BotCard
          message={
            <>
              <h2>Bot</h2>
              <p>{botMsg}</p>
            </>
          }
        />
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <UserCard
            message={
              <>
                <h2>User</h2>
                <p>{userMsg}</p>
              </>
            }
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

BotUserPairCards.propTypes = {
  botMsg: PropTypes.string,
  userMsg: PropTypes.string,
};

export default BotUserPairCards;
