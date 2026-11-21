import {httpServerHandler} from 'cloudflare:node';
import {server} from './server.mjs';

export default httpServerHandler(server);
