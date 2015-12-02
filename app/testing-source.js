
/**
 * WPCOM module
 */

var util = require('./util');
var assert = require('assert');

/**
 * Testing data
 */

var fixture = require('./fixture');

/**
 * me
 */

describe('wpcom.me', function(){
  // Global instances
  var wpcom = util.wpcom();
  var me = wpcom.me();

  describe('wpcom.me.get', function(){
    it('should require user information object', function(done){
      me.get(function(err, me){
        if (err) throw err;

        // testing object
        assert.ok(me);
        assert.equal('object', typeof me);

        // testing user data
        assert.equal('number', typeof me.ID);

        done();
      });
    });
  });

  describe('wpcom.me.postsList', function(){
    it('should get posts list that current user belongs to', function(done){
      me.postsList(function(err, data){
        if (err) throw err;

        assert.equal('number', typeof data.found);
        assert.equal('object', typeof data.meta);
        assert.ok(data.posts instanceof Array);
        done();
      });
    });
  });

  describe('wpcom.me.billingHistory', function () {
    it('should require billing history', function (done){

      me.billingHistory(function (err, data) {
        if (err) throw err;

        assert.ok(data);
        assert.equal('object', typeof data.billing_history);
        assert.ok(data.billing_history instanceof Array);

        assert.equal('object', typeof data.upcoming_charges);
        assert.ok(data.upcoming_charges instanceof Array);

        done();
      });
    });
  });

});
