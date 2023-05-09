import "./Block.scss";

function Block({ children, withPadding, twoCols, special }) {
  return (
    <div
      className={`block ${withPadding && "withPadding"} ${
        twoCols && "twoCols"
      } ${special && "special"}`}
    >
      {children}
    </div>
  );
}

export default Block;
