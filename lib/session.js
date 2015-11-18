export default session;

function session(accept, reject, info) {

	const session = accept();

	session.on('pty', pty);

	session.on('shell', shell);

}

function shell(accept, reject, info) {

	const stream = accept();

	stream.write("Hello! ");
	stream.end();
}

function pty(accept, reject, info) {
	accept();
}