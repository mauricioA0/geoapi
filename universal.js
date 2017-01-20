/* eslint-disable semi */
"use strict";

const debug = require('debug')("restful:controllers:universal");

function Universal(main) {
	debug("init...");

	return {

		'delete': (req, res, next)=> {
			debug(".deleted called");
			let id_delete = req.swagger.params.id_delete ? req.swagger.params.id_delete.value : null;

      main.libs.universal.delete(req.swagger.apiPath.slice(1),id_delete, page, limit)
      .then((data)=> res.json(data))
      .catch(err=> next(err));
		}

    'update': (req, res, next)=> {
      debug(".Updated called");

      let update = req.swagger.params.patch ? req.swagger.params.patch.value : null;

      main.libs.universal.update(req.swagger.apiPath.slice(1),update, page, limit)
      .then((data)=> res.json(data))
      .catch(err=> next(err));
    }

	};
}

module.exports = Universal;
