import React from 'react';
import CurveComplementaryToNavbar from './';
import renderer from 'react-test-renderer';

it('CurveComplementaryToNavbar renders correctly', () => {
    const tree = renderer.create(<CurveComplementaryToNavbar />).toJSON();
    expect(tree).toMatchSnapshot();
});
