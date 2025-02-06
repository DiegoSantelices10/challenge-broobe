const API_VERSION = 'v5';
const API_URL_BASE = `https://www.googleapis.com/pagespeedonline/${API_VERSION}/`;

const SERVICES = {
  RUN_PAGESPEED: 'runPagespeed',
};
const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export {
  API_URL_BASE,
  SERVICES,
  HTTP_METHODS,
};
