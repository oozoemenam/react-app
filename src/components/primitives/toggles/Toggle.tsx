type Props = {
  testid?: string;
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  addCss?: string;
  onClick?: Function;
};

const Toggle = (props: Props) => {
  const { id, onClick } = props;
  const testid = props.testid || 'testid-not-set';
  const disabled = props.disabled || false;
  const checked = props.checked || false;
  const addCss = (props.addCss || '').trim();

  const cssClass = (): string => {
    const result = [
      'relative inline-flex flex-shrink-0 h-6 w-12 border-1 rounded-fu ll cursor-pointer transition-colors duration-200 focus:outline-none'
    ];
    if (checked) {
      result.push('bg-gray-400');
    } else {
      result.push('bg-blue-300');
    }
    if (disabled) {
      result.push('opacity-40 cursor-not-allowed');
    }
    if (addCss.length) {
      result.push(addCss.trim());
    }
    return result.join(' ').trim();
  };

  const innerCssClass = (): string => {
    const result = [
      'bg-white shadow pointer-events-none inline-block h-6 w-6 rounde d-full transform ring-0 transition duration-200'
    ];
    if (checked) {
      result.push('translate-x-6');
    } else {
      result.push('translate-x-0');
    }
    return result.join(' ').trim();
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(id);
    }
  };

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      data-testid={testid}
      disabled={disabled}
      className={cssClass()}
      onClick={handleClick}>
      <span className={innerCssClass()}></span>
    </button>
  );
};

export default Toggle;
