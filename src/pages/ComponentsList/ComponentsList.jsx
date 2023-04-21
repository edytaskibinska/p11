import { Tag, Thumb, Dropdown } from "../../components";
import useFetch from "../../hooks/useFetchAsync";

function ComponentsList({}) {
  const currentData = useFetch("./data.json");
  const { data } = currentData;
  const tempList = data[0]?.equipments;
  const tempDesc = data[0]?.description;

  return (
    <div className="componentsList">
      <header className="App-header"></header>
      <section>
        <Tag>Tag example</Tag>
        <Thumb text="ygyzg" />
        <Dropdown
          dropTitle="Equipement"
          dropContent="lipsum"
          isList
          list={tempList}
        />
        <Dropdown dropTitle="Respect" dropContent={tempDesc} />
      </section>
    </div>
  );
}

export default ComponentsList;
