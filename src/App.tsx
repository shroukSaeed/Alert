// import './App.css'
import { Ban, BellRing, CheckCheck, Info } from "lucide-react";
import Alert from "./components/ui/Alert";

function App() {
  return (
    <>
      <Alert
        type={"alert-danger"}
        icon={<Ban />}
        title={"Something Went Wrong"}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          ratione deserunt officia, aperiam nulla ipsa! Nulla culpa nostrum
          facere, enim tempore quos possimus temporibus soluta incidunt
          praesentium, iste nesciunt odit.
        </p>
      </Alert>
      <Alert
        type={"alert-info"}
        icon={<Info />}
        title={"Something Went Wrong"}
      />
      <Alert
        type={"alert-success"}
        icon={<CheckCheck />}
        title={"Something Went Wrong"}
      />
      <Alert
        type={"alert-warning"}
        icon={<BellRing />}
        title={"Something Went Wrong"}
      />
      {/* <Alert type={"alert-primary"} icon={<Ban />} title={"Something Went Wrong"} /> */}
    </>
  );
}

export default App;
