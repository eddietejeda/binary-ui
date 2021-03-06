import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";

import Label from "binary-ui-components/mobile/Label";
import TimePicker from "binary-ui-time-picker";
import { THEME_MAIN } from "binary-ui-styles";

class TimePickerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 22,
      minute: 45
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ hour, minute }) {
    this.setState(() => ({
      hour,
      minute
    }));
  }

  render() {
    const { hour, minute } = this.state;
    return (
      <TimePicker
        hour={hour}
        locale="uk"
        maximumDate={new Date(2018, 1, 1, 22, 15)}
        minimumDate={new Date(2018, 1, 1, 8, 15)}
        minute={minute}
        minuteInterval={15}
        onChange={this.onChange}
        renderLeft={() => <Label isBold>Demo</Label>}
      />
    );
  }
}

storiesOf("binary-ui-time-picker", module).add("TimePicker", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <View>
      <View>
        <Text>Static</Text>
      </View>
      <TimePicker
        hour={22}
        locale="uk"
        minute={45}
        onChange={action}
        renderLeft={() => <Label isBold>Available</Label>}
      />
      <TimePicker
        hour={22}
        isDisabled
        locale="uk"
        minute={45}
        minuteInterval={15}
        onChange={action}
        renderLeft={() => <Label isBold>Disabled</Label>}
      />
      <View>
        <Text>Demo</Text>
      </View>
      <TimePickerDemo />
    </View>
  </ThemeProvider>
));
