import "./Block.scss";

function Block({ children, withPadding, twoCols, cols3to2, special }) {
  return (
    <div
      className={`block ${withPadding && "withPadding"} ${
        twoCols && "twoCols"
      } ${cols3to2 && "cols3to2"} ${special && "special"} `}
    >
      {children}
    </div>
  );
}

export default Block;
