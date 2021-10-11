/**
 * @format
 */

import 'react-native';
import React from 'react';
import DetailScreen from '../src/DetailScreen'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from "enzyme";
const route = {
    navigation: jest.fn(),
    params: null
}
// configure({ adapter: new Adapter() });
const tree = renderer.create(<DetailScreen route={route} />);
test('renders correctly', () => {
    expect(tree).toMatchSnapshot();
});