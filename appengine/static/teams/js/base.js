/* Copyright 2013 Sfeir Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Client ID of the application (from the APIs Console).
 *
 * @type {string}
 */
// Below is for the deployed and localhost.
CLIENT_ID = '963009065087-2a5ccl5rhm4ghgm88li21fkjgsu5eua0@developer.gserviceaccount.com';
/**
 * Scopes used by the application.
 *
 * @type {string}
 */
SCOPES = 'https://www.googleapis.com/auth/userinfo.email';

/**
 * Response type of the auth token.
 *
 * @type {string}
 */
RESPONSE_TYPE = 'token id_token';

/**
 * Initializes the application. It loads asynchronously all needed libraries
 *
 * @param {string}
 *            apiRoot Root of the API's path.
 */
init = function() {
	var apisToLoad;
	var apiRoot = '//' + window.location.host + '/_ah/api';
	// Change to https appspot domain for deployment.
	if (window.location.host.indexOf("localhost") === -1) {
		apiRoot = "https://roseboticsweb.appspot.com/_ah/api"
	}
	var callback = function() {
		if (--apisToLoad == 0) {
			// bootstrap manually angularjs after our api are loaded
			angular.bootstrap(document, ["TeamApp"]);
		}
	}
	apisToLoad = 2; // must match number of calls to gapi.client.load()
	gapi.client.load('teams', 'v1', callback, apiRoot);
	gapi.client.load('oauth2', 'v2', callback);
};
