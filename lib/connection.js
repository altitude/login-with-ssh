import authentication from './authentication';
import session from './session';

export default connection;

function connection(client) {
	
	console.log('new client connected!');

	client.on('authentication', authentication);
	
	client.on('session', session);
}