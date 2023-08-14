"use strict";
const { GenIcon } = require("./iconBase");
const { iconPropsMap } = require("./iconPropsMap");

exports.mapIcon = function (iconName) {
  if (iconName == null) return null;

  const iconProps = iconPropsMap[iconName]

  if (iconProps == null) return null

  return function (props) {
    return GenIcon(JSON.parse(iconProps))(props);
  };
};
