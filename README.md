Signature addon
===============

This addon renders an [angular-slider](http://angular-slider.github.io/angularjs-slider) slider in a form field.

Installation
------------

The easiest way is to install is with bower, this will also include dependencies:
```bash
bower install angular-schema-form-range-slider
```

You will also have to install angularjs-slider as a dependency

```bash
bower install --save angularjs-slider
```

Further you will have to add a dependency on `rzModule` in your angular application:

```javascript
angular.module('myApp', [
  ...,
  'rzModule'
]);
```

Usage
-----

The range-slider add-on adds a new form type, `range`.

|   Form Type    |       Becomes       |
|:---------------|:-------------------:|
|     range      |a range-slider widget|

### Options

Options can be passed directly through to the angular-slider through the 'options' attribute
of the form field declaration. The available options are listed [here](https://github.com/angular-slider/angularjs-slider#directive-attributes).

### Examples

Here's an example:

```javascript
{
  key: 'range',
  type: 'range',
  options: {
    floor: 0,
    ceil: 12,
    ...
  }
}
```

Development
-----------
Install dev dependencies:
```bash
npm install
```

Install project dependencies:
```bash
bower install
```

Run gulp to generate output:
```bash
gulp
```
