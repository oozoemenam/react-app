import Button from '@/components/primitives/buttons/Button';
import AlertIcon from '@/components/primitives/icons/AlertIcon';
import { useModal } from '@/components/primitives/modals/useModal';
import Text from '@/components/primitives/text/Text';
import Toggle from '@/components/primitives/toggles/Toggle';
import React from 'react';

const PrimitivesView = () => {
  const [state, setState] = React.useState({
    toggleItemState: [
      {
        id: 'toggle-a',
        checked: true
      },
      {
        id: 'toggle-b',
        checked: false
      },
      {
        id: 'toggle-c',
        checked: false
      }
    ]
  });

  const handleButtonClick = (args: any) => {
    console.log('onClick', args);
  };

  const handleToggleClick = (id: string) => {
    console.log(`You clicked the "${id}" toggle`);
    const stateItem = state.toggleItemState.find((item) => item.id === id);
    if (stateItem) {
      stateItem.checked = !stateItem.checked;
      setState({
        ...state
      });
    }
  };

  const handleDialogClick = async (id: string) => {
    if (id === 'open-modal-1') {
      const modal = useModal({
        cancelLabel: 'Cancel',
        confirmLabel: 'Ok',
        primaryButtonType: 'danger'
      });
      await modal.prompt('Do you want to delete this record?');
    } else if (id === 'open-modal-2') {
      const modal = useModal({
        cancelLabel: 'Cancel',
        confirmLabel: 'Confirm?',
        longDesc: 'This has a longer description and an icon',
        icon: AlertIcon,
        iconAddCss: 'text-red-600',
        primaryButtonType: 'danger'
      });
      await modal.prompt('Do you confirm this action?');
    }
  };

  return (
    <div className="primitives">
      <Text tag="h1" addCss="text-gray-500" text="Primitives" />
      <Text tag="h2" addCss="text-gray-500" text="Text examples:" />{' '}
      <div className="p-6 border">
        <Text tag="h2" addCss="text-red-500" text="This is a <h2> element" />
        <Text tag="p" addCss="text-red-700" text="This is a <p> element" />
      </div>
      <Text tag="h2" addCss="text-gray-500" text="ElButton examples:" />{' '}
      <div className="p-6 border">
        <Button
          id="my-button-1"
          disabled={false}
          label="This is a button"
          onClick={handleButtonClick}
        />
        <Button
          id="my-button-2"
          disabled={true}
          label="This is a disabled button"
          addCss="ml-2"
          onClick={handleButtonClick}
        />
      </div>
      <Text tag="h2" addCss="text-gray-500" text="ElToggle examples:" />{' '}
      <div className="p-6 border">
        <Toggle
          id="toggle-a"
          checked={state.toggleItemState.find((item) => item.id === 'toggle-a')?.checked}
          disabled={false}
          onClick={handleToggleClick}
        />
        <Toggle
          id="toggle-b"
          checked={state.toggleItemState.find((item) => item.id === 'toggle-b')?.checked}
          disabled={true}
          addCss="ml-2"
          onClick={handleToggleClick}
        />
        <Toggle
          id="toggle-c"
          checked={state.toggleItemState.find((item) => item.id === 'toggle-c')?.checked}
          disabled={false}
          addCss="ml-2"
          onClick={handleToggleClick}
        />
      </div>
      <div className="p-6 border">
        <Button
          id="my-button-1"
          disabled={false}
          label="This is a button"
          onClick={handleButtonClick}
        />
        <Button
          id="my-button-2"
          disabled={true}
          label="This is a disabled button"
          addCss="ml-2"
          onClick={handleButtonClick}
        />
        <Button
          id="open-modal-1"
          disabled={false}
          label="Open modal 1"
          addCss="ml-2"
          onClick={handleDialogClick}
        />
        <Button
          id="open-modal-2"
          disabled={false}
          label="Open modal 2"
          addCss="ml-2"
          onClick={handleDialogClick}
        />
      </div>
    </div>
  );
};

export default PrimitivesView;
