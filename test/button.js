/** @jsx element **/

import { Mock, mount, assert as assertElement } from 'deku-testutils';
import trigger from 'compat-trigger-event';
import assert from 'assert';
import element from 'virtual-element';
import { Button }  from '../';

describe('Button', () => {
  const mock = Mock(Button);

  it('returns a button with the right classes', () => {
    const node = mock.render();
    assertElement.isNode(node, 'button');
    assertElement.hasClass(node, 'matter-Button');
  });

  describe('with props', () => {
    describe('.type', () => {
      it('sets the `type` attribute', () => {
        const props = { type: 'secondary' };
        const node = mock.render({ props });
        assertElement.hasAttribute(node, 'type', 'secondary');
      });
      it('sets the `type` attribute to `primary` by default', () => {
        const node = mock.render();
        assertElement.hasAttribute(node, 'type', 'primary');
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
        const app = mount(<Button onClick={handle} />);

        function handle(e) {
          assert.strictEqual(e.type, 'click');
          app.unmount;
          done();
        }

        trigger(app.element.querySelector('button'), 'click');
      });
    });
  });
});
