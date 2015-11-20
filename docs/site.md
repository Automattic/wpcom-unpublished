  - [Site()](#site)
  - [Site.postCounts()](#sitepostcountstypestringqueryobjectfnfunction)
  - [Site.postTypesList()](#siteposttypeslistqueryobjectfnfunction)
  - [Site.primaryDomain()](#siteprimarydomainqueryobjectfnfunction)
  - [Site.pluginsList()](#sitepluginslistqueryobjectfnfunction)
  - [Site.post()](#sitepostidstringnumber)
  - [Site.wordAds()](#sitewordads)

### Site()

  `Site` constructor.
  
  It inherits from `WPCOM#Site` class.
  
  Use a `WPCOM` instance to create a new `Site` instance.
  
  *Example:*
```js
 // Require `wpcom-unpublished` library
 var wpcomUnpublished = require('wpcom-unpublished');
 
 // Create a `wpcomUnpublished` instance
 var wpcom = wpcomUnpublished();
 
 // Create a `Site` instance
 var site = wpcom.site("my-blog.wordpress.com");
```

### Site.postCounts(type:String, [query]:Object, fn:Function)

  Get number of posts in the post type groups by post status
  
  *Example:*
```js
// Get number post of pages
 wpcom
 .site('my-blog.wordpress.com')
 .postCounts('page', function(err, data) {
   // `counts` data object
 });
```

### Site.postTypesList([query]:Object, [fn]:Function)

  Retrieves available post types
  
  *Example:*
```js
 // Get all post types from WordPress blog
 wpcom
 .site('my-blog.wordpress.com')
 .postTypesList(function(err, data) {
   // post types in data object
 });
```

### Site.primaryDomain([query]:Object, [fn]:Function)

  Get primary domain
  
  *Example:*
```js
 // Get primary domain
 wpcom
 .site('my-blog.wordpress.com')
 .primaryDomain(function(err, data) {
   // data.domain
 });
```

### Site.pluginsList([query]:Object, [fn]:Function)

  Get plugins data from
  
  *Example:*
```js
 // Get plugins list of WordPress blog
 wpcom
 .site('my-blog.wordpress.com')
 .pluginsList(function(err, data) {
   // data
 });
```

### Site.post(id:String|Number)

  Return a `Post` instance
  
  *Example:*
```js
 // Create a Post instance
 var post = wpcom.site("my-blog.wordpress.com").post(1234);
```

### Site.wordAds()

  Return a `SiteWordAds` instance.
  
  *Example:*
```js
 // Create a SiteWordAds instance
 
 var wordAds = wpcom
   .site('my-blog.wordpress.com')
   .wordAds();
```

