type Props = {
  testid?: string;
  id: string;
  label: string;
  disabled?: boolean;
  addCss?: string;
  buttonType?: string;
  onClick: Function;
};

const Button = (props: Props) => {
  const { id, label, onClick } = props;
  const testid = props.testid || 'testid-not-set';
  const disabled = props.disabled || false;
  const buttonType = props.buttonType || 'primary';
  const addCss = (props.addCss || '').trim();

  const cssClass = (): string => {
    const result = [
      'font-bold py-1 px-2 inline-flex justify-center rounded-md borde r shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
    ];
    if (disabled) {
      result.push('bg-gray-500 text-gray-300 opacity-50 cursor-not-allowed');
    } else {
      result.push('bg-blue-500 text-white hover:bg-blue-400 focus:ring-blue-300');
    }
    if (addCss.length > 0) {
      result.push(addCss);
    }
    return result.join(' ').trim();
  };

  const handleClick = () => {
    if (!disabled) {
      onClick(id);
    }
  };

  return (
    <button
      type="button"
      aria-label={label}
      data-testid={testid}
      disabled={disabled}
      className={cssClass()}
      onClick={handleClick}>
      <span className="name">{label}</span>
    </button>
  );
};

export default Button;
