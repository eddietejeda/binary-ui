import { OPACITY_ACTIVE, OPACITY_DISABLED } from 'binary-ui-styles';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const propTypes = {
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.number,
  renderIcon: PropTypes.func.isRequired,
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  onPressIn: PropTypes.func,
  onPressOut: PropTypes.func,
};

const defaultProps = {
  color: undefined,
  isDisabled: false,
  size: undefined,
  onLongPress: undefined,
  onPress: undefined,
  onPressIn: undefined,
  onPressOut: undefined,
};

class ActionIcon extends React.Component {
  renderIcon({ color, isDisabled, size, renderIcon }) {
    return renderIcon({
      color: color || '#000000',
      opacity: isDisabled ? OPACITY_DISABLED : 1,
      size,
    });
  }

  render() {
    const {
      color,
      isDisabled,
      size,
      renderIcon,
      onLongPress,
      onPress,
      onPressIn,
      onPressOut,
      ...props,
    } = this.props;
    return isDisabled ? (
      <View {...props} >
        {this.renderIcon({ color, isDisabled, size, renderIcon })}
      </View>
    ) : (
      <TouchableOpacity
        {...props}
        activeOpacity={OPACITY_ACTIVE}
        onLongPress={onLongPress}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        {this.renderIcon({ color, isDisabled, size, renderIcon })}
      </TouchableOpacity>
    );
  }
}

ActionIcon.propTypes = propTypes;
ActionIcon.defaultProps = defaultProps;

export default ActionIcon;
