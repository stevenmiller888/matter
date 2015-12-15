import { Mock, assert as assertElement } from 'deku-testutils';
import { Code }  from '../';

const innerHTML = '<span class="Highlight-selector">body <span class="Highlight-punctuation">{</span></span><span class="Highlight-punctuation">}</span>';

describe('Code', () => {
  const mock = Mock(Code);
  const props = {
    language: 'css',
    children: ['body {}']
  };

  it('returns a code element wrapped in a div with the right classes', () => {
    const node = mock.render({ props });
    assertElement.isNode(node, 'div');
    assertElement.hasClass(node, 'matter-Code');
    assertElement.hasChildren(node, (child) => {
      assertElement.isNode(child, 'code');
      assertElement.hasClass(child, 'matter-Code-code');
    });
  });

  it('sets the code innerHTML attribute to the given child' , () => {
    const node = mock.render({ props });
    const codeNode = node.children[0];
    assertElement.hasAttribute(codeNode, 'innerHTML', innerHTML);
  });
});
