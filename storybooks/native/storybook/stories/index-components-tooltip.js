import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import React from "react";
import { View, Text } from "react-native";
import { ThemeProvider } from "styled-components";

import Tooltip from "binary-ui-components/mobile/Tooltip";
import ActionIcon from "binary-ui-components/mobile/ActionIcon";
import IconAdd from "binary-ui-icons/binary/Add";
import IconAddCard from "binary-ui-icons/binary/AddCard";
import { THEME_MAIN } from "binary-ui-styles";

class TooltipDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefLeft: false,
      isRefRight: false,
      isVisibleLeft: false,
      isVisibleRight: false
    };
    this.onSetLeft = this.onSetLeft.bind(this);
    this.onSetRight = this.onSetRight.bind(this);
    this.onChangeLeft = this.onChangeLeft.bind(this);
    this.onChangeRight = this.onChangeRight.bind(this);
  }

  onSetLeft(ref) {
    this.buttonLeft = ref;
    this.setState(prevState => ({
      isRefLeft: ref ? true : false
    }));
  }

  onSetRight(ref) {
    this.buttonRight = ref;
    this.setState(prevState => ({
      isRefRight: ref ? true : false
    }));
  }

  onChangeLeft() {
    this.setState(prevState => ({
      isVisibleLeft: !prevState.isVisibleLeft
    }));
  }

  onChangeRight() {
    this.setState(prevState => ({
      isVisibleRight: !prevState.isVisibleRight
    }));
  }

  render() {
    const { isVisibleLeft, isVisibleRight } = this.state;
    return (
      <View style={{ width: "100%", marginTop: 50 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            ref={this.onSetLeft}
            style={{
              height: 50,
              margin: 50,
              width: 50,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "wheat"
            }}
          >
            <ActionIcon
              title="Icon"
              onPress={this.onChangeLeft}
              renderIcon={props => <IconAdd {...props} />}
              size={20}
            />
          </View>
          <View
            ref={this.onSetRight}
            style={{
              height: 50,
              margin: 50,
              width: 50,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "skyblue"
            }}
          >
            <ActionIcon
              title="Icon"
              onPress={this.onChangeRight}
              renderIcon={props => <IconAddCard {...props} />}
              size={20}
            />
          </View>
        </View>
        <Text>Container for tooltips</Text>
        <Tooltip
          isVisible={isVisibleLeft}
          label="Bottom Right tooltip"
          placement="bottom-right"
          target={this.buttonLeft}
          style={{ transform: [{ translateX: 75 }, { translateY: 100 }] }}
          onPress={this.onChangeLeft}
        />
        <Tooltip
          isVisible={isVisibleRight}
          label="Bottom Left tooltip with very long text"
          placement="bottom-left"
          target={this.buttonRight}
          style={{ transform: [{ translateX: -45 }, { translateY: 100 }] }}
          onPress={this.onChangeRight}
        />
        <Tooltip
          isVisible={isVisibleLeft}
          label="Top Right tooltip"
          placement="top-right"
          target={this.topLeft}
          style={{ transform: [{ translateX: 75 }, { translateY: 20 }] }}
          onClick={this.onChangeLeft}
        />
        <Tooltip
          isVisible={isVisibleRight}
          label="Top Left tooltip with very long text"
          placement="top-left"
          target={this.topRight}
          style={{ transform: [{ translateX: -45 }, { translateY: 20 }] }}
          onClick={this.onChangeRight}
        />
      </View>
    );
  }
}

storiesOf("binary-ui-components/mobile", module).add("Tooltip", () => (
  <ThemeProvider theme={THEME_MAIN}>
    <TooltipDemo />
  </ThemeProvider>
));
