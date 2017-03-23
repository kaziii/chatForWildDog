import Wilddog from 'wilddog';
import * as config from '../config/wilddog.config';

wilddog.initializeApp(config);

export let ref = wilddog.sync().ref();
export let auth = wilddog.auth();