import { render, screen } from '@testing-library/react';
import { IItem } from '../../../models/items/Item.interface';
import Item from './Item.component';
describe('Item.component: rendering', () => {
  it('renders an Item text correctly', () => {
    const model: IItem = {
      id: 1,
      name: 'Unit test item 1',
      selected: false
    };

    // render component
    render(<Item testid="unit-test-item" model={model} onItemSelect={() => {}} />);
    // get element reference by testid
    const textElement = screen.getByTestId(`unit-test-item-text`);

    // test
    expect(textElement).not.toBeNull();
    expect(textElement.innerHTML).toContain('Unit test item 1');
  });

  it('renders an Item toggle correctly', () => {
    const model: IItem = {
      id: 1,
      name: 'Unit test item 2',
      selected: false
    };

    // render component
    render(<Item testid="unit-test-item" model={model} onItemSelect={() => {}} />);
    // get element reference by testid
    const toggleElement = screen.getByTestId(`unit-test-item-toggle`);

    // test
    expect(toggleElement).not.toBeNull();
  });

  it('has expected css class when selected is true', () => {
    const model: IItem = {
      id: 1,
      name: 'Unit test item 3',
      selected: true
    };

    // render component
    render(<Item testid="unit-test-item" model={model} onItemSelect={() => {}} />);
    // get element reference by testid
    const liElement = screen.getByTestId(`unit-test-item`);

    // test
    expect(liElement).not.toBeNull();

    // check that the element class attribute has the expected value
    expect(liElement.className).toContain('selected');
  });

  it('has expected css class when selected is false', () => {
    const model: IItem = {
      id: 1,
      name: 'Unit test item 3',
      selected: false
    };

    // render component
    render(<Item testid="unit-test-item" model={model} onItemSelect={() => {}} />);
    // get element reference by testid
    const liElement = screen.getByTestId(`unit-test-item`);

    // test
    expect(liElement).not.toBeNull();

    // check that the element class attribute does not contain 'selected'
    expect(liElement.className).not.toContain('selected');
  });
});
