import BirthFunc from "./BirthFunc";
import "./BirthRemind.css";

export default function BirthRemind({ datas, setDatas }) {
  return (
    <div className="wrapper">
      <h1>{datas.people.length} birthdays today</h1>
      <div className="container">
        {datas.people.slice(0, datas.itemCount).map((data) => (
          <div className="item" key={data.id}>
            <BirthFunc {...data} />
            <button
              className="btn-remove"
              onClick={() => {
                setDatas({
                  ...datas,
                  people: datas.people.filter(
                    (person) => person.id !== data.id
                  ),
                });
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
