import React from 'react';

type Props = {
  testid?: string;
  id?: string;
  tag: string;
  text: string;
  addCss?: string;
};

interface ComponentProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  as?: React.ElementType;
  id?: string;
  'data-testid': string;
}

const Component: React.FC<ComponentProps> = ({ as: Tag = 'p', ...rest }) => {
  return <Tag {...rest} />;
};

const Text = (props: Props) => {
  const { id, tag, text } = props;

  const testid = props.testid || 'testid-not-set';
  const addCss = (props.addCss || '').trim();

  const cssClass = (): string => {
    const cssClasses = ['p-1'];
    if ((addCss || '').trim().length > 0) {
      cssClasses.push(addCss.trim());
    }
    return cssClasses.join(' ').trim();
  };

  return (
    <Component as={tag as any} id={id} data-testid={testid} className={cssClass()}>
      {text}
    </Component>
  );
};

export default Text;
