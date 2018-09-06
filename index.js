const express = require('express');
const path = require('path');
const app = express();

var shell = require('shelljs');

shell.exec('ng serve --'+process.env.PORT).code;
