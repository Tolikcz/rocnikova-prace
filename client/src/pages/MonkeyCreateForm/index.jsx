import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createMonkey } from "../../models/monkeys";

export default function MonkeyCreateForm() {
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const data = await createMonkey(formData);
    if (data.status === 201) return navigate("/");
  };

  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  }

  return (
    <>
        <form>
            <input type="text" name="name" placeholder="Enter name" onChange={handleInput}/>
            <input type="text" name="race" placeholder="Enter race" onChange={handleInput}/>
            <input type="text" name="gender" placeholder="Enter gender" onChange={handleInput}/>
            <button onClick={handlePost}>
                Create
            </button>
        </form>
        <Link to={"/"}>
            <button>Go back</button>
        </Link>
    </>
  )
}
