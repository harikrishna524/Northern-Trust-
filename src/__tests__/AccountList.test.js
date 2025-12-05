import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AccountList from '../components/AccountList';

describe('AccountList Component', () => {
  it('renders title', () => {
    const wrapper = shallow(<AccountList />);
    expect(wrapper.find('h2').text()).to.equal('Customer Accounts');
  });
});
