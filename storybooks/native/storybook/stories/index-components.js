import React from 'react';
import { Picker, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Add from 'binary-ui-icons/binary/Add';
import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
import IconMore from 'binary-ui-icons/binary/More';
import Input, { INPUT_FIELD_TYPES } from 'binary-ui-components/mobile/Input';

import Group from 'binary-ui-components/mobile/Group';
import Select from 'binary-ui-components/mobile/Select';
import Textline from 'binary-ui-components/mobile/Textline';

storiesOf('binary-ui-components', module)
  .add('Group', () => (
    <View>
      <Group
        renderLeft={() => (
          <Textline isBold>
            Left text
          </Textline>
        )}
        renderRight={() => (
          <Input
            placeholder="Input"
            type={INPUT_FIELD_TYPES.TEL}
            value=""
            renderIcon={() => (<IconMore />)}
            onTextChange={action()}
            onMoreClick={action()}
          />
        )}
      />
      <Group
        renderLeft={() => (null)}
        renderRight={() => (null)}
      />
      <Group
        renderLeft={() => (<Textline isBold >Label</Textline>)}
        renderRight={() => (<Textline isEdit >+8227073791</Textline>)}
      />
    </View>
  ))
  .add('Select', () => (
    <Picker selectedValue="java" >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  ));
