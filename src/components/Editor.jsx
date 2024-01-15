/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import '../styles/Editor.css';
import { useState } from 'react';

function Input({ label, type, id, handleOnChange }) {
  return (
    <label htmlFor={id}>
      {label}:
      <input id={id} type={type} onChange={handleOnChange} />
    </label>
  );
}

function Editor() {
  const [isHeaderSubmitted, setIsHeaderSubmitted] = useState(false);
  const [headerInput, setHeaderInput] = useState({
    name: '',
    phone: '',
    pro: '',
    address: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    setIsHeaderSubmitted(true);
  }

  function handleOnChange(event) {
    const { id, value } = event.target;
    setHeaderInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  return (
    <div className='Editor'>
      {!isHeaderSubmitted ? (
        <header className='forms'>
          <Input label='Name' type='text' id='name' handleOnChange={handleOnChange} />
          <Input label='Phone' type='tel' id='phone' handleOnChange={handleOnChange} />
          <Input label='Profession' type='text' id='pro' handleOnChange={handleOnChange} />
          <Input label='Address' type='text' id='address' handleOnChange={handleOnChange} />
          <Input label='Email' type='email' id='email' handleOnChange={handleOnChange} />
          <button type='button' onClick={handleSubmit}>
            Submit
          </button>
        </header>
      ) : (
        <header className='display'>
          <div>
            <p>{headerInput.name}</p>
            <p>{headerInput.pro}</p>
          </div>
          <div>
            <p>Tel: {headerInput.phone}</p>
            <p>Email: {headerInput.email}</p>
            <p>Address: {headerInput.address}</p>
          </div>
        </header>
      )}
    </div>
  );
}

export default Editor;
