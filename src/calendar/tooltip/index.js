import React from 'react';
import { View, Text } from 'react-native';
import styleConstructor from './style';
import PropTypes from 'prop-types';
import Tooltip from 'react-native-walkthrough-tooltip';
const TooltipComp = ({ theme, isMarked, bgColor }) => {
  console.log('tooltipComponent', { theme, isMarked, bgColor })
  const style = styleConstructor(theme);
  const tooltipStyle = [style.tooltip];

  function tooltipView() {
    return (
      <View
        style={{

          backgroundColor: 'transparent',
          marginRight: 10,
          marginTop: 13,
          zIndex: 99999,


          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          height: 80,
          marginTop: -25,
          flexDirection: 'row',
          flexWrap: 'wrap'
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
            left: 0,
            top: 12,
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

    )
  }

  if (isMarked == true) {
    // tooltipStyle.push(style.visibleTooltip);
    console.log('marked True', isMarked)


    if (bgColor) {
      tooltipStyle.push({ backgroundColor: bgColor });
    }
  }

  return (

    <Tooltip
      isVisible={isMarked}
      content={<Text>Check this out!</Text>}
      placement="bottom"
      onClose={() => this.setState({ toolTipVisible: false })}
    ></Tooltip>

  );
};

export default TooltipComp;

TooltipComp.propTypes = {

  isMarked: PropTypes.bool,
  bgColor: PropTypes.string,

};
