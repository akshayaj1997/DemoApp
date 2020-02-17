import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import DemoCounter from './Components/DemoCounter';

describe("DemoCounter", () => {
  it("should render my component", () => {
    const wrapper = render(<DemoCounter />);
  });
});

it( "It must change value as the buttons are pressed", () => {
  const wrapper = render(<DemoCounter/>);
 const increase= wrapper.find('button').at('0');
 const decrease = wrapper.find('button').at('1');
 increase.simulate('click');
});
