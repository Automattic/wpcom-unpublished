
/*!
 * External dependencies
 */

var WPCOM = require( 'wpcom' );
var Me = require( './lib/me' );
var Site = require( './lib/site' );
var inherits = require( 'inherits' );

/**
 * Creates a `WPCOMUnpublished` instance
 *
 * Example
 *    // Create WPCOMUnpublished instance
 *    var WPCOMUnpublished = require( 'wpcom-unpublished' );
 *    var wpcom = WPCOM();
 *
 * Example
 *    // Create WPCOMUnpublished instance passing a token
 *    var WPCOMUnpublished = require( 'wpcom-unpublished' );
 *    var wpcom = WPCOM( '<your-token>' );
 *
 * Example
 *    // Create WPCOMUnpublished instance passing request handler
 *    var WPCOMUnpublished = require( 'wpcom-unpublished' );
 *    var proxy = require( 'wpcom-proxy-request' );
 *    var wpcom = WPCOM( proxy );
 *
 * @param {String} [token] - OAuth API access token
 * @param {Function} [reqHandler] - function Request Handler
 * @public
 */

function WPCOMUnpublished( token, reqHandler ) {
	if ( ! ( this instanceof WPCOMUnpublished ) ) {
		return new WPCOMUnpublished( token, reqHandler );
	}

	WPCOM.call( this, token, reqHandler );
}

/*!
 * Extend from WPCOM
 */

inherits( WPCOMUnpublished, WPCOM );

/**
 * Create and return a `Me` instance
 *
 * Example
 *    // Create a Me instance
 *    var me = wpcom.me();
 *
 * @public
 */

WPCOMUnpublished.prototype.me = function() {
	return new Me( this );
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

WPCOMUnpublished.prototype.site = function( id ) {
	return new Site( id, this );
};

/*!
 * Expose `WPCOMUnpublished`
 */

module.exports = WPCOMUnpublished;
