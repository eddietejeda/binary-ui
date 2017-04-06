import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M296.014,387l-206.028,0c-23.725,0 -42.986,-19.261 -42.986,-42.986l0,-176.028c0,-23.724 19.261,-42.986 42.986,-42.986l206.028,0c23.725,0 42.986,19.262 42.986,42.986l0,176.028c0,23.724 -19.261,42.986 -42.986,42.986Zm153.23,-224.493c2.091,-1.574 4.69,-2.507 7.506,-2.507c6.899,0 12.5,5.601 12.5,12.5l0,167c0,6.899 -5.601,12.5 -12.5,12.5c-2.929,0 -5.623,-1.009 -7.755,-2.699c-0.128,-0.069 -0.255,-0.141 -0.381,-0.216l-79.217,-46.746c-4.035,-2.382 -6.241,-6.683 -6.144,-11.06c-0.002,-0.093 -0.003,-0.186 -0.003,-0.279l0,-69.367c-0.461,-4.692 1.763,-9.449 6.087,-12.001l79.217,-46.747c0.227,-0.134 0.458,-0.26 0.69,-0.378Z" />
    </Group>
  )
);