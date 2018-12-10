import React from "react";
import PropTypes from "prop-types";
import isEqual from "react-fast-compare";
import { Text } from "react-native-svg";
import NativeHelpers from "../../helpers/native-helpers";

export default class VText extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    direction: PropTypes.oneOf(["ltr", "rtl", "inherit"]),
    dx: PropTypes.number,
    dy: PropTypes.number,
    events: PropTypes.object,
    style: PropTypes.object,
    transform: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number
  };

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  render() {
    const {
      x, y, dx, dy, events, className, children, transform, direction
    } = this.props;
    const style = NativeHelpers.getStyle(this.props.style);
    return (
      <Text
        className={className} x={x} dx={dx} y={y} dy={dy}
        direction={direction}
        transform={transform}
        {...style}
        {...events}
      >
        {children}
      </Text>
    );
  }
}
