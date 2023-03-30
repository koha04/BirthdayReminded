import { useState } from "react";
import { dataList } from "./data/dataList";
import { BirthRemind } from "./data/components/BirthRemind";
import { BtnField } from "./data/components/BtnField";
import "./App.css";

function App() {
  const [datas, setDatas] = useState(dataList);
  return (
    <div className="App">
      <BirthRemind datas={datas} setDatas={setDatas} />
      <BtnField datas={datas} setDatas={setDatas} />
    </div>
  );
}

export default App;
