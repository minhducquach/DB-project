import DataTable from "react-data-table-component";
import React, { useState, useEffect } from "react";
import Button from "./Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [data, setData] = useState([
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
      id: 3,
      title: "Ghostbusters",
      year: "1984",
      point: "9",
      age: 40,
    },
    {
      id: 4,
      title: "Ghostbusters",
      year: "1984",
      point: "9",
      age: 40,
    },
    {
      id: 5,
      title: "Ghostbusters",
      year: "1984",
      point: "9",
      age: 40,
    },
    {
      id: 6,
      title: "Ghostbusters",
      year: "1984",
      point: "9",
      age: 40,
    },
    {
      id: 7,
      title: "Ghostbusters",
      year: "1984",
      point: "9",
      age: 40,
    },
    {
      id: 8,
      title: "Ghostbusters",
      year: "1984",
      point: "9",
      age: 40,
    },
    {
      id: 9,
      title: "Ghostbusters",
      year: "1984",
      point: "9",
      age: 40,
    },
    {
      id: 10,
      title: "Ghostbusters",
      year: "1984",
      point: "9",
      age: 40,
    },
  ]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    console.log("SELECTED:", selectedRows);
  }, [selectedRows]);

  const handleRowClick = (row, event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedRows([...selectedRows, row]);
    } else {
      setSelectedRows(selectedRows.filter((item) => item !== row));
    }
  };

  const handleDeleteModeChange = (deleteMode) => {
    console.log("DELETE CLICKED");
    setIsDeleteMode(deleteMode);
    setSelectedRows([]);
  };

  const handleDeleteClick = () => {
    const selectedRowIds = selectedRows.map((row) => row.id);
    setData((prevData) =>
      prevData.filter((item) => !selectedRowIds.includes(item.id))
    );
    setSelectedRows([]);
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
            name: (
              <FontAwesomeIcon icon={faTrash} onClick={handleDeleteClick} />
            ),
            cell: (row) => (
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => handleRowClick(row, e)}
              />
            ),
            ignoreRowClick: true,
            button: "true",
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
