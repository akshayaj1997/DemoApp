import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme'
import DemoCounter from './Components/DemoCounter';

describe("DemoCounter", () => {
  it("should render my component", () => {
    const wrapper = render(<DemoCounter />);
  });
});

describe('Test Button component', () => {
  it("Validate button click", () => {
    const wrapper = shallow(<DemoCounter />);
    const button1 = wrapper.find('button').at('0');
    const button2 = wrapper.find('button').at('1');
    button1.simulate('click');
    expect(wrapper.update().state().count).toEqual(wrapper.state().count);
    button2.simulate('click');
    expect(0)

  });
});
