import * as React from 'react';
import { createShallow } from '@devexpress/dx-testing';
import { Head, classes } from './table-parts';

describe('Head', () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it('should render header with correct styles', () => {
    const tree = shallow((<Head />));

    expect(tree.is(`.${classes.fixedHeader}`)).toBeFalsy();
  });

  it('should render header with correct styles, isFixed', () => {
    const tree = shallow((<Head isFixed />));

    expect(tree.is(`.${classes.fixedHeader}`)).toBeTruthy();
  });
});
