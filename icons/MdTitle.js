const { GenIcon } = require('../lib/iconBase')
exports.MdTitle = function MdTitle (props) {
	return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M5 4v3h5.5v12h3V7H19V4z"}}]})(props);
}