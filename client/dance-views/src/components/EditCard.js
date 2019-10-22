import React, { useState } from 'react';

export default function EditCard({ date, description, handleFlip }) {
  const [formData, setFormData] = useState({
    date: date,
    description: description
  });

  const handleOnChange = e => {
    const element = e.target;
    const { name, value } = element;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    console.log(formData);
  };

  const handleOnSubmit = () => {
    handleFlip();
  };

  return (
    <div>
      <form>
        <label>
          Edit new card:
          <input
            type="text"
            name="date"
            placeholder={date}
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="description"
            placeholder={description}
            onChange={handleOnChange}
          />
        </label>
        <input type="submit" value="Submit" onClick={handleOnSubmit} />
      </form>
    </div>
  );
}
