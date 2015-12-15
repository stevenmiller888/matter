/** @jsx element **/

import { Mock, assert as assertElement } from 'deku-testutils';
import element from 'virtual-element';
import { Shape }  from '../';

describe('Shape', () => {
  const mock = Mock(Shape);

  it('returns a div with the right classes', () => {
    const node = mock.render();
    assertElement.isNode(node, 'div');
    assertElement.hasClass(node, 'matter-Shape');
  });

  describe('with props', () => {
    describe('.color', () => {
      it('sets the `color` attribute', () => {
        const props = { color: 'fire' };
        const node = mock.render({ props });
        assertElement.hasAttribute(node, 'color', 'fire');
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
    describe('.kind', () => {
      it('sets the `kind` attribute', () => {
        const props = { kind: 'circle' };
        const node = mock.render({ props });
        assertElement.hasAttribute(node, 'kind', 'circle');
      });
      it('sets the `kind` attribute to `rectangle` by default', () => {
        const node = mock.render();
        assertElement.hasAttribute(node, 'kind', 'rectangle');
      });
    });
    describe('.space', () => {
      it('sets the `space` attribute', () => {
        const props = { space: 'small' };
        const node = mock.render({ props });
        assertElement.hasAttribute(node, 'space', 'small');
      });
      it('sets the `space` attribute to `medium` by default', () => {
        const node = mock.render();
        assertElement.hasAttribute(node, 'space', 'medium');
      });
    });
  });
  describe('with children', () => {
    it('wraps children', () => {
      const props = { children: [ 'Hello World' ] };
      const node = mock.render({ props });
      assertElement.hasChildren(node, props.children);
    });
  });
});
