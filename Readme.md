
# Matter

Matter is a tiny collection of UI components. Feel free to use it to compose your application in a modular, flexible manner. Check out the [website](http://stevenmiller888.github.io/matter/) for live examples.

![](https://cldup.com/xTRE1NuYTv.png)

## Installation

You can use Browserify or Duo to build the framework, which is available on npm:

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
  // ... code snippet
`}
</Code>
```

### Menu

```js
<Menu onChange={ change } items={['one', 'two', 'three']} />
```

### Table

```js
<Table rows={[
  ['Full Name', 'Age'], // header row
  ['Steven Miller', '25'],
  ['Tamara Jordan', '23'],
  ['John Smith', '28']
]} />
```

### Text Field

```js
<TextField placeholder='e.g. Steven Miller' />
```
