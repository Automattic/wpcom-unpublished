  - [SiteWordAds()](#sitewordads)
  - [SiteWordAds.settings()](#sitewordadssettings)
  - [SiteWordAds.earnings()](#sitewordadsearnings)
  - [SiteWordAds.tos()](#sitewordadstos)

### SiteWordAds()

  `SiteWordAds` constructor.
  
  Use a `WPCOM#Me` instance to create a new `SiteWordAds` instance.
  
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
 // Create a `SiteWordAds` instance
 var wordAds = wpcom
   .site( 'my-blog.wordpress.com' )
   .wordAds();
```

### SiteWordAds.settings()

  Return a `SiteWordAdsSettings` instance.
  
  *Example:*
```js
 // Create a SiteWordAdsSettings instance
```

  
```js
 var wordAds = wpcom
   .site( 'my-blog.wordpress.com' )
   .wordAds()
   .settings();
```

### SiteWordAds.earnings()

  Return a `SiteWordAdsEarnings` instance.
  
  *Example:*
```js
 // Create a SiteWordAdsEarnings instance
```

  
```js
 var wordAds = wpcom
   .site( 'my-blog.wordpress.com' )
   .wordAds()
   .earnings();
```

### SiteWordAds.tos()

  Return a `SiteWordAdsTOS` instance.
  
  *Example:*
```js
 // Create a SiteWordAdsTOS instance
```

  
```js
 var wordAds = wpcom
   .site( 'my-blog.wordpress.com' )
   .wordAds()
   .tos();
```

  
  Return  SiteWordAdsTOS object for the site.
