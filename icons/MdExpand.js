const { GenIcon } = require('../lib/iconBase')
exports.MdExpand = function MdExpand (props) {
	return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z"}}]})(props);
}