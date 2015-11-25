  - [MeSettings()](#mesettings)
  - [MeSettings.get()](#mesettingsgetqueryobjectfnfunction)
  - [MeSettings.profileLinks()](#mesettingsprofilelinks)

### MeSettings()

  `MeSettings` constructor.
  
  Use a `WPCOM#Me` instance to create a new `MeSettings` instance.
  
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
 // Create a `MeSettings` instance
 var settings = wpcom.me().settings();
```

### MeSettings.get([query]:Object, fn:Function)

  Get settings for the current user.
  
  *Example:*
```js
 // Get settings for the current user
 wpcom
 .me()
 .settings()
 .get( function( err, data ) {
   // user settings data object
 } );
```

### MeSettings.profileLinks()

  Return `ProfileLinks` instance
  
  *Example:*
```js
 // Create a ProfileLinks instance
 var profile_links = wpcom.me().settings().profileLinks();
```

