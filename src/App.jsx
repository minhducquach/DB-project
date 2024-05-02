import DataTable from "react-data-table-component";
import React, { useState } from "react";
import Button from "./Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    point: "10",
    age: 36,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    point: "9",
    age: 40,
  },
];

function App() {
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const handleRowClick = (row) => {
    if (isDeleteMode) {
      setData(data.filter((item) => item.id !== row.id));
    }
  };

  const handleDeleteModeChange = (deleteMode) => {
    console.log("DELETE CLICKED");
    setIsDeleteMode(deleteMode);
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
    {
      name: "Point",
      selector: (row) => row.point,
    },
    {
      name: "Age",
      selector: (row) => row.age,
    },
    ...(isDeleteMode
      ? [
          {
            name: <FontAwesomeIcon icon={faTrash} />,
            cell: (row) => (
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => handleRowClick(row)}
              />
            ),
            width: "50px",
          },
        ]
      : []),
  ];

  return (
    <div>
      <Button onDeleteModeChange={handleDeleteModeChange} />
      <DataTable
        columns={columns}
        data={data}
        onRowClicked={handleRowClick}
        pointerOnHover
        highlightOnHover
      />
    </div>
  );
}

export default App;
