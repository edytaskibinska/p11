import "./Block.scss";

function Block({ children, withPadding, twoCols }) {
  return <div className={`block ${withPadding && "withPadding"} ${twoCols && "twoCols"}`}>{children}</div>;
}

export default Block;
