import PageHeader from "./components/PageHeader";
import Featured from "./routes/Featured";

function App() {
  return (
    <>
      <PageHeader title="Featured" />
      <Featured ids="27992,28560,22221,142294" />
    </>
  );
}

export default App;
