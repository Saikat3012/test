/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomeScreen from '../src/HomeScreen';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow, configure } from "enzyme";
import Axios from 'axios'
// configure({ adapter: new Adapter() });
const navigation = {
    navigate: jest.fn()
}
test('renders correctly', () => {
    const tree = renderer.create(<HomeScreen />);
    expect(tree).toMatchSnapshot();
});
test('Navigate correctly', () => {
    const tree = renderer.create(<HomeScreen navigation={navigation} />);
    const button = tree.root.findByProps({ testId: "HomeScreenSearchButton" }).props;
    button.onPress();
    expect(navigation.navigate).toBeCalledWith("DetailScreen", "")
});
test('States working correctly', () => {
    const tree = renderer.create(<HomeScreen navigation={navigation} />);
    const textInput = tree.root.findByProps({ testId: "HomeScreenSearchBar" }).props;
    renderer.act(() => textInput.onChangeText("Test"))
    const textInput1 = tree.root.findByProps({ testId: "HomeScreenSearchBar" }).props;
    expect(textInput1.value).toBe("Test")
});
