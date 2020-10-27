import React from 'react';
import ShareYourExperience from './';
import renderer from 'react-test-renderer';

it('ShareYourExperience button renders correctly', () => {
    const tree = renderer.create(<ShareYourExperience />).toJSON();
    expect(tree).toMatchSnapshot();
});
