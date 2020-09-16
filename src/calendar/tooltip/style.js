import { StyleSheet } from 'react-native';
import * as defaultStyle from '../../style';

const STYLESHEET_ID = 'stylesheet.tooltip';

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    tooltip: {
      width: 4,
      height: 4,
      marginTop: 1,
      borderRadius: 2,
      opacity: 0,
      ...appStyle.tooltipStyle
    },
    visibleTooltip: {
      opacity: 1,
      backgroundColor: appStyle.tooltipColor
    },
    selectedTooltip: {
      backgroundColor: appStyle.selectedDotColor
    },
    disabledDot: {
      backgroundColor: appStyle.disabledDotColor || appStyle.dotColor
    },
    todayDot: {
      backgroundColor: appStyle.todayDotColor || appStyle.dotColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
