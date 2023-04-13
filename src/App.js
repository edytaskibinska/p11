import "./App.css";
import { Tag, Thumb, Dropdown } from "../src/components";
import useFetch from "./hooks/useFetchAsync";
//import useFetch from "./hooks/useFetch";

//temp


//end temp
function App() {
  const currentData = useFetch("./data.json");
  const tempList = currentData?.data[0]?.equipments
  const tempDesc = currentData?.data[0]?.description
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>
        <Tag>Tag example</Tag>
        <Thumb text="ygyzg" />
        <>  {console.log("list", currentData?.data[0]?.description)}</>
        <Dropdown dropTitle="Equipement" dropContent="lipsum" isList list={tempList}/>
        <Dropdown dropTitle="Respect" dropContent={tempDesc}/>
        {!currentData.isLoaded && <div>LOADING ... </div>}
        
      </section>
    </div>
  );
}

export default App;
