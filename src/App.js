import './App.css';

function App() {
  const blogObj={
    title: 'Blog title 1',
    deacription: 'my name is suvojit'
  }

  return (

    <div className="App">

      <div style={
        {
          margin: '16px',
          padding: '16px',
          boxSizzing: 'boder-box',
          borderRadius:'5px',
          boxShadow: '0  2px 5px #ccc'
        }
      }>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.deacription}</p>
      </div>
      <hr></hr>
      <div className="external1">
        <h3>{blogObj.title}</h3>
        <p>{blogObj.deacription}</p>
      </div>
    </div>
  );
}

export default App;
