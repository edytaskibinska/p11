import { Diaporama, Dropdown, Block } from "../../components";
import useFetch from "../../hooks/useFetchAsync";

import mountain from "../../assets/images/backgroundMountains.png";

function About() {
  const currentData = useFetch("./data.json");
  const { data } = currentData;
  // console.log("data", data)

  const tempDesc = data[0]?.description;

  return (
    <article className="about">
      <Diaporama imgUrl={mountain} alt="mountain" />
      <Block withPadding >
        <Dropdown dropTitle="Respect" dropContent={tempDesc} />
      </Block>
    </article>
  );
}

export default About;
