  - [Me()](#me)
  - [Me.billingHistory()](#mebillinghistoryqueryobjectfnfunction)
  - [Me.postsList()](#mepostslistqueryobjectfnfunction)
  - [Me.settings()](#mesettings)

### Me()

  `Me` constructor.
  
  It inherits from `WPCOM#Me` class.
  
  Use a `WPCOM` instance to create a new `Me` instance.
  
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
 // Create a `Me` instance
 var me = wpcom.me();
```

### Me.billingHistory([query]:Object, [fn]:Function)

  Get user billing history.
  
  *Example:*
```js
 // Get billing history for the current user
 wpcom
 .me()
 .billingHistory( function( err, data ) {
   // billing history data object
 } );
```

### Me.postsList([query]:Object, [fn]:Function)

  Posts from the sites that a user belongs to
  
  *Example:*
```js
 // Get posts list
 wpcom
 .me()
 .postsList( function( err, data ) {
   // posts list data object
 } );
```

### Me.settings()

  Return a `MeSettings` instance.
  
  *Example:*
```js
 // Create a MeSettings instance
 var settings = wpcom.me().settings();
```

