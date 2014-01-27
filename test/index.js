
var assert = require('assert');
var Plugin = require('..');

describe('leader-goolge-domain', function () {

  var plugin = Plugin();

  it('should wait if theres no email', function () {
    var context = {}, person = {};
    assert(!plugin.wait(person, context));
  });

  it('should not wait if there is a company name', function () {
    var person = { email: 'joe@mailinator.com' };
    var context = {};
    assert(plugin.wait(person, context));
  });

  it('should google for an email domain', function (done) {
    var person = { email: 'ilya@segment.io' };
    var context = {};
    plugin.fn(person, context, function (err) {
      if (err) return done(err);
      var domain = person.domain;
      assert(domain);
      assert(domain.description);
      assert(domain.google.link);
      done();
    });
  });
});