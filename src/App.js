import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" />
        <Route path="/register"/>
      </Routes>
    </>
  )
}

export default App;