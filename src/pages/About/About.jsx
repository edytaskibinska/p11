import { Diaporama, Dropdown, Block } from "../../components";
import useFetch from "../../hooks/useFetchAsync";

import mountain from "../../assets/images/backgroundMountains.png";

function About() {
  const currentData = useFetch("./about.json");
  const { data } = currentData;

  return (
    <article className="about">
      <Diaporama imgUrl={mountain} alt="mountain" />
      <Block withPadding>
        {data.map((item, index) => {
          return (
            <Dropdown
              key={index}
              dropTitle={item.title}
              dropContent={item.content}
            />
          );
        })}
      </Block>
    </article>
  );
}

export default About;
