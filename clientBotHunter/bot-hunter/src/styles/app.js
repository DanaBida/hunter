import styled from 'styled-components';
import { SnackbarContent } from '@material-ui/core';

export const BotCard = styled(SnackbarContent)`
  &&& {
    background-color: #2aafc4;
    margin-top: 15px;
  }
`;

export const UserCard = styled(SnackbarContent)`
  &&& {
    background-color: #808080ba;
  }
`;
