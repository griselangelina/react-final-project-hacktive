import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallCard from '../../Molecule/Card/SmallCard/Card';
import Jelajah from './Jelajah';

configure({adapter: new Adapter()});

describe('<Jelajah />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Jelajah />);
    });

    it('should render three <Jelajah /> elements if not authenticated', () => {
        expect(wrapper.find(SmallCard)).toHaveLength(3);
    });
});