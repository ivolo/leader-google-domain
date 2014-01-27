
var extend = require('extend');
var google = require('google');
var objCase = require('obj-case');

/**
 * Create a new leader plugin.
 *
 * @returns {Object}
 */

module.exports = function () {
  return { fn: plugin(), wait: wait };
};

/**
 * Create a domain googling leader plugin.
 *
 * @return {Function}
 */

function plugin () {
  return function domainPlugin (person, context, next) {
    var email = getEmail(person, context);
    if (!email) return next();
    var domain = email.split('@')[1];
    google(domain, function (err, nextPage, results) {
      if (err) return next(err);
      if (results.length > 0) {
        var result = results[0];
        extend(true, person, {
          domain: {
            description: result.description,
            google: {
              link: result.link
            }
          }
        });
      }
      next();
    });
  };
}

/**
 * Wait until we have an email.
 *
 * @param {Object} context
 * @param {Object} person
 * @return {Boolean}
 */

function wait (person, context) {
  return getEmail(person, context);
}

/**
 * Get the persons email.
 *
 * @param {Object} context
 * @param {Object} person
 * @return {String}
 */

function getEmail (person, context) {
  return objCase(person, 'email');
}
