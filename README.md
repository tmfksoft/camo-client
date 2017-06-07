A simple and light weight library to generate Camo URLs for use with self hosted copies of GitHub Camo.
camo-client uses built in NodeJS libraries and requires no external dependencies.
As a result camo-client will work on any platform that supporting NodeJS's crypto, querystring and url libraries.

You can find Camo here:
https://github.com/atmos/camo

# Usage
Install camo-client like any other Library and require it into your code.
Ensure you know your domain and key for Camo. You'll need these while generating URLS.

# Example
This example will get you started:
```js
let CamoClient = require('camo-client');

const opts = {
	url: "https://smallimage.in/x2p8i.png",
	domain: "my.camo.domain.com",
	key: "abc1234"
};

// Create a new CamoClient with our domain and key.
let camo = new CamoClient(opts.domain, opts.key);

// Get a fully encoded Camo URL - https://camo.domain/digest/hexurl
console.log(camo.getFull(opts.url));

// Get a partially encoded Camo URL - https://camo.domain/digest/?url=original_url
console.log(camo.getPartial(opts.url));

// Get an optional Camo URL, this returns the original URL if the original URL is already HTTPS otherwise returns a HTTPS Camo URL.
console.log(camo.getOptional(opts.url));
```

# Run a test!
If you wish to test everything is working out of the box,
you will find a test.js in the camo-client directory.

Run it like so:
`env CAMO_KEY="abc1234" CAMO_DOMAIN="camo.domain" node test.js`