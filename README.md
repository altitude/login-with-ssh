# Login with SSH

[Demo here](http://demo-ssh.32b6.com)

This is a simple experiment to authenticate web sessions with SSH. Doing so gives you a fully decentralized, passwordless authentication for free!

## How it works

A custom SSH server listens for connections. Instead of providing a shell or any other service, it only validates the public key you offer. Then, a callback is made to a web application with a payload containing the validated public key along with the login token used.

In practise, you would have first hit a "login with SSH button" on the web app. It would have generated a session that resolves into a valid one with a callback handing the proper key / token combination.

## Disclaimer

The code here is not intendend to be used beyond the context of this experiment (read: don't use this in production!). A proper implementation would probably have to use a better SSH library like [libssh](https://www.libssh.org/).  
Anyway, have fun!