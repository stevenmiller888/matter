import element from 'dekujs/virtual-element';
import { deku, render } from 'dekujs/deku';
import { Menu, Code } from './lib';
import examples from './examples' ;

/**
 * App.
 */

let App = {
  render({ props, state }, updateState) {
    let { examples } = props;
    let example = state.example || examples.Code;
    let items = Object.keys(examples);

    return (
      <div class='App'>
        <div class='App-menu'>
          <Menu items={ items } onChange={ changeExample }/>
        </div>
        <div class='App-example'>
          <div class='App-example-component'>
            { example.component }
          </div>
          <div class='App-example-code'>
            <Code language='html'>
              { example.code }
            </Code>
          </div>
        </div>
      </div>
    );

    function changeExample(example) {
      updateState({ example: examples[example] });
    }
  }
};

let app = deku(<App examples={ examples }/>);
render(app, document.querySelector('main'));
