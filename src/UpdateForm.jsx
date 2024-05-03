import React, { useState, useEffect } from "react";

const UpdateForm = (selectedRow) => {
  console.log("SELECTED ROW:", selectedRow.selectedRow.UserID);
  const [user, setUser] = useState({
    UserID: "",
    Gender: "",
    FullName: "",
    Email: "",
    Street: "",
    City: "",
    Province: "",
    PhoneNumber: "",
    YearOfBirth: "",
  });

  useEffect(() => {
    if (selectedRow.selectedRow) {
      setUser({
        UserID: selectedRow.selectedRow.UserId,
        Gender: selectedRow.selectedRow.Gender,
        FullName: selectedRow.selectedRow.FullName,
        Email: selectedRow.selectedRow.Email,
        Street: selectedRow.selectedRow.Street,
        City: selectedRow.selectedRow.City,
        Province: selectedRow.selectedRow.Province,
        PhoneNumber: selectedRow.selectedRow.PhoneNumber,
        YearOfBirth: selectedRow.selectedRow.YearOfBirth,
      });
    }
  }, [selectedRow]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Gender:
        <select name="Gender" value={user.Gender} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </label>
      <label>
        Full Name:
        <input
          type="text"
          name="FullName"
          value={user.FullName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={user.Email}
          onChange={handleChange}
        />
      </label>
      <label>
        Street:
        <input
          type="text"
          name="street"
          value={user.Street}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={user.City}
          onChange={handleChange}
        />
      </label>
      <label>
        Province:
        <input
          type="text"
          name="province"
          value={user.Province}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="phone_number"
          value={user.PhoneNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Year of Birth:
        <select
          name="YearOfBirth"
          value={user.YearOfBirth}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          {Array.from(
            { length: new Date().getFullYear() - 1899 },
            (_, i) => 1900 + i
          ).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default UpdateForm;
