# propcopy

Takes a string with point separated object properties and adds them to a real object (+ adds a value) 

## Getting Started
Install the module with: `npm install propcopy`

```javascript
var propcopy = require('propcopy');
console.log(propcopy.add('propOne.propTwo.propThree.propFour', 'someValue'));
// will return: {propOne: {propTwo: {propThree: {propFour: 'someValue'}}}}
propcopy.get();
// will return: {propOne: {propTwo: {propThree: {propFour: 'someValue'}}}}
// propcopy.get() returns everything that has been set via add()
```

## Documentation
_(Coming soon)_

## Examples
see Getting Started

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Marc Dix
Licensed under the MIT license.
