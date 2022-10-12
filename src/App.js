import logo from './logo.svg';
import './App.css';

function App() {
  console.log("Your Working Directory is ",window.location.pathname);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value
    const age = e.target[1].value
    const object = {age, name};

    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', 'http://mohamedattar/institute_management/app/controllers/user.php?method=add');
    xhr.onload = ()=>{
      if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText);
      }else console.log("Not exists")
    }
    xhr.send(JSON.stringify(object));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placholder='name' name='name'/>
      <input type='number' placholder='age' name='age'/>
      <button>Submit</button>
    </form>
  );
}

export default App;
