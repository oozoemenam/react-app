import Text from '@/components/primitives/text/Text';
import Toggle from '@/components/primitives/toggles/Toggle';
import React from 'react';
import { IItem } from '../../../models/items/Item.interface';

type Props = {
  testid: string;
  model: IItem;
  isLast?: boolean;
  onItemSelect: (item: IItem) => void;
};

type State = {};

class Item extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state = {};

  get cssClass() {
    let css =
      'item flex items-center justify-between cursor-pointer border border-l -4 list-none rounded-sm px-3 py-3';
    if (this.props.model?.selected) {
      css += ' font-bold bg-pink-200 hover:bg-pink-100 selected';
    } else {
      css += ' text-gray-500 hover:bg-gray-100';
    }
    if (!this.props.isLast) {
      css += ' border-b-0';
    }
    return css.trim();
  }

  handleItemClick(item: IItem) {
    this.props.onItemSelect(item);
  }

  render() {
    const { model } = this.props;
    const testid = this.props.testid || 'not-set';

    return (
      <li
        data-testid={testid}
        className={this.cssClass}
        onClick={() => this.handleItemClick(model)}>
        <Text testid={`${testid}-text`} tag="div" text={model.name} />
        <Toggle testid={`${testid}-toggle`} checked={model.selected} />
      </li>
    );
  }
}

export default Item;
