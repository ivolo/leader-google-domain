
# leader-google-domain

  A [leader](https://github.com/ivolo/leader) plugin for  googling email domains.

## Example

```js
var Leader = require('leader');
var google = require('leader-google-domain');

var leader = Leader()
  .use(google())
  .populate({ email: 'ilya@segment.io', function(err, person) {
    // ..
});
```

And adds the `domain` object to the `person`:

```js
{
    email: 'joe@mailinator.com',
    // ..
    domain: {
        name: 'mailinator.com',
        description: ''
        google: {
          link: ''
        }
    }
}
```

## API

#### google()

  Return a domain googling plugin.
