/** @jsx element **/

import { Mock, assert as assertElement } from 'deku-testutils';
import element from 'virtual-element';
import { TextField }  from '../';

describe('TextField', () => {
  const mock = Mock(TextField);
  const props = {
    placeholder: 'foo'
  };

  it('returns an input field with the right classes', () => {
    const node = mock.render({ props });
    assertElement.isNode(node, 'input');
    assertElement.hasClass(node, 'matter-TextField');
  });

  describe('with props', () => {
    describe('.placeholder', () => {
      it('sets the `placeholder` attribute', () => {
        const node = mock.render({ props });
        assertElement.hasAttribute(node, 'placeholder', 'foo');
      });
    });
  });
});
