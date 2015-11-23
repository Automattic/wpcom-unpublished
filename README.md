wpcom-unpublished
=================

WPCOM extension that uses unpublished endpoints of the WordPress REST-API.

## How to use

```js
// Require modules
var wpcomUnpublished = require( 'wpcom-unpublished' );
var proxy = require( 'wpcom-proxy-request' );

// Create wpcom instance
var wpcom = wpcomUnpublished( proxy );

// Get settings for the current user
wpcom
.me()
.settings()
.get( function( err, data ) {
  // user settings data object
} );
```

[wpcom.js]: http://wpcomjs.com
[REST API]: http://developer.wordpress.com/docs/api
[WordPress.com]: http://www.wordpress.com
