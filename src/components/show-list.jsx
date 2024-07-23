import { useEffect, React, useState } from "react";
import "./show-list.css";

export default function Showlist({ notes, onDelete, onEditSave }) {
  const [editMode, setEditMode] = useState(-1);
  console.log("value", { notes });
  const [editedValue, setEditedValue] = useState("");

  function dlete(i) {
    onDelete(i);
  }
  function editSave(i) {
    setEditMode(-1);
    onEditSave(i, editedValue);
  }

  return (
    <div id="listBody">
      {notes.map((value, i) => (
        <div key={i} className="todorow">
          <span id="values">
            {editMode === i ? (
              <input
                onChange={(e) => {
                  setEditedValue(e.target.value);
                }}
                value={editedValue}
              />
            ) : (
              <div className="singlenote">{value.note}</div>
            )}
          </span>
          <span>
            {editMode === i ? (
              <button
                onClick={() => {
                  editSave(i);
                }}
              >
                Save
              </button>
            ) : (
              <button
                className="butt"
                id="butt"
                onClick={() => {
                  setEditMode(i);
                  setEditedValue(value.note);
                }}
              >
                Edit
              </button>
            )}
            <button
              className="butt"
              onClick={() => {
                dlete(i);
              }}
            >
              Delete
            </button>
          </span>
        </div>
      ))}
      <div></div>
    </div>
  );
}
