import { getHighlightEditStyle } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  align-items: center;
  box-sizing: border-box;
  cursor: default;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  ${props => (
    getHighlightEditStyle(
      props.isEdit,
      props.isValid,
      props.isTypingHighlight,
      props.styleBorderColor
    )
  )}
`;