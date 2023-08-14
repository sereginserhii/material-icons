const { GenIcon } = require('../lib/iconBase')
exports.MdSpaceBar = function MdSpaceBar (props) {
	return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M18 9v4H6V9H4v6h16V9z"}}]})(props);
}