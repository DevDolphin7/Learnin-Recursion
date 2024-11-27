import SidePane from "../components/SidePane";
import MainPane from "../components/MainPane";
import UserInterfacePane from "../components/UserInterfacePane";

function Kata() {
  return (
    <div className="page-container">
      <SidePane />
      <MainPane />
      <UserInterfacePane />
      <p>Hurray hurray!</p>
    </div>
  );
}

export default Kata;
