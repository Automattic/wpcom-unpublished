/**
 * Module dependencies
 */
var util = require( './util' );
var assert = require( 'assert' );

/**
 * Testing data
 */
var fixture = require( './fixture' );

/**
 * wpcom.site.post.subscriber
 */
describe( 'wpcom.site', function() {
	// Global instances
	var wpcom = util.wpcom();
	var site = wpcom.site( fixture.site );
	var testing_post;
	var testing_page;

	before( function( done ) {
		site.addPost( fixture.post, function( err, data ) {
			if ( err ) throw err;

			testing_post = site.post( data.ID );

			site.addPost( fixture.page, function( err2, data2 ) {
				if ( err2 ) throw err2;

				testing_page = site.post( data2.ID );
				done();
			} );
		} );
	} );

	after( function( done ) {
		// delete testing_post post
		testing_post.delete( function( err ) {
			if ( err ) throw err;

			testing_post.delete( function( err2 ) {
				if ( err2 ) throw err2;

				testing_page.delete( function( err3 ) {
					if ( err3 ) throw err3;

					testing_page.delete( done );
				} );
			} );
		} );
	} );

	describe( 'wpcom.site.postCounts', function() {
		it( 'should get post counts with `post` type', function( done ) {
			site.postCounts( 'post', function( err, data ) {
				if ( err ) throw err;

				assert.ok( 1 <= data.counts.all.draft );
				assert.ok( 1 <= data.counts.mine.draft );
				done();
			} );
		} );

		it( 'should get post counts with `page` status', function( done ) {
			site.postCounts( 'page', function( err, data ) {
				if ( err ) throw err;

				assert.ok( 1 <= data.counts.all.draft );
				assert.ok( 1 <= data.counts.mine.draft );
				done();
			} );
		} );

		it( 'should return 404 by unknown type', function( done ) {
			var rnd = String( Math.random() ).substr( 2 );
			site.postCounts( rnd, function( err ) {
				assert.ok( 'Unknown post type requested', err.message );
				done();
			} );
		} );
	} );

	describe( 'wpcom.site.postTypesList', function() {
		it( 'should get post types list of the site', function( done ) {
			site.postTypesList( function( err, data ) {
				if ( err ) throw err;

				assert.ok( data.found >= 1 );
				assert.ok( data.post_types instanceof Array );
				done();
			} );
		} );
	} );

	describe( 'wpcom.site.pluginsList', function() {
		it( 'should get plugins list of the site', function( done ) {
			var site2 = wpcom.site( fixture[ 'jetpack-site' ] );

			site2.pluginsList( function( err, data ) {
				if ( err ) throw err;

				assert.ok( data.plugins instanceof Array );
				done();
			} );
		} );
	} );

	describe( 'wpcom.site.primaryDomain', function() {
		it( 'should get the primary domain of the site', function( done ) {
			site.primaryDomain( function( err, data ) {
				if ( err ) throw err;

				assert.ok( fixture.site, data.domain );
				done();
			} );
		} );
	} );
} );
