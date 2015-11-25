
/*!
 * Module dependencies.
 */

var ProfileLinks = require( './me.settings.profile-links' );

/**
 * `MeSettings` constructor.
 *
 * Use a `WPCOM#Me` instance to create a new `MeSettings` instance.
 *
 * *Example:*
 *    // Require `wpcom-unpublished` library
 *    var wpcomUnpublished = require( 'wpcom-unpublished' );
 *
 *    // Create a `wpcomUnpublished` instance
 *    var wpcom = wpcomUnpublished();
 *
 *    // Create a `MeSettings` instance
 *    var settings = wpcom.me().settings();
 *
 * @constructor
 * @param {wpcomUnpublished} wpcom
 * @public
 */

function MeSettings( wpcom ) {
	if ( ! ( this instanceof MeSettings ) ) {
		return new MeSettings( wpcom );
	}

	this.wpcom = wpcom;
}

/**
 * Get settings for the current user.
 *
 * *Example:*
 *    // Get settings for the current user
 *    wpcom
 *    .me()
 *    .settings()
 *    .get( function( err, data ) {
 *      // user settings data object
 *    } );
 *
 * @param {Object} [query] - query object parameter
 * @param {Function} fn - callback function
 * @public
 */

MeSettings.prototype.get = function( query, fn ) {
	return this.wpcom.req.get( '/me/settings', query, fn );
};

/**
 * Return `ProfileLinks` instance
 *
 * *Example:*
 *    // Create a ProfileLinks instance
 *    var profile_links = wpcom.me().settings().profileLinks();
 *
 * @public
 */

MeSettings.prototype.profileLinks = function() {
	return new ProfileLinks( this.wpcom );
};

/*!
 * Expose `MeSettings` module
 */

module.exports = MeSettings;
