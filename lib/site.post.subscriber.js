/**
 * `Subscriber` constructor.
 *
 * @param {String} pid - post identifier
 * @param {String} sid - site identifier
 * @param {WPCOM} wpcom
 * @api public
 */

function Subscriber(pid, sid, wpcom) {
  if (!sid) {
    throw new Error('`side id` is not correctly defined');
  }

  if (!pid) {
    throw new Error('`post id` is not correctly defined');
  }

  if (!(this instanceof Subscriber)) {
    return new Subscriber(pid, sid, wpcom);
  }

  this.wpcom = wpcom;
  this._pid = pid;
  this._sid = sid;
}

/**
 * Get subscriber status for the current user for the Post.
 *
 *
 * *Example:*
 *    Get subscriber status for the current user for the Post
 *    wpcom
 *    .site('en.blog.wordpress.com')
 *    .post(1234)
 *    .subscriber()
 *    .mine(function(err, data) {
 *      // subscription data
 *    });
 *
 * @param {Object} [query]
 * @param {Function} fn
 * @public
 */

Subscriber.prototype.mine = function (query, fn) {
  var path = '/sites/' + this._sid + '/posts/' + this._pid + '/subscribers/mine';
  return this.wpcom.req.get(path, query, fn);
};

// Create `state` alias
Subscriber.prototype.state = Subscriber.prototype.mine;

/**
 * Subscribe the current user to the post.
 *
 * *Example:*
 *    // Subscribe the current user to the post
 *    wpcom
 *    .site('en.blog.wordpress.com')
 *    .post(1234)
 *    .subscriber()
 *    .add(function(err, data) {
 *      // current user has been subscribed to post
 *    });
 *
 * @param {Object} [query]
 * @param {Function} fn
 * @public
 */

Subscriber.prototype.add = function (query, fn) {
  var path = '/sites/' + this._sid + '/posts/' + this._pid + '/subscribers/new';
  return this.wpcom.req.put(path, query, null, fn);
};

/**
 * Unsubscribe current user to the post
 *
 * *Example:*
 *    // Unsubscribe current user to the post
 *    wpcom
 *    .site('en.blog.wordpress.com')
 *    .post(1234)
 *    .subscriber()
 *    .del(function(err, data) {
 *      // current user has been unsubscribed to post
 *    });
 
 * @param {Function} fn
 * @public
 */

Subscriber.prototype.del = function (query, fn) {
  var path = '/sites/' + this._sid + '/posts/' + this._pid + '/subscribers/mine/delete';
  return this.wpcom.req.del(path, query, fn);
};

// Create `delete` alias
Subscriber.prototype['delete'] = Subscriber.prototype.del;

/*!
 * Expose `Subscriber` module
 */

module.exports = Subscriber;
