import { useState } from "react";

const WishObjectForm = () => {
  const [inputs, setInputs] = useState({
    username: String,
    age: Number,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" name="username" onChange={handleChange} />
      </label>
      <label>
        Enter your age:
        <input type="number" name="age" onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default WishObjectForm;
