import React from 'react';
import TwitterImage from './';
import renderer from 'react-test-renderer';

it('TwitterImage renders correctly', () => {
    const tree = renderer.create(<TwitterImage />).toJSON();
    expect(tree).toMatchSnapshot();
});
