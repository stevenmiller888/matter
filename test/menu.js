/** @jsx element **/

import { Mock, mount, assert as assertElement } from 'deku-testutils';
import trigger from 'compat-trigger-event';
import assert from 'assert';
import element from 'virtual-element';
import { Menu }  from '../';

describe('Menu', () => {
  const mock = Mock(Menu);
  const props = { items: ['foo', 'bar', 'baz'] };

  it('returns a menu with the right classes', () => {
    const node = mock.render({ props });
    assertElement.isNode(node, 'div');
    assertElement.hasClass(node, 'matter-Menu');
    assertElement.hasChildren(node, (child) => {
      assertElement.hasClass(child, 'matter-Menu-item');
    });
  });

  describe('with state', () => {
    describe('.activeItem', () => {
      it('gets activeItem from state if it exists', () => {
        const state = { activeItem: 'bar' };
        const node = mock.render({ props, state });
        assertElement.hasAttribute(node.children[1], 'active', true);
      });
    });
  });

  describe('with props', () => {
    describe('.items', () => {
      it('creates a menu item for each member', () => {
        const node = mock.render({ props });
        assertElement.hasChildren(node, 3);
      });
      it('sets the first item as active by default', () => {
        const node = mock.render({ props });
        assertElement.hasAttribute(node.children[0], 'active', true);
      });
    });
    describe('.defaultActive', () => {
      it('sets the active item', () => {
        const props = {
          items: ['foo', 'bar', 'baz'],
          defaultActive: 'bar'
        };
        const node = mock.render({ props });
        assertElement.hasAttribute(node.children[1], 'active', true);
      });
    });
    describe('.onChange(item)', () => {
      it('fires the event handler', (done) => {
        const items = ['foo'];
        const app = mount(<Menu onChange={handle} items={items} />);

        function handle(item) {
          assert.strictEqual(item, 'foo');
          app.unmount;
          done();
        }

        trigger(app.element.querySelector('.matter-Menu-item'), 'click');
      });
    });
  });
});
