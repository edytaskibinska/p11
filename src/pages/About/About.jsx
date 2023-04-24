import { Diaporama, Dropdown } from "../../components";
import useFetch from "../../hooks/useFetchAsync";

import mountain from "../../assets/images/backgroundMountains.png";

function About() {
  const currentData = useFetch("./data.json");
  const { data } = currentData;

  const tempDesc = data[0]?.description;

  return (
    <article className="about">
      <Diaporama imgUrl={mountain} alt="mountain" />
      <Dropdown dropTitle="Respect" dropContent={tempDesc} />
    </article>
  );
}

export default About;
