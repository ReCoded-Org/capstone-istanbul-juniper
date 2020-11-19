import React from 'react';
import '../../../matchMedia';
import renderer from 'react-test-renderer';
import GamesPageImageGrid from '.';

it('GamesPageImageGrid renders correctly', () => {
    const tree = renderer.create(<GamesPageImageGrid />).toJSON();
    expect(tree).toMatchSnapshot();
});
