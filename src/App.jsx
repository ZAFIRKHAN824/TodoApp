import { useState } from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import Front from "./components/front";
import Showlist from "./components/show-list";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [notes, setnotes] = useState("");
  const [noteArray, setnotesArray] = useState([]);
  const [id, setid] = useState(0);

  function save() {
    setnotesArray((prev) => {
      return [...prev, { id: id, note: notes }];
    });

    setnotes("");
  }

  function onDelete(i) {
    const arr = noteArray.filter((value, index) => {
      if (index === i) return false;
      else {
        return true;
      }
    });
    setnotesArray(arr);
  }
  function onEditSave(i, value) {
    noteArray[i].note = value;
    setnotesArray(noteArray);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {/* <Front /> */}
          <div id="body">
            <input
              placeholder="Hello !"
              autofocus
              onChange={(e) => {
                setnotes(e.target.value);
              }}
              type="text"
              value={notes}
            />
            <button className="saveButt" disabled={notes === ""} onClick={save}>
              ++++
            </button>
            <Showlist
              notes={noteArray}
              onDelete={onDelete}
              onEditSave={onEditSave}
            />
          </div>
          ,
        </>
      ),
    },
  ]);

  return (
    <>
      <h1>To Do App</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
