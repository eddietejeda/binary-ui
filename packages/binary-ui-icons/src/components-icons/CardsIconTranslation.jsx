import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M104.627,147.429h23.246L92.34,32.693H65.275l-35.7,114.736H52.323l7.14-26.567H97.487ZM63.78,104.258L78.392,49.464,93.17,104.258H63.78Z"
      />
      <Shape
        d="M271.246,210.606V195.13H253.073v-47.7h-18.74v126.5h18.74v-63.32h18.173Zm-50.969-50.117H160.222v15.475H200.4c-2.556,24.135-20.3,48.413-47.845,61.333l10.506,14.765C204.234,229.488,219.283,197.544,220.277,160.489Z"
      />
      <Shape
        d="M44.995,240.156L240.156,44.995l14.849,14.849L59.844,255.005Z"
      />
    </Group>
  )
);