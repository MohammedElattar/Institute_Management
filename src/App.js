<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import { url } from "./config";

>>>>>>> 03811a2a3b089d8b52de05fd9cc3df4e2837cd0c
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const age = e.target[1].value;
    const object = { age, name };

    const xhr = new XMLHttpRequest();

    xhr.open("POST", `${url}app/controllers/user.php?method=add`);
    xhr.onload = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      } else console.log("Not exists");
    };
    xhr.send(JSON.stringify(object));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placholder="name" name="name" />
      <input type="number" placholder="age" name="age" />
      <button>Submit</button>
    </form>
  );
}

export default App;
