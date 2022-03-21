import "./App.css";
import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
  return (
    <div>
      <Topbar />

      <div className="container">
        <Sidebar />
        <div className="others">otherpages</div>
      </div>
    </div>
  );
}

export default App;
