import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
  state(
    'collapsed',
    style({
      height: '0px',
      padding: '0px 24px',
      overflow: 'hidden',
    })
  ),
  state(
    'expanded',
    style({
      height: '*',
      padding: '24px',
      overflow: 'visible',
    })
  ),
  transition('collapsed <=> expanded', animate('150ms ease-in-out')),
]);
