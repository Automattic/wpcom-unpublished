  - [SiteWordAdsSettings()](#sitewordadssettings)
  - [SiteWordAdsSettings.get()](#sitewordadssettingsgetqueryobjectfnfunction)
  - [SiteWordAdsSettings.update()](#sitewordadssettingsupdatequeryobjectbodyobjectfnfunction)

### SiteWordAdsSettings()

  `SiteWordAdsSettings` constructor.
  
  *Example:*
```js
 // Require `wpcom-unpublished` library
 var wpcomUnpublished = require('wpcom-unpublished');
 
 // Create a `wpcomUnpublished` instance
 var wpcom = wpcomUnpublished();
 
 // Create a `SiteWordAdsSettings` instance
 var wordAds = wpcom
   .site('my-blog.wordpress.com')
   .wordAds()
   .settings();
```

### SiteWordAdsSettings.get([query]:Object, fn:Function)

  Get detailed WordAds settings information about the site.
  
  *Example:*
```js
 // Get site settings information
 wpcom
 .site('my-blog.wordpress.com')
 .wordAds()
 .settings()
 .get(function(err, data) {
   // `settings` information object
 });
```

### SiteWordAdsSettings.update([query]:Object, body:Object, fn:Function)

  Update WordAds settings for the site.
  
  *Example:*
```js
 var settings = {}; // your settings here
 
 // Get site settings information
 wpcom
 .site('my-blog.wordpress.com')
 .wordAds()
 .settings()
 .update(settings, function(err, data) {
   // data settings information object
 });
```

