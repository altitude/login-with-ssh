import crypto from 'crypto';
import { utils } from 'ssh2';

import Payload from './Payload';

export default authentication;

function authentication(ctx) {

	if (ctx.method === 'publickey') {
		publicKeyAuth(ctx);
	}

	ctx.reject();
}

function publicKeyAuth(ctx) {

	const base64key = ctx.key.data.toString('base64');

	// client took the challenge
	if (ctx.signature) {

		let pubKey = 'ssh-rsa ' + base64key;
		pubKey = utils.parseKey(pubKey);
		pubKey = utils.genPublicKey(pubKey);

		const verifier = crypto.createVerify(ctx.sigAlgo);
		verifier.update(ctx.blob);

		if (verifier.verify(pubKey.publicOrig, ctx.signature, 'binary')) {
			ctx.accept();
			
			const payload = new Payload();
			payload.setSession(ctx.username);
			payload.addKey(base64key);
			console.log(payload.getMessage());
			payload.send();
		}

	} else {
		// client's just checking if the server wants this public key
		ctx.accept();
	}
}