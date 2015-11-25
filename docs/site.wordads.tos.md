  - [SiteWordAdsTOS()](#sitewordadstos)
  - [SiteWordAdsTOS.get()](#sitewordadstosgetqueryobjectfnfunction)
  - [SiteWordAdsTOS.update()](#sitewordadstosupdatequeryobjectbodyobjectfnfunction)
  - [SiteWordAdsTOS.sign()](#sitewordadstossignqueryobjectfnfunction)

### SiteWordAdsTOS()

  `SiteWordAdsTOS` constructor.
  
  *Example:*
```js
 // Require `wpcom-unpublished` library
 var wpcomUnpublished = require( 'wpcom-unpublished' );
```

  
```js
 // Create a `wpcomUnpublished` instance
 var wpcom = wpcomUnpublished();
```

  
```js
 // Create a `SiteWordAdsTOS` instance
 var wordAds = wpcom
   .site( 'my-blog.wordpress.com' )
   .wordAds()
   .tos();
```

### SiteWordAdsTOS.get([query]:Object, fn:Function)

  GET site's WordAds TOS
  
  *Example:*
```js
 // Get site TOS information
 wpcom
 .site( 'my-blog.wordpress.com' )
 .wordAds()
 .tos()
 .get( function( err, data ) {
   // `settings` information object
 } );
```

### SiteWordAdsTOS.update([query]:Object, body:Object, fn:Function)

  UPDATE site's WordAds TOS
  
  *Example:*
```js
 // Update TOS
 wpcom
 .site( 'my-blog.wordpress.com' )
 .wordAds()
 .tos()
 .update( { tos: 'signed' }, function( err, data ) {
   // data settings information object
 } );
```

### SiteWordAdsTOS.sign([query]:Object, fn:Function)

  SIGN site's WordAds TOS
  
  *Example:*
```js
 // Sign TOS
 wpcom
 .site( 'my-blog.wordpress.com' )
 .wordAds()
 .tos()
 .sign( function( err, data ) {
   // data settings information object
 } );
```

