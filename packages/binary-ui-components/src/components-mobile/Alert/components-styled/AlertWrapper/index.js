import styled from 'styled-components';
import { CONFIRM, PRIORITY, CRITICAL } from '../../constants/alert-types';

export default styled.div`
  border-radius: 5px;
  cursor: default;
  display: flex;
  flex-direction: row;
  margin: 3px auto 0 auto;
  padding: 0 5px;
  user-select: none;
  width: fit-content;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  ${props => {
    switch (props.alertType) {
      case CONFIRM:
        return `background: ${props.theme.colorBlue40};color: #ffffff;`;
      case PRIORITY:
        return `background: ${props.theme.colorYellow50};color: #000000;`;
      case CRITICAL:
        return `background: ${props.theme.colorRed40};color: #ffffff;`;
      default:
        return `background: ${props.theme.colorBlue40};color: #ffffff;`;
    }
  }};
`;
