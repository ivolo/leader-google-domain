
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
    email: 'ilya@segment.io',
    // ..
    domain: {
        name: 'segment.io',
        description: 'The ultimate analytics platform. Send your data to any service with the flick of...'
        google: {
          link: 'https://segment.io/'
        }
    }
}
```

## API

#### google()

  Return a domain googling plugin.
