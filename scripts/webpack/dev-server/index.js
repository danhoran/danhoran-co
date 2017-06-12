/* eslint-disable import/no-extraneous-dependencies, import/first */
import './dotenv';

import compression from 'compression';
import express from 'express';

import config from '../../../src/config';
import render from '../../../src/utilities/server/render';

const app = express();

app.disable('x-powered-by');

app.use(compression());
app.use(render);

app.listen(config.server.port, () => {});
