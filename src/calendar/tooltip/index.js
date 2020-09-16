import React from 'react';
import { View } from 'react-native';
import styleConstructor from './style';
import PropTypes from 'prop-types';

const Tooltip = ({ theme, isMarked, isDisabled, dotColor, isToday, isSelected }) => {

  const style = styleConstructor(theme);
  const dotStyle = [style.dot];

  if (isMarked) {
    dotStyle.push(style.visibleTooltip);

    if (isToday) {
      dotStyle.push(style.visibleTooltip);
    }

    if (isDisabled) {
      dotStyle.push(style.disabledDot);
    }

    if (isSelected) {
      dotStyle.push(style.selectedDot);
    }

    if (dotColor) {
      dotStyle.push({ backgroundColor: dotColor });
    }
  }

  return (

    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        height: 80,
        marginTop: -25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'transparent',
        marginRight: 10,
        marginTop: 13
      }}
    >
      <View
        style={[
          {
            height: 40,
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0393EA',
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10
          }
        ]}
      >
        <Text style={{ fontSize: 18, color: '#fff', paddingLeft: 2 }}>
          Press
                </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRightColor: '#0393EA',
          position: 'absolute',
          left: 165,
          top: -12,
          transform: [{ rotate: '90deg' }],
          width: 20,
          height: 10,
          borderTopColor: 'transparent',
          borderTopWidth: 10,
          borderRightWidth: 18,
          borderBottomWidth: 10,
          borderBottomColor: 'transparent'
        }} />
    </View>

  );
};

export default Tooltip;

Dot.propTypes = {
  theme: PropTypes.object,
  isMarked: PropTypes.bool,
  dotColor: PropTypes.string,
  isSelected: PropTypes.bool,
  isToday: PropTypes.bool,
  isDisabled: PropTypes.bool
};
