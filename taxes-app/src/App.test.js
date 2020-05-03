import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import MainApp from './components/MainApp';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


test('renders taxes app text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to taxes app!/i);
  expect(linkElement).toBeInTheDocument();
});

describe('MainApp', () => {
  it('should render correctly', () => {
    const component = shallow(<MainApp />);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<MainApp />);

    expect(component).toMatchSnapshot();
  });

  it("should count netto price properly", () => {
    //given
    const wrapper = shallow(<MainApp />);
    let desiredPrice = 10.00;
    let tax = 0.04;
    //when
    let nettoPrice = wrapper.instance().countNettoValue(tax, desiredPrice)
    //then
    expect(nettoPrice).toBe("9.62");
  });
});
