import React, { Component } from 'react';
import { TouchableOpacity, View, Text, TouchableHighlight } from 'react-native';


import PropTypes from 'prop-types';
import { shouldUpdate } from '../../../component-updater';
import Tooltip from 'react-native-walkthrough-tooltip';
import TooltipComp from '../../tooltip';
import Dot from '../../dot';
import styleConstructor from './style';
import RNTooltips from 'react-native-tooltips';

class Day extends Component {
  static displayName = 'IGNORE';

  static propTypes = {
    // TODO: disabled props should be removed
    state: PropTypes.oneOf(['disabled', 'today', '']),
    // Specify theme properties to override specific styles for calendar parts. Default = {}
    theme: PropTypes.object,
    marking: PropTypes.any,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    date: PropTypes.object,
    tooltip: PropTypes.object,
    disableAllTouchEventsForDisabledDays: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.style = styleConstructor(props.theme);
    // console.log('Day props :', this.props)
    this.onDayPress = this.onDayPress.bind(this);
    this.onDayLongPress = this.onDayLongPress.bind(this);

  }

  onDayPress() {
    this.props.onPress(this.props.date);
  }
  onDayLongPress() {
    this.props.onLongPress(this.props.date);
  }

  shouldComponentUpdate(nextProps) {
    return shouldUpdate(this.props, nextProps, ['state', 'children', 'marking', 'tooltipMarking', 'onPress', 'onLongPress']);
  }

  render() {
    const { theme, disableAllTouchEventsForDisabledDays } = this.props;
    const containerStyle = [this.style.base];
    const textStyle = [this.style.text];
    let marking = this.props.marking || {};
    if (marking && marking.constructor === Array && marking.length) {
      marking = {
        marking: true
      };
    }

    let tooltipMarking = this.props.tooltipMarking || {};
    if (tooltipMarking && tooltipMarking.constructor === Array && tooltipMarking.length) {
      tooltipMarking = {
        tooltipMarking: true
      };
    }

    const isDisabled = typeof marking.disabled !== 'undefined' ? marking.disabled : this.props.state === 'disabled';
    const isToday = this.props.state === 'today';
    const {
      marked,
      dotColor,
      selected,
      selectedColor,
      selectedTextColor,
      activeOpacity,
      disableTouchEvent
    } = marking;
    const {
      showTooltip,
      bgColor
    } = tooltipMarking;

    if (selected) {
      containerStyle.push(this.style.selected);
      textStyle.push(this.style.selectedText);

      if (selectedColor) {
        containerStyle.push({ backgroundColor: selectedColor });
      }

      if (selectedTextColor) {
        textStyle.push({ color: selectedTextColor });
      }

    } else if (isDisabled) {
      textStyle.push(this.style.disabledText);
    } else if (isToday) {
      containerStyle.push(this.style.today);
      textStyle.push(this.style.todayText);
    }

    let shouldDisableTouchEvent = false;
    if (typeof disableTouchEvent === 'boolean') {
      shouldDisableTouchEvent = disableTouchEvent;
    } else if (typeof disableAllTouchEventsForDisabledDays === 'boolean' && isDisabled) {
      shouldDisableTouchEvent = disableAllTouchEventsForDisabledDays;
    }
    // console.log('basic day', this.props, this.state)
    return (
      <TouchableOpacity
        testID={this.props.testID}
        style={containerStyle}
        onPress={this.onDayPress}
        onLongPress={this.onDayLongPress}
        activeOpacity={activeOpacity}
        disabled={shouldDisableTouchEvent}
        accessibilityRole={isDisabled ? undefined : 'button'}
        accessibilityLabel={this.props.accessibilityLabel}
      >

        {/* What should be the parent? */}

        {/* <RNTooltips text={"Long Press Description"} visible={showTooltip} target={this.props.children} parent={} /> */}

        <Text allowFontScaling={false} style={textStyle}>{String(this.props.children)}</Text>
        <Dot
          theme={theme}
          isMarked={marked}
          dotColor={dotColor}
          isSelected={selected}
          isToday={isToday}
          isDisabled={isDisabled}
        />

        {/* <Tooltip
          isVisible={showTooltip}
          content={<Text> Press here</Text>}

          placement="top"
          onClose={() => this.setState({ toolTipVisible: false })}
        >
          <TouchableHighlight >
            <Text> </Text>
          </TouchableHighlight>
        </Tooltip> */}


      </TouchableOpacity>
    );
  }
}

export default Day;
