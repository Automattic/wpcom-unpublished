  - [SiteWordAdsEarnings()](#sitewordadsearnings)
  - [SiteWordAdsEarnings.get()](#sitewordadsearningsgetqueryobjectfnfunction)

### SiteWordAdsEarnings()

  `SiteWordAdsEarnings` constructor.
  
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
 // Create a `SiteWordAdsEarnings` instance
 var wordAds = wpcom
   .site( 'my-blog.wordpress.com' )
   .wordAds()
   .earnings();
```

### SiteWordAdsEarnings.get([query]:Object, fn:Function)

  Get detailed WordAds earnings information about the site.
  
  *Example:*
```js
 // Get site earnings information
 wpcom
 .site( 'my-blog.wordpress.com' )
 .wordAds()
 .earnings()
 .get( function( err, data ) {
   // `earnings` information object
 } );
```

