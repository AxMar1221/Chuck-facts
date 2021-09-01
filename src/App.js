import CardJokes from "./components/CardJokes";

function App() {

  return (
    <div className="jokes__container">
      <img
        src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
        alt="Chuck-icon"
      />

      <CardJokes />
    </div>
  );
}

export default App;
