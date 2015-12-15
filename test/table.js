/** @jsx element **/

import { Mock, assert as assertElement, findAllWithClass } from 'deku-testutils';
import element from 'virtual-element';
import { Table }  from '../';

describe('Table', () => {
  const mock = Mock(Table);
  const props = {
    rows: [
      ['foo', 'bar'],
      ['baz', 'quz']
    ]
  };

  it('returns a table with the right classes', () => {
    const node = mock.render({ props });
    assertElement.isNode(node, 'table');
    assertElement.hasClass(node, 'matter-Table');
  });

  describe('with props', () => {
    describe('.rows', () => {
      it('creates rows with the right classes', () => {
        const node = mock.render({ props });
        assertElement.hasChildren(node, (tbody) => {
          assertElement.isNode(tbody, 'tbody');
          assertElement.hasChildren(tbody, (row) => {
            assertElement.isNode(row, 'tr');
            assertElement.hasClass(row, 'matter-Table-row');
          });
        });
      });

      it('creates cells with the right classes', () => {
        const node = mock.render({ props });
        const rows = findAllWithClass(node, 'matter-Table-row');
        assertElement.hasChildren(rows[0], (cell) => {
          assertElement.isNode(cell, 'td');
          assertElement.hasClass(cell, 'matter-Table-cell');
        });
      });
    });
  });
});
