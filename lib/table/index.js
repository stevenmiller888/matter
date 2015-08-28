import element from 'dekujs/virtual-element';

/**
 * `Table`.
 */

export default {
  propTypes: {
    rows: { type: 'array', optional: false }
  },

  render({ props, state }, setState) {
    let { rows } = props;

    let tableRows = rows.map(function(row) {
      let rowCells = row.map(function(cell) {
        return (
          <td class='matter-Table-cell' colspan='1' rowspan='1'>
            <span>{ cell }</span>
          </td>
        );
      });

      return (
        <tr class='matter-Table-row'>
          { rowCells }
        </tr>
      );
    });

    return (
      <table class='matter-Table' cellpadding='0' cellspacing='0'>
        <tbody>
          { tableRows }
        </tbody>
      </table>
    );
  }
};
