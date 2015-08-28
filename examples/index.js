import element from 'dekujs/virtual-element';

import TextFieldExample from './text-field';
import ButtonExample from './button';
import TableExample from './table';
import CodeExample from './code';
import MenuExample from './menu';

/**
 * Examples.
 */

export default {
  Code: {
    component: <CodeExample/>,
    code: '<Code language=\'javascript\'>\n{\"\nvar Git = require(\'gity\');\nvar git = Git()\n  .add(\'*.js\')\n  .commit(\'-m \"added js files\"\')\n  .run();\n\"}\n</Code>'
  },
  Table: {
    component: <TableExample/>,
    code: '<Table rows={[\n   [\'Full Name\', \'Age\'],\n   [\'Steven Miller\', \'25\'],\n   [\'Tamara Jordan\', \'23\'], \n   [\'John Smith\', \'28\']]}/>'
  },
  Menu: {
    component: <MenuExample/>,
    code: '<Menu items={ items } onChange={ onChange }/>'
  },
  TextField: {
    component: <TextFieldExample/>,
    code: '<TextField placeholder=\'e.g. Steven Miller\'/>'
  },
  Button: {
    component: <ButtonExample/>,
    code: '<Button label=\'Large\' size=\'large\' type=\'primary\'/>\n<Button label=\'Medium\' size=\'medium\' type=\'primary\'/>\n<Button label=\'Small\' size=\'small\' type=\'primary\'/>\n\n<Button label=\'Primary\' size=\'medium\' type=\'primary\'/>\n<Button label=\'Secondary\' size=\'medium\' type=\'secondary\'/>\n<Button label=\'Danger\' size=\'medium\' type=\'danger\'/>'
  }
};
