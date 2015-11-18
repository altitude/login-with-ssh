"use strict";

import request from 'superagent';

export default class Payload {

	constructor() {
		this.keys = [];
	}

	setSession(session) {
		this.session = session;
		return this;
	}

	addKey(key) {
		this.keys.push(key);
		return this;
	}

	getMessage() {
		if (this.keys.length && this.session) {
			return `session ${this.session} validated with ${this.keys.length} public key${this.keys.length > 1 ? 's':''}`;
		} else {
			return `session ${this.session} not validated`;
		}
	}

	send() {
		request
		.post(process.env.CALLBACK)
		.send({session: this.session, keys: this.keys})
		.end((err, res) => {
			if (err) console.log(err);
		});
	}
}