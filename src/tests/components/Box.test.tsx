import React from 'react';
import { mount } from 'enzyme';
import Board from '../../containers/Game/Board/Board';
import AppStore from '../../store/AppStore';
import { StoreContext } from '../../components/StoreProvider/StoreProvider';

describe('Game component:', () => {
  let store: AppStore;

  beforeEach(() => {
    store = new AppStore();
  });

  test('should change the box value with the current player symbol', () => {
    const expectedOutput = 'X';

    const wrapper = mount(
      <StoreContext.Provider value={store}>
        <Board />
      </StoreContext.Provider>
      ,
    );

    // Act
    wrapper
      .find("[data-test='box-0-0']")
      .simulate('click');

    // Assert
    expect(
      wrapper
        .find("[data-test='box-0-0']")
        .text(),
    ).toBe(expectedOutput);
  });

  test('should not change the box value if it is called twice', () => {
    // Arrange
    const expectedOutput = 'X';

    const wrapper = mount(
      <StoreContext.Provider value={store}>
        <Board />
      </StoreContext.Provider>
      ,
    );

    // Act
    wrapper
      .find("[data-test='box-0-0']")
      .simulate('click')
      .simulate('click');

    // Assert
    expect(
      wrapper
        .find("[data-test='box-0-0']")
        .text(),
    ).toBe(expectedOutput);
  });
});
