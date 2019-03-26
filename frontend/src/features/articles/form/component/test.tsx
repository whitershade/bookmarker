import React from 'react';
import { shallow } from 'enzyme';

import Component from './index';

const actions = {

};

const props = {
  ...actions,
};

const Wrapper = shallow(<Component {...props} />);

describe('"features/articles/form" component', () => {
  it('should renders as "div"', () => {
    expect(Wrapper.type()).toBe('div');
  });
});
