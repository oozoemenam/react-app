import React from 'react';
import { Item as IItem } from '../../../models/items/Item.interface';

type Props = {
  testid: string;
  model: IItem;
  onItemSelect: (item: IItem) => void;
};

type State = {};

class Item extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state = {};

  get cssClass() {
    let css = 'item';
    if (this.props.model?.selected) {
      css += ' selected';
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
        <div className="selected-indicator">*</div>
        <div className="name">{model.name}</div>
      </li>
    );
  }
}

export default Item;
