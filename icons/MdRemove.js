const { GenIcon } = require('../lib/iconBase')
exports.MdRemove = function MdRemove (props) {
	return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 13H5v-2h14v2z"}}]})(props);
}