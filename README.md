##WARN: This library is deprecated. Use [wpcom.js](https://github.com/Automattic/wpcom.js).


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

## Run testing app

1. Install npm dependencies `make install`
2. Add `127.0.0.1 calypso.localhost` to your local hosts file.
3. Execute `make run-test-app` from the root directory of the repository.
4. Open `calypso.localhost:3000` in your browser.

### Links

[wpcom.js]: http://wpcomjs.com
[REST API]: http://developer.wordpress.com/docs/api
[WordPress.com]: http://www.wordpress.com

## License

wpcom-unpublished is licensed under [GNU General Public License v2 (or later)](./LICENSE.md).
