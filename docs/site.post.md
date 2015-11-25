  - [Post()](#post)
  - [Post.subscribers()](#postsubscribersqueryobjectfnfunction)
  - [Post.subscriber()](#postsubscriber)

### Post()

  `Post` constructor.
  
  It inherits from `WPCOM#POST` class.

### Post.subscribers([query]:Object, fn:Function)

  Get post subscribers list.
  
  *Example:*
```js
 // Get subscribers list for the post
 wpcom
 .site( 'en.blog.wordpress.com' )
 .post( 1234 )
 .subscribers( function( err, data ) {
   // subscribers list data
 } );
```

### Post.subscriber()

  Return a `Subscriber` instance.
  
  *Example:*
```js
 // Create a Subscriber instance of a post
 var post = wpcom.site( 'en.blog.wordpress.com' ).post( 1234 );
 var subs = post.subscriber();
```

