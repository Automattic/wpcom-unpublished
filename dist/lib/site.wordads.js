
/*!
 * Module dependencies.
 */

var SiteWordAdsSettings = require('./site.wordads.settings');
var SiteWordAdsEarnings = require('./site.wordads.earnings');
var SiteWordAdsTOS = require('./site.wordads.tos');

/**
 * `SiteWordAds` constructor.
 *
 * Use a `WPCOM#Me` instance to create a new `SiteWordAds` instance.
 *
 * *Example:*
 *    // Require `wpcom-unpublished` library
 *    var wpcomUnpublished = require('wpcom-unpublished');
 *    
 *    // Create a `wpcomUnpublished` instance
 *    var wpcom = wpcomUnpublished();
 *    
 *    // Create a `SiteWordAds` instance
 *    var wordAds = wpcom
 *      .site('my-blog.wordpress.com')
 *      .wordAds();
 *
 * @constructor
 * @param {wpcomUnpublished} wpcom
 * @public
 */

function SiteWordAds(sid, wpcom) {
  if (!(this instanceof SiteWordAds)) {
    return new SiteWordAds(sid, wpcom);
  }

  this._sid = sid;
  this.wpcom = wpcom;
}

/**
 * Return a `SiteWordAdsSettings` instance.
 *
 * *Example:*
 *    // Create a SiteWordAdsSettings instance
 *    
 *    var wordAds = wpcom
 *      .site('my-blog.wordpress.com')
 *      .wordAds()
 *      .settings();
 *
 * @return {SiteWordAdsSettings}
 * @public
 */

SiteWordAds.prototype.settings = function () {
  return new SiteWordAdsSettings(this._sid, this.wpcom);
};

/**
 * Return a `SiteWordAdsEarnings` instance.
 *
 * *Example:*
 *    // Create a SiteWordAdsEarnings instance
 *    
 *    var wordAds = wpcom
 *      .site('my-blog.wordpress.com')
 *      .wordAds()
 *      .earnings();
 *
 * @return {SiteWordAdsEarnings}
 * @public
 */

SiteWordAds.prototype.earnings = function () {
  return new SiteWordAdsEarnings(this._sid, this.wpcom);
};

/**
 * Return a `SiteWordAdsTOS` instance.
 *
 * *Example:*
 *    // Create a SiteWordAdsTOS instance
 *    
 *    var wordAds = wpcom
 *      .site('my-blog.wordpress.com')
 *      .wordAds()
 *      .tos();
 *
 * Return  SiteWordAdsTOS object for the site.
 *
 * @return {SiteWordAdsTOS}
 * @public
 */

SiteWordAds.prototype.tos = function () {
  return new SiteWordAdsTOS(this._sid, this.wpcom);
};

/*!
 * Expose `SiteWordAds` module
 */

module.exports = SiteWordAds;