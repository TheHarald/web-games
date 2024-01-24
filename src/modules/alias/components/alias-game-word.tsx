type TAliasWordProps = {
  word: string;
};
export const AliasWord = (props: TAliasWordProps) => {
  const { word } = props;
  return (
    <div className="w-64 h-64 bg-gray-500 rounded-full flex items-center justify-center">
      <h1 className="text-4xl font-bold">{word}</h1>
    </div>
  );
};
