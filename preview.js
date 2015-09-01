import element from 'dekujs/virtual-element';
import { deku, render } from 'dekujs/deku';
import { Menu, Code } from './lib';
import examples from './examples' ;
import store from 'yields/store';

/**
 * App.
 */

let App = {
  render({ props, state }, updateState) {
    let { examples } = props;
    let defaultActive = store('current');
    let example = state.example || examples[defaultActive] || examples.Code;
    let items = Object.keys(examples);

    return (
      <div class='App'>
        <div class='App-menu'>
          <Menu items={ items } onChange={ changeExample } defaultActive={ defaultActive }/>
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

    function changeExample(expl) {
      analytics.track('Viewed Example', expl);
      store('current', expl);
      updateState({ example: examples[expl] });
    }
  }
};

let app = deku(<App examples={ examples }/>);
render(app, document.querySelector('main'));
