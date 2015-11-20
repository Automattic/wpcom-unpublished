
/*!
 * Module dependencies.
 */

var _Post_ = require ('wpcom/dist/lib/site.post');
var Subscriber = require('./site.post.subscriber');
var inherits = require('inherits');

/**
 * `Post` constructor.
 *
 * It inherits from `WPCOM#POST` class.
 *
 * @constructor
 * @param {Number} id - post id
 * @param {Number|String} sid - site id
 * @param {WPCOM} wpcom
 * @public
 */

function Post(id, sid, wpcom) {
  _Post_.call(this, id, sid, wpcom);
}

/*!
* Inherits from _Post_ class
*/

inherits(Post, _Post_);

/**
 * Get post subscribers list.
 *
 * *Example:*
 *    // Get subscribers list for the post
 *    wpcom
 *    .site('en.blog.wordpress.com')
 *    .post(1234)
 *    .subscribers(function(err, data) {
 *      // subscribers list data
 *    });
 *
 * @param {Object} [query]
 * @param {Function} fn
 * @public
 */

Post.prototype.subscribers = function (query, fn) {
  var path = '/sites/' + this._sid + '/posts/' + this._id + '/subscribers';
  return this.wpcom.req.get(path, query, fn);
};

/**
 * Return a `Subscriber` instance.
 *
 * *Example:*
 *    // Create a Subscriber instance of a post
 *    var post = wpcom.site('en.blog.wordpress.com').post(1234);
 *    var subs = post.subscriber();
 *
 * @public
 */

Post.prototype.subscriber = function () {
  return new Subscriber(this._id, this._sid, this.wpcom);
};

/*!
 * Expose `Post` module
 */

module.exports = Post;
