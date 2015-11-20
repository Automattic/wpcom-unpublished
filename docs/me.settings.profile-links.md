  - [ProfileLinks()](#profilelinkswpcomwpcom)
  - [ProfileLinks.get()](#profilelinksgetqueryobjectfnfunction)
  - [ProfileLinks.add()](#profilelinksaddlinksarrayobjectqueryobjectfnfunction)
  - [ProfileLinks.del()](#profilelinksdelslugstringqueryobjectfnfunction)

### ProfileLinks(wpcom:WPCOM)

  `ProfileLinks` constructor.

### ProfileLinks.get([query]:Object, fn:Function)

  Get profile links of the current user.
  
  *Example:*
```js
// Get profile links of the current user
 wpcom
 .me()
 .settings()
 .profileLinks()
 .get(function(err, data) {
   // profile links data
 });
```

### ProfileLinks.add(links:Array|Object, [query]:Object, fn:Function)

  Add a profile link to current user.
  
  *Example:*
```js
 // Add profile link to current user
 wpcom
 .me()
 .settings()
 .profileLinks()
 .add({
   title: "WordPress Blog",
   value: "en.blog.wordpress.com"
 }, function(err, data) {
   // profile has been added
 });
```

### ProfileLinks.del(slug:String, [query]:Object, fn:Function)

  Remove your ProfileLinks from a Post.
  
  *Example:*
```js
 // Remove profile link from current user
 wpcom
 .me()
 .settings()
 .profileLinks()
 .del('httpen-blog-wordpress-com', function(err, data) {
   // profile has been deleted
 });
```

