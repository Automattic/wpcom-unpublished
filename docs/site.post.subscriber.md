  - [Subscriber()](#subscriberpidstringsidstringwpcomwpcom)
  - [Subscriber.mine()](#subscriberminequeryobjectfnfunction)
  - [Subscriber.add()](#subscriberaddqueryobjectfnfunction)
  - [Subscriber.del()](#subscriberdelfnfunction)

### Subscriber(pid:String, sid:String, wpcom:WPCOM)

  `Subscriber` constructor.

### Subscriber.mine([query]:Object, fn:Function)

  Get subscriber status for the current user for the Post.
  
  
  *Example:*
```js
 Get subscriber status for the current user for the Post
 wpcom
 .site( 'en.blog.wordpress.com' )
 .post( 1234 )
 .subscriber()
 .mine( function( err, data ) {
   // subscription data
 } );
```

### Subscriber.add([query]:Object, fn:Function)

  Subscribe the current user to the post.
  
  *Example:*
```js
 // Subscribe the current user to the post
 wpcom
 .site( 'en.blog.wordpress.com' )
 .post( 1234 )
 .subscriber()
 .add( function( err, data ) {
   // current user has been subscribed to post
 } );
```

### Subscriber.del(fn:Function)

  Unsubscribe current user to the post
  
  *Example:*
```js
 // Unsubscribe current user to the post
 wpcom
 .site( 'en.blog.wordpress.com' )
 .post( 1234 )
 .subscriber()
 .del( function( err, data ) {
   // current user has been unsubscribed to post
 } );
```

