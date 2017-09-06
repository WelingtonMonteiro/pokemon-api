/**
 * Created by Welington on 24/05/2017.
 */

'use strict';
module.exports = {
    success: success,
    error: error,
    notFounded: notFounded,
    notAuthorized: notAuthorized,
    forbidden: forbidden
};

function success(res, response, status) {   
    res.status(status || 200).send(response);
}

function error(res, response, status) {	
    res.status(status || 412).send(response);
}

function notFounded(res, response, status) {   
    res.status(status || 404).send(response);
}

function notAuthorized(res, response, status) {    
    res.status(status || 401).send(response);
}

function forbidden(res, reponse) {
    res.status(status || 403).send(reponse);
}
