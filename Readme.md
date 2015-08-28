
# Matter

Matter is a tiny collection of UI components. The components are built with [Deku](http://github.com/dekujs/deku). Check out the [website](http://stevenmiller888.github.io/matter/) for live examples.

![](https://cldup.com/xTRE1NuYTv.png)

## Installation

You can use Browserify or Duo to build Matter, which is available on npm:

`npm install matterjs`

## Usage

```js
import { Button } from 'stevenmiller888/matter';
import element from 'dekujs/virtual-element';
import { deku, render } from 'dekujs/deku';

let app = deku(<Button/>);
render(app, document.body);
```

## Components

### Button

```js
<Button label="Default" size="small" type="default" />
```
  
### Code
  
```js
<Code language='javascript'>
{`
var Git = require('gity');

var git = Git()
  .add('*.js')
  .commit('-m "added js files"')
  .run();
`}
</Code>
```

### Menu

```js
let sections = ['Home', 'Profile', 'Messages', 'Notifications'];

<Menu onChange={ change } items={ sections } />
```

### Table

```js
let people = [
  ['Full Name', 'Age'], // header row
  ['Steven Miller', '25'],
  ['Tamara Jordan', '23'],
  ['John Smith', '28']
];

<Table rows={ people } />
```

### Text Field

```js
<TextField placeholder='e.g. Steven Miller' />
```
