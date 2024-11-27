import SidePane from "../components/SidePane";
import MainPane from "../components/MainPane";
import UserInterfacePane from "../components/UserInterfacePane";

function Home() {
  return (
    <div className="page-container">
      <SidePane />
      <MainPane />
      <UserInterfacePane />
      <p>Woop woop!</p>
    </div>
  );
}

export default Home;
