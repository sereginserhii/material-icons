const { GenIcon } = require('../lib/iconBase')
exports.MdHexagon = function MdHexagon (props) {
	return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z"}}]})(props);
}