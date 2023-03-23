import useRouteElements from "./useRouteElement";

function App() {
  const routeElement = useRouteElements();

  return <div>{routeElement}</div>;
}

export default App;
