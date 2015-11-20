
/*!
 * External dependencies
 */

var WPCOM = require('wpcom');
var Me = require('./lib/me');
var Site = require('./lib/site');
var inherits = require('inherits');

/**
 * Creates a `wpcomUnpublished` instance
 *
 * Example
 *    // Create wpcomUnpublished instance
 *    var wpcomUnpublished = require('wpcom-unpublished');
 *    var wpcom = WPCOM();
 *
 * Example
 *    // Create wpcomUnpublished instance passing a token
 *    var wpcomUnpublished = require('wpcom-unpublished');
 *    var wpcom = WPCOM('<your-token>');
 *
 * Example
 *    // Create wpcomUnpublished instance passing request handler
 *    var wpcomUnpublished = require('wpcom-unpublished');
 *    var proxy = require('wpcom-proxy-request');
 *    var wpcom = WPCOM(proxy);
 *
 * @param {String} [token] - OAuth API access token
 * @param {Function} [reqHandler] - function Request Handler
 * @public
 */

function wpcomUnpublished(token, reqHandler) {
  if (!(this instanceof wpcomUnpublished)) {
    return new wpcomUnpublished(token, reqHandler);
  }

  WPCOM.call(this, token, reqHandler);
}

/*!
 * Extend from WPCOM
 */

inherits(wpcomUnpublished, WPCOM);

/**
 * Create and return a `Me` instance
 *
 * Example
 *    // Create a Me instance
 *    var me = wpcom.me();
 *
 * @public
 */

wpcomUnpublished.prototype.me = function () {
  return new Me(this);
};

/**
 * Create and return a `Site` instance
 *
 * Example
 *    // Create a Site instance
 *    var site = wpcom.site();
 *
 * @param {String|Number} id - site id
 * @public
 */

wpcomUnpublished.prototype.site = function (id) {
  return new Site(id, this);
};

/*!
* Expose `wpcomUnpublished`
*/

module.exports = wpcomUnpublished;
