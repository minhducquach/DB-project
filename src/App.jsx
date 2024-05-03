import DataTable from "react-data-table-component";
import React, { useState, useEffect } from "react";
import Button from "./Button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal.jsx";
import UpdateForm from "./UpdateForm.jsx";

function App() {
  const [data, setData] = useState([
    {
      UserID: 1,
      FullName: "Nguyen Van A",
      Email: "nguyenvana@email.com",
      PhoneNumber: "0912345678",
      Gender: "M",
      YearOfBirth: 2000,
      Address: "123 Nguyen Van Cu, Quan 5",
      Street: "Nguyen Van Cu",
      City: "Ho Chi Minh",
      Province: "Ho Chi Minh",
      Age: 24,
    },
    {
      UserID: 2,
      FullName: "Tran Thi B",
      Email: "tranthib@email.com",
      PhoneNumber: "0987654321",
      Gender: "F",
      YearOfBirth: 2001,
      Address: "456 Tran Hung Dao, Quan 1",
      Street: "Tran Hung Dao",
      City: "Ho Chi Minh",
      Province: "Ho Chi Minh",
      Age: 23,
    },
    {
      UserID: 3,
      FullName: "Le Van C",
      Email: "levanc@email.com",
      PhoneNumber: "0912345679",
      Gender: "M",
      YearOfBirth: 2002,
      Address: "789 Pham Ngu Lao, Quan 1",
      Street: "Pham Ngu Lao",
      City: "Ho Chi Minh",
      Province: "Ho Chi Minh",
      Age: 22,
    },
    {
      UserID: 4,
      FullName: "Tran Minh D",
      Email: "tranminhd@email.com",
      PhoneNumber: "0987654322",
      Gender: "M",
      YearOfBirth: 1990,
      Address: "456 Le Duan, Quan 1",
      Street: "Le Duan",
      City: "Ho Chi Minh",
      Province: "Ho Chi Minh",
      Age: 34,
    },
    {
      UserID: 9,
      FullName: "Nguyen Thi K",
      Email: "nguyenthik@email.com",
      PhoneNumber: "0987654325",
      Gender: "F",
      YearOfBirth: 2004,
      Address: "789 Tran Hung Dao, Quan 5",
      Street: "Tran Hung Dao",
      City: "Ho Chi Minh",
      Province: "Ho Chi Minh",
      Age: 20,
    },
    {
      UserID: 10,
      FullName: "Tran Van L",
      Email: "tranvanl@email.com",
      PhoneNumber: "0901234570",
      Gender: "M",
      YearOfBirth: 1988,
      Address: "456 Nguyen Trai, Quan 1",
      Street: "Nguyen Trai",
      City: "Ho Chi Minh",
      Province: "Ho Chi Minh",
      Age: 36,
    },
    {
      UserID: 11,
      FullName: "Nguyen Thi M",
      Email: "nguyenthim@email.com",
      PhoneNumber: "0901234571",
      Gender: "F",
      YearOfBirth: 1993,
      Address: "789 Tran Binh Trong, Quan 5",
      Street: "Tran Binh Trong",
      City: "Ho Chi Minh",
      Province: "Ho Chi Minh",
      Age: 31,
    },
    {
      UserID: 12,
      FullName: "Tran Van N",
      Email: "tranvann@email.com",
      PhoneNumber: "0987654326",
      Gender: "M",
      YearOfBirth: 2003,
      Address: "456 Nguyen Hue, Quan 1",
      Street: "Nguyen Hue",
      City: "Ho Chi Minh",
      Province: "Ho Chi Minh",
      Age: 21,
    },
    {
      UserID: 13,
      FullName: "Le Thi O",
      Email: "lethio@email.com",
      PhoneNumber: "0901234572",
      Gender: "F",
      YearOfBirth: 1995,
      Address: "789 Nguyen Du, Quan 1",
      Street: "Nguyen Du",
      City: "Ho Chi Minh",
      Province: "Ho Chi Minh",
      Age: 29,
    },
  ]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

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

  const handleUpdateModalClose = () => {
    setShowUpdateModal(false);
  };

  const handleDeleteModeChange = (deleteMode) => {
    // console.log("DELETE CLICKED");
    setIsDeleteMode(deleteMode);
    setSelectedRows([]);
  };

  const handleUpdateModeChange = (updateMode) => {
    console.log("UPDATE CLICKED");
    setIsUpdateMode(updateMode);
    setSelectedRows([]);
  };

  const handleDeleteClick = () => {
    const selectedRowIds = selectedRows.map((row) => row.id);
    setData((prevData) =>
      prevData.filter((item) => !selectedRowIds.includes(item.id))
    );
    setSelectedRows([]);
  };

  const handleUpdateClick = () => {
    setShowUpdateModal(true);
  };

  const columns = [
    {
      name: "UserID",
      selector: (row) => row.UserID,
    },
    {
      name: "FullName",
      selector: (row) => <div title={row.FullName}>{row.FullName}</div>,
    },
    {
      name: "Email",
      selector: (row) => <div title={row.Email}>{row.Email}</div>,
    },
    {
      name: "PhoneNumber",
      selector: (row) => <div title={row.PhoneNumber}>{row.PhoneNumber}</div>,
    },
    {
      name: "Gender",
      selector: (row) => <div title={row.Gender}>{row.Gender}</div>,
    },
    {
      name: "YearOfBirth",
      selector: (row) => <div title={row.YearOfBirth}>{row.YearOfBirth}</div>,
    },
    {
      name: "Address",
      selector: (row) => <div title={row.Address}>{row.Address}</div>,
    },
    {
      name: "Street",
      selector: (row) => <div title={row.Street}>{row.Street}</div>,
    },
    {
      name: "City",
      selector: (row) => <div title={row.City}>{row.City}</div>,
    },
    {
      name: "Province",
      selector: (row) => <div title={row.Province}>{row.Province}</div>,
    },
    {
      name: "Age",
      selector: (row) => <div title={row.Age}>{row.Age}</div>,
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
                checked={selectedRows.includes(row) ? true : false}
                onChange={(e) => handleRowClick(row, e)}
              />
            ),
            ignoreRowClick: true,
            button: "true",
            width: "50px",
          },
        ]
      : isUpdateMode
      ? [
          {
            name: <FontAwesomeIcon icon={faEdit} onClick={handleUpdateClick} />,
            cell: (row) => (
              <input
                type="checkbox"
                className="checkbox"
                disabled={
                  isUpdateMode &&
                  selectedRows.length > 0 &&
                  !selectedRows.includes(row)
                }
                checked={selectedRows.includes(row) ? true : false}
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
      <Button
        onDeleteModeChange={handleDeleteModeChange}
        onUpdateModeChange={handleUpdateModeChange}
      />
      <DataTable
        columns={columns}
        data={data}
        onRowClicked={handleRowClick}
        pointerOnHover
        highlightOnHover
      />
      <Modal show={showUpdateModal} onClose={handleUpdateModalClose}>
        <UpdateForm selectedRow={selectedRows[0]} />
      </Modal>
    </div>
  );
}

export default App;
