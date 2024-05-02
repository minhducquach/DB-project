import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    id: "",
    sex: "",
    name: "",
    email: "",
    address: {
      street: "",
      city: "",
      province: "",
    },
    phone_number: "",
    year_of_birth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission of the form
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Sex:
        <select name="sex" value={user.sex} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Street:
        <input
          type="text"
          name="street"
          value={user.address.street}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={user.address.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Province:
        <input
          type="text"
          name="province"
          value={user.address.province}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          name="phone_number"
          value={user.phone_number}
          onChange={handleChange}
        />
      </label>
      <label>
        Year of Birth:
        <input
          type="date"
          name="year_of_birth"
          value={user.year_of_birth}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
