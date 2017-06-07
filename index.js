const crypto = require('crypto'),
	querystring = require('querystring'),
	URL = require('url');

class CamoClient {
	constructor(domain, key) {
		this.domain = domain;
		this.key = key;
	}
	
	// Returns a FULL camo URL
	getFull(url) {
		let hex = this.getHex(url);
		let hash = this.getDigest(url);
		return `https://${this.domain}/${hash}/${hex}`;
	}
	
	// Returns Camo URL with original URL as query string.
	getPartial(url) {
		let hash = this.getDigest(url);
		let query = querystring.escape(url);
		return `https://${this.domain}/${hash}/?url=${query}`;
	}
	
	// Returns an optionally HTTPS URL. In the event that a URL is HTTP it returns a Camo URL otherwise the original HTTPS url
	getOptional(addr) {
		const parsed = URL.parse(addr);
		if (!parsed.protocol) return addr;
		if (parsed.protocol.toLowerCase() == "http:") {
			return this.getFull(addr);
		}
		return addr;
	}
	
	getDigest(url) {
		return crypto.createHmac('sha1', this.key).update(url).digest('hex');
	}
	
	getHex(url) {
		return new Buffer(url, 'ascii').toString('hex');
	}
	
}
module.exports = CamoClient;
