import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<p>Hi</p>}/>
      </Routes>
    </>
  )
}

export default App;