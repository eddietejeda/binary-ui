import More from 'binary-ui-icons/binary/More';
import React from 'react';
import ListItemTextareaWrapper from '../ListItemTextareaWrapper';
import TextareaInput from '../TextareaInput';
import ActionListItemIcon from '../../../ActionListItemIcon';

const propTypes = {
  isMoreButton: React.PropTypes.bool,
  isValid: React.PropTypes.bool,
  value: React.PropTypes.string.isRequired,
  onBlur: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onTextChange: React.PropTypes.func.isRequired,
  onMoreClick: React.PropTypes.func,
};

const defaultProps = {
  isMoreButton: false,
  isValid: true,
  onBlur: undefined,
  onFocus: undefined,
  onTextChange: undefined,
  onMoreClick: undefined,
};

export default class Textarea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.onMoreClick = this.onMoreClick.bind(this);
    this.onSetFocus = this.onSetFocus.bind(this);
  }

  onTextChange(e) {
    const { onTextChange } = this.props;
    if (onTextChange) {
      onTextChange(e.target.value);
    }
  }

  onMoreClick() {
    const { onMoreClick } = this.props;
    if (onMoreClick) {
      onMoreClick();
    }
  }

  onSetFocus(isActive) {
    if (this.state.isActive === isActive) {
      return;
    }
    this.setState({
      isActive,
    });
  }

  render() {
    const {
      isMoreButton,
      isValid,
      onBlur,
      onFocus,
      ...props,
    } = this.props;
    const { isActive } = this.state;
    return (
      <ListItemTextareaWrapper isTypingHighlight={isActive} isValid={isValid} >
        <TextareaInput
          onBlur={(e) => { this.onSetFocus(false); if (onBlur) { onBlur(e); } }}
          onChange={this.onTextChange}
          onFocus={(e) => { this.onSetFocus(true); if (onFocus) { onFocus(e); } }}
          {...props}
        />
        {isMoreButton && (
          <ActionListItemIcon renderIcon={() => (<More />)} onClick={this.onMoreClick} />
        )}
      </ListItemTextareaWrapper>
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
