
/*!
 * Module dependencies.
 */

var _Me_ = require ('wpcom/dist/lib/me');
var MeSettings = require('./me.settings');
var inherits = require('inherits');

/**
 * `Me` constructor.
 *
 * It inherits from `WPCOM#Me` class.
 *
 * Use a `WPCOM` instance to create a new `Me` instance.
 *
 * *Example:*
 *    // Require `wpcom-unpublished` library
 *    var wpcomUnpublished = require('wpcom-unpublished');
 *    
 *    // Create a `wpcomUnpublished` instance
 *    var wpcom = wpcomUnpublished();
 *    
 *    // Create a `Me` instance
 *    var me = wpcom.me();
 *
 * @constructor
 * @param {wpcomUnpublished} wpcom
 * @public
 */

function Me(wpcom) {
  _Me_.call(this, wpcom);
}

/*!
 * Inherits from _Me_ class
 */

inherits(Me, _Me_);

/**
 * Get user billing history.
 *
 * *Example:*
 *    // Get billing history for the current user
 *    wpcom
 *    .me()
 *    .billingHistory(function(err, data) {
 *      // billing history data object
 *    });
 *
 * @param {Object} [query]
 * @param {Function} [fn]
 * @public
 */

Me.prototype.billingHistory = function (query, fn) {
  return this.wpcom.req.get('/me/billing-history', query, fn);
};

/**
 * Posts from the sites that a user belongs to
 *
 * *Example:*
 *    // Get posts list
 *    wpcom
 *    .me()
 *    .postsList(function(err, data) {
 *      // posts list data object
 *    });
 *
 * @param {Object} [query]
 * @param {Function} [fn]
 * @public
 */

Me.prototype.postsList= function (query, fn) {
  return this.wpcom.req.get('/me/posts', query, fn);
};

/**
 * Return a `MeSettings` instance.
 *
 * *Example:*
 *    // Create a MeSettings instance
 *    var settings = wpcom.me().settings();
 *
 * @public
 */

Me.prototype.settings = function () {
  return new MeSettings(this.wpcom);
};

/*!
 * Expose `Me` module
 */

module.exports = Me;
