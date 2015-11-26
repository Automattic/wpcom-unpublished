
/*!
 * Module dependencies.
 */

var _Site_ = require( 'wpcom/dist/lib/site' );
var Post = require( './site.post' );
var SiteWordAds = require( './site.wordads' );
var inherits = require( 'inherits' );

/**
 * `Site` constructor.
 *
 * It inherits from `WPCOM#Site` class.
 *
 * Use a `WPCOM` instance to create a new `Site` instance.
 *
 * *Example:*
 *    // Require `wpcom-unpublished` library
 *    var wpcomUnpublished = require( 'wpcom-unpublished' );
 *
 *    // Create a `wpcomUnpublished` instance
 *    var wpcom = wpcomUnpublished();
 *
 *    // Create a `Site` instance
 *    var site = wpcom.site("my-blog.wordpress.com");
 *
 * @constructor
 * @param {String|Number} id - site identifier
 * @param {wpcomUnpublished} wpcom
 * @public
 */

function Site( id, wpcom ) {
	_Site_.call( this, id, wpcom );
}

/*!
 * Inherits from _Site_ class
 */

inherits( Site, _Site_ );

/**
 * Get number of posts in the post type groups by post status
 *
 * *Example:*
 *   // Get number post of pages
 *    wpcom
 *    .site( 'my-blog.wordpress.com' )
 *    .postCounts( 'page', function( err, data ) {
 *      // `counts` data object
 *    } );
 *
 * @param {String} type - post type
 * @param {Object} [query] - query object parameter
 * @param {Function} fn - callback function
 * @public
 */

Site.prototype.postCounts = function( type, query, fn ) {
	if ( 'function' === typeof query ) {
		fn = query;
		query = {};
	}

	// define post type as `post` as default
	type = type || 'post';

	let path = '/sites/' + this._id + '/post-counts/' + type;
	return this.wpcom.req.get( path, query, fn );
};

/**
 * Retrieves available post types
 *
 * *Example:*
 *    // Get all post types from WordPress blog
 *    wpcom
 *    .site( 'my-blog.wordpress.com' )
 *    .postTypesList( function( err, data ) {
 *      // post types in data object
 *    } );
 *
 * @param {Object} [query] - query object parameter
 * @param {Function} [fn]
 * @public
 */

Site.prototype.postTypesList = function( query, fn ) {
	return this.wpcom.req.get( '/sites/' + this._id + '/post-types', query, fn );
};

/**
 * Get primary domain
 *
 * *Example:*
 *    // Get primary domain
 *    wpcom
 *    .site( 'my-blog.wordpress.com' )
 *    .primaryDomain( function( err, data ) {
 *      // data.domain
 *    } );
 *
 * @param {Object} [query] - query object parameter
 * @param {Function} [fn]
 * @public
 */

Site.prototype.primaryDomain = function( query, fn ) {
	return this.wpcom.req.get( '/sites/' + this._id + '/domains/primary', query, fn );
};

/**
 * Get plugins data from
 *
 * *Example:*
 *    // Get plugins list of WordPress blog
 *    wpcom
 *    .site( 'my-blog.wordpress.com' )
 *    .pluginsList( function( err, data ) {
 *      // data
 *    } );
 *
 * @param {Object} [query] - query object parameter
 * @param {Function} [fn]
 * @public
 */

Site.prototype.pluginsList = function( query, fn ) {
	return this.wpcom.req.get( '/sites/' + this._id + '/plugins', query, fn );
};

/**
 * Return a `Post` instance
 *
 * *Example:*
 *    // Create a Post instance
 *    var post = wpcom.site("my-blog.wordpress.com").post( 1234 );
 *
 * @param {String|Number} id - post identifier
 * @public
 */

Site.prototype.post = function( id ) {
	return new Post( id, this._id, this.wpcom );
};

/**
 * Return a `SiteWordAds` instance.
 *
 * *Example:*
 *    // Create a SiteWordAds instance
 *
 *    var wordAds = wpcom
 *      .site( 'my-blog.wordpress.com' )
 *      .wordAds();
 *
 * @public
 */

Site.prototype.wordAds = function() {
	return new SiteWordAds( this._id, this.wpcom );
};

/*!
 * Expose `Site` module
 */

module.exports = Site;

