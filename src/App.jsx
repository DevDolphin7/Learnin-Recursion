import SidePane from "./components/SidePane"
import MainPane from "./components/MainPane"
import UserInterfacePane from "./components/UserInterfacePane"

function App() {
  return <div className="page-container">
  <SidePane/>
  <MainPane/>
  <UserInterfacePane/>
  </div>;
}

export default App;
