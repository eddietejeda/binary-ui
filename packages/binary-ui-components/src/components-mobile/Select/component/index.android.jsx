import PropTypes from 'prop-types';
import React from 'react';
import { Picker } from 'react-native';
import Wrapper from '../components-styled/Wrapper';
import Group from '../../Group';

const propTypes = {
  isDisabled: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  renderLeft: PropTypes.func,
};

const defaultProps = {
  isDisabled: false,
};

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(itemValue) {
    const { onChange } = this.props;
    onChange(itemValue);
  }

  render() {
    /* eslint-disable no-unused-vars */
    const { isDisabled, items, selected, onChange, renderLeft, ...props } = this.props;
    /* eslint-enable no-unused-vars */
    return (
      <Group
        renderLeft={renderLeft}
        renderRight={() => (
          <Wrapper>
            <Picker
              enabled={!isDisabled}
              mode="dropdown"
              selectedValue={selected}
              onValueChange={this.onValueChange}
            >
              {items.map(item => (
                <Picker.Item key={item.key} label={item.label} value={item.value} />
              ))}
            </Picker>
          </Wrapper>
        )}
      />
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
