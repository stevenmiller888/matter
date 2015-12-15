/** @jsx element **/

import { Mock, mount, assert as assertElement } from 'deku-testutils';
import trigger from 'compat-trigger-event';
import assert from 'assert';
import element from 'virtual-element';
import { Checkbox }  from '../';

describe('Checkbox', () => {
  const mock = Mock(Checkbox);

  it('returns a checkbox with the right classes', () => {
    const node = mock.render();
    assertElement.isNode(node, 'input');
    assertElement.hasAttribute(node, 'type', 'checkbox');
    assertElement.hasClass(node, 'matter-Checkbox');
  });

  describe('with props', () => {
    describe('.checked', () => {
      it('sets the `checked` attribute', () => {
        const props = { checked: true };
        const node = mock.render({ props });
        assertElement.hasAttribute(node, 'checked', true);
      });
    });
    describe('.size', () => {
      it('sets the `size` attribute', () => {
        const props = { size: 'small' };
        const node = mock.render({ props });
        assertElement.hasAttribute(node, 'size', 'small');
      });
      it('sets the `size` attribute to `medium` by default', () => {
        const node = mock.render();
        assertElement.hasAttribute(node, 'size', 'medium');
      });
    });
    describe('.onClick(e)', () => {
      it('fires the event handler', (done) => {
        const app = mount(<Checkbox onClick={handle} />);

        function handle(e) {
          assert.strictEqual(e.type, 'click');
          app.unmount;
          done();
        }

        trigger(app.element.querySelector('input'), 'click');
      });
    });
  });
});
