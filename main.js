#!/usr/bin/env node

require('babel/register');
require('dotenv').load();
require('./lib/server')();