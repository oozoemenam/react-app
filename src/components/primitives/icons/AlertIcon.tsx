import { IconProps } from './IconProps.interface';

const AlertIcon = (props: IconProps) => {
  const testid = props.testid || 'testid-not-set';
  const addCss = (props.addCss || '').trim();

  const cssClass = (): string => {
    const result = ['h-6 w-6'];
    if ((addCss || '').trim().length) {
      result.push(addCss);
    }
    return result.join(' ').trim();
  };

  return (
    <svg
      data-testid={testid}
      className={cssClass()}
      xmlns="http://www.w3.org/2000/s\ vg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 9v2m\ 0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3\ .464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  );
};

export default AlertIcon;
