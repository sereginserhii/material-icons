const { GenIcon } = require('../lib/iconBase')
exports.MdShortText = function MdShortText (props) {
	return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M4 9h16v2H4V9zm0 4h10v2H4v-2z"}}]})(props);
}