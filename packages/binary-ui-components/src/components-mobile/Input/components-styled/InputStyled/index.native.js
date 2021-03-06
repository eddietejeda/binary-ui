import styled from 'styled-components';

export default styled.TextInput`
  color: hsl(0, 0%, 0%);
  flex: 9;
  font-family: ${props => (props.isBold ? props.theme.fontFamily600 : props.theme.fontFamily200)};
  font-size: ${props => (props.isBold ? '13px' : '18px')};
  font-weight: ${props => (props.isBold ? props.theme.fontWeight600 : props.theme.fontWeight200)};
  height: ${props => props.theme.sizeListItemHeight};
  letter-spacing: ${props =>
    (props.isBold
      ? props.theme.letterSpacing2
      : props.theme.letterSpacingNormal)};
  padding-bottom: 0;
  padding-left: 10;
  padding-right: 0;
  padding-top: 0;
`;
