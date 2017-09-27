import PropTypes from 'prop-types';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import TooltipArrow from '../components-styled/TooltipArrow.native';
import TooltipStyled from '../components-styled/TooltipStyled';
import TooltipText from '../components-styled/TooltipText.native';

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['bottom-right', 'bottom-left']),
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  placement: 'bottom-right',
};

const Tooltip = ({
  isVisible,
  label,
  placement,
  onLongPress,
  onPress,
  onPressIn,
  onPressOut,
  ...props,
}) => (
  <TouchableWithoutFeedback
    onLayout={this.onLayout}
    onLongPress={onLongPress}
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
  >
    <TooltipStyled isVisible={isVisible} placement={placement} {...props} >
      <TooltipArrow placement={placement} />
      <TooltipText>
        {label}
      </TooltipText>
    </TooltipStyled>
  </TouchableWithoutFeedback>
);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
