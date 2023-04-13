import './App.css';
import {Tag, Thumb, Dropdown} from "../src/components"
import "./data/data.json"
import useFetch from './hooks/useFetch';

//temp

const listt = ['hello', 'world', 'welcome']

//end temp
function App() {
  //old 
  // const {data, loading, error} = useFetch("./data/data.json")
  // if(loading) return <div>LOADING ... </div>
  // if(error) console.log(error)
useFetch()
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section>

        <Tag>Tag example</Tag>
        <Thumb text="ygyzg"/>
        {/* <>  {console.log("data", data)}</> */}
        {/* <Dropdown dropTitle="Titile hjhz bqz nj" dropContent="lipsum" isList list={listt}/> */}
      </section>
      
    </div>
  );
}

export default App;
