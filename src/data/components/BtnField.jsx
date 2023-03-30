import React from "react";

export const BtnField = ({ datas, setDatas }) => {
  const disabledStyle =
    datas.people.length === 0
      ? { opacity: 0.5, pointerEvents: "none" }
      : { opacity: 1, pointerEvents: "auto" };

  return (
    <div className="btn-field">
      {datas.expanded ? (
        <button
          className="btn"
          style={disabledStyle}
          onClick={() => {
            setDatas({ ...datas, itemCount: 4, expanded: false });
          }}
        >
          View Less
        </button>
      ) : (
        <button
          className="btn"
          style={disabledStyle}
          onClick={() => {
            setDatas({
              ...datas,
              itemCount: datas.people.length,
              expanded: true,
            });
          }}
        >
          View More
        </button>
      )}
      <button
        className="btn"
        style={disabledStyle}
        onClick={() => {
          setDatas({ ...datas, people: [] });
        }}
      >
        Clear All
      </button>
    </div>
  );
};
