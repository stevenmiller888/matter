import element from 'virtual-element';
import { Grid, Shape } from '../lib';

/**
 * Shape example.
 */

export default {
  render() {
    return (
      <Grid>
        <Shape kind="square" size="small" color="wind"/>
        <Shape kind="circle" size="small" color="earth"/>
        <Shape kind="triangle" size="small" color="water"/>
        <Shape kind="rectangle" size="small" color="fire"/>
      </Grid>
    );
  }
};
