import fs from 'fs';
import ssh2 from 'ssh2';

import connection from './connection';

export default function server() {

	const server = new ssh2.Server({
		privateKey: fs.readFileSync(config.key),
		debug: true,
	});

	server.on('connection', connection);

	server.listen(process.env.PORT, process.env.BIND, function() {
		console.log(`listening on ${process.env.BIND}:${process.env.PORT}`);
	});

	return server;
}