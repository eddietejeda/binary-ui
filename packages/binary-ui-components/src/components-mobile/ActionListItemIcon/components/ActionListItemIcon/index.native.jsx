import { BINARY_COLOR_GRAY_40, OPACITY_ACTIVE, OPACITY_DISABLED } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const propTypes = {
  isDisabled: PropTypes.bool,
  renderIcon: PropTypes.func.isRequired,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
  onLongPress: undefined,
  onPress: undefined,
  onPressIn: undefined,
  onPressOut: undefined,
};

class ActionListItemIcon extends React.Component {
  renderIcon({ isDisabled, renderIcon }) {
    return renderIcon({
      color: BINARY_COLOR_GRAY_40,
      opacity: isDisabled ? OPACITY_DISABLED : 1,
      size: 18,
    });
  }

  render() {
    const {
      isDisabled,
      renderIcon,
      onLongPress,
      onPress,
      onPressIn,
      onPressOut,
      ...props,
    } = this.props;
    return isDisabled ? (
      <View {...props} >
        {this.renderIcon({ isDisabled, renderIcon })}
      </View>
    ) : (
      <TouchableOpacity
        activeOpacity={OPACITY_ACTIVE}
        onLongPress={onLongPress}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        {...props}
      >
        {this.renderIcon({ isDisabled, renderIcon })}
      </TouchableOpacity>
    );
  }
}

ActionListItemIcon.propTypes = propTypes;
ActionListItemIcon.defaultProps = defaultProps;

export default ActionListItemIcon;
