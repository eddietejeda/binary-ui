import styled from 'styled-components';

export default styled.input`
  appearance: none;
  border-radius: 0;
  color: hsl(0, 0%, 0%);
  cursor: text;
  border: none;
  box-sizing: border-box;
  display: inline-block;
  font-family: ${props => (props.isBold ? props.theme.fontFamily600 : props.theme.fontFamily200)};
  font-size: ${props => (props.isBold ? '13px' : '18px')};
  font-weight: ${props => (props.isBold ? props.theme.fontWeight600 : props.theme.fontWeight200)};
  height: ${props => props.theme.sizeListItemHeight - 1}px;
  letter-spacing: ${props =>
    (props.isBold
      ? props.theme.letterSpacing2
      : props.theme.letterSpacingNormal)};
  outline: 0;
  overflow: hidden;
  padding-bottom: 0;
  padding-left: 10px;
  padding-right: 0;
  padding-top: 0;
  resize: none;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  wrap: soft;
  &::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
`;
