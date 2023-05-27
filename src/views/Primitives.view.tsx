import Text from '@/components/primitives/text/Text';

type Props = {};

const PrimitivesView = (props: Props) => {
  return (
    <div className="primitives">
      <Text tag="h1" addCss="text-gray-500" text="Primitives" />
      <Text tag="h2" addCss="text-gray-500" text="Text examples:" />{' '}
      <div className="p-6 border">
        <Text tag="h2" addCss="text-red-500" text="This is a <h2> element" />
        <Text tag="p" addCss="text-red-700" text="This is a <p> element" />
      </div>
    </div>
  );
};

export default PrimitivesView;
