import { fireEvent, render } from '@testing-library/react';
import { IItem } from '../../../models/items/Item.interface';
import Item from './Item.component';

describe('Item.component: behavior', () => {
  it('click event invokes onItemSelect handler', () => {
    const testid = 'unit-test-item';
    const model: IItem = {
      id: 1,
      name: 'Unit test item 1',
      selected: false
    };

    const onItemSelect = vitest.fn();
    const { container } = render(
      <Item testid={testid} model={model} onItemSelect={onItemSelect} />
    );
    const liElement = container.firstChild as HTMLElement;
    fireEvent.click(liElement);
    expect(onItemSelect).toHaveBeenCalledTimes(1);
  });
});
