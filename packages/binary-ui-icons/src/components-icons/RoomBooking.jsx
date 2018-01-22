import React from 'react';
import cardsIconHOC from '../hoc';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M193.555,78.424l0,-21.322c0,-6.899 5.601,-12.5 12.5,-12.5l161.356,33.119c11.021,2.371 17.083,7.718 17.521,16.209l-0.98,332.005c-0.125,7.436 -2.91,11.161 -12.5,13.065l-165.397,28.398c-3.444,0 -6.564,-1.396 -8.826,-3.652l-0.022,-0.022c-2.256,-2.262 -3.652,-5.382 -3.652,-8.826l0,-351.474l-41.325,0l0,314.5l-0.001,0c0,6.899 -5.601,12.5 -12.5,12.5c-6.899,0 -12.5,-5.601 -12.5,-12.5c0,-0.047 0.001,-0.095 0.001,-0.142l-0.162,-330.025c0.089,-5.945 2.59,-9.185 9.118,-9.333l57.369,0Zm169.886,19.714l-144.886,-28.536l0,372.796l145.819,-23.673l-0.933,-320.587Z"
      />
      <Shape
        d="M252.225,269.753c-4.59,0 -8.598,-1.486 -12.022,-4.459c-3.424,-2.972 -5.136,-7.13 -5.136,-12.474c0,-4.741 1.656,-8.729 4.967,-11.965c3.311,-3.236 7.375,-4.854 12.191,-4.854c4.742,0 8.73,1.618 11.966,4.854c3.236,3.236 4.854,7.224 4.854,11.965c0,5.268 -1.693,9.407 -5.08,12.418c-3.386,3.01 -7.299,4.515 -11.74,4.515Z"
      />
    </Group>
  )
);