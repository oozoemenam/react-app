import { render, screen } from '@testing-library/react';
import { IItem } from '../../../models/items/Item.interface';
import Item from './Item.component';

describe('Item.component: rendering', () => {
  it('renders an Item text correctly', () => {
    const testid = 'unit-test-item';
    const model: IItem = {
      id: 1,
      name: 'Unit test item 1',
      selected: false
    };

    render(<Item testid={testid} model={model} onItemSelect={() => {}} />);

    const liElement = screen.getByTestId(testid);
    expect(liElement).not.toBeNull();
    const children = liElement.children;
    expect(children).toHaveLength(2);
    expect(children.item(1)?.innerHTML).toContain('Unit test item 1');
  });

  it('renders an Item indicator correctly', () => {
    const testid = 'unit-test-item';
    const model: IItem = {
      id: 1,
      name: 'Unit test item 2',
      selected: false
    };

    render(<Item testid={testid} model={model} onItemSelect={() => {}} />);
    const liElement = screen.getByTestId(testid);
    expect(liElement).not.toBeNull();
    const children = liElement.children;
    expect(children).toHaveLength(2);
    expect(children.item(0)?.innerHTML).toEqual('*');
  });

  it('has expected css class when selected is true', () => {
    const testid = 'unit-test-item';
    const model: IItem = {
      id: 1,
      name: 'Unit test item 3',
      selected: true
    };

    render(<Item testid={testid} model={model} onItemSelect={() => {}} />);
    const liElement = screen.getByTestId(testid);
    expect(liElement).not.toBeNull();
    expect(liElement.className).toContain('selected');
  });

  it('has expected css class when selected is false', () => {
    const testid = 'unit-test-item';
    const model: IItem = {
      id: 1,
      name: 'Unit test item 4',
      selected: false
    };

    render(<Item testid={testid} model={model} onItemSelect={() => {}} />);
    const liElement = screen.getByTestId(testid);
    expect(liElement).not.toBeNull();
    expect(liElement.className).not.toContain('selected');
  });
});
