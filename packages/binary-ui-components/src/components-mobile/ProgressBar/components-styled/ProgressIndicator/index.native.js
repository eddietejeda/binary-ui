import styled from 'styled-components';

export default styled.View`
  background-color: ${props => (props.progress >= 90
    ? props.theme.colorRed40
    : '#000000'
  )};
  height: 1px;
  position: absolute;
  top: ${props => props.theme.sizeListItemHeight / 2};
  width: ${props => props.progress}%;
`;
