import element from 'dekujs/virtual-element';
import { Table } from '/lib';

/**
 * Render.
 */

function render({props, state}, setState) {
  return (
    <Table
      rows={[
        ['Full Name', 'Age'],
        ['Steven Miller', '25'],
        ['Tamara Jordan', '23'],
        ['John Smith', '28']
      ]}/>
  );
}

export default {render};
