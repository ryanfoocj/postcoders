import CardRender from "./CardRender";

const AreaDisplay = ({ results }) => {
  return (
    <div>
      {results.map((item) => {
        return CardRender(item);
      })}
    </div>
  );
};

export default AreaDisplay;
