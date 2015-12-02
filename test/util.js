/**
 * Module dependencies
 */
var wpcomUnpublished = require( '../' );
var qs = require( 'qs' );
var oauthCors = require( 'wpcom-oauth-cors' );
var configFactory = require( './config' );

/**
 * Detect client/server side
 */
var isClientSide = 'undefined' !== typeof window;
var qryString;
var reqHandler;

const env = /^automattic\.github\.io/.test( document.location.host )
	? 'production'
	: 'development';

const config = configFactory[ env ];

if ( isClientSide ) {
	const clientId = config.oauth.client_id;
	console.log( 'clientId: %o', clientId );

	qryString = qs.parse( document.location.search.replace( /^\?/, '' ) );
	reqHandler = qryString.handler || 'wpcom-proxy-request';
	console.log( `reqHandler -> %o`, reqHandler );

	if (
		'wpcom-xhr-request' === reqHandler ||
		/access_token/.test( document.location.hash )
	) {
		let wpoauth = oauthCors( clientId, config.oauth.options );

		wpoauth.get( function( auth ) {
			console.log( 'auth: ', auth );
		} );
	}
}

module.exports = {
	wpcom: wpcom
};

function wpcom() {
	let _wpcom;
	if ( isClientSide ) {
		window.wpcom = _wpcom;

		reqHandler = qryString.handler || 'wpcom-proxy-request';

		if ( 'wpcom-proxy-request' === reqHandler ) {
			console.log( 'PROXY request handler' );
			let proxy = require( 'wpcom-proxy-request' );
			_wpcom = wpcomUnpublished( proxy );
			_wpcom.request( {
				metaAPI: { accessAllUsersBlogs: true }
			}, function( err ) {
				if ( err ) throw err;
				console.log( 'proxy now running in "access all user\'s blogs" mode' );
			} );
		} else {
			console.log( 'XHR request handler' );
			let token = JSON.parse( localStorage.wp_oauth ).access_token;
			_wpcom = wpcomUnpublished( token );
		}
	} else {
		_wpcom = wpcomUnpublished( config.token );
	}
	return _wpcom;
}
