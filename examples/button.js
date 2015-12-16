import element from 'virtual-element';
import { Button } from '../lib';

/**
 * Button example.
 */

export default {
  render() {
    return (
      <div>
        <div>
          <div style="margin-top:7px;">
            <Button label='Large' size='large' type='primary'/>
          </div>
          <div style="margin-top:7px;">
            <Button label='Medium' size='medium' type='primary'/>
          </div>
          <div style="margin-top:7px;">
            <Button label='Small' size='small' type='primary'/>
          </div>
        </div>
        <div style='margin-top:40px;'>
          <div style="margin-top:7px;">
            <Button label='Primary' size='medium' type='primary'/>
          </div>
          <div style="margin-top:7px;">
            <Button label='Secondary' size='medium' type='secondary'/>
          </div>
          <div style="margin-top:7px;">
            <Button label='Warning' size='medium' type='warning'/>
          </div>
        </div>
      </div>
    );
  }
};
