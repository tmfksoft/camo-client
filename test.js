let CamoClient = require('./');

if (!process.argv[2]) {
	console.log("Missing URL!");
	process.exit(1);
}

if (!process.env.CAMO_DOMAIN) {
	console.log("Missing CAMO_DOMAIN!");
	process.exit(1);
}

if (!process.env.CAMO_KEY) {
	console.log("Missing CAMO_KEY!");
	process.exit(1);
}

const opts = {
	url: process.argv[2],
	domain: process.env.CAMO_DOMAIN,
	key: process.env.CAMO_KEY
};

let camo = new CamoClient(opts.domain, opts.key);
console.log(camo.getFull(opts.url));
console.log(camo.getPartial(opts.url));
console.log(camo.getOptional(opts.url));