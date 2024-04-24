import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"

const App = () => {
  return (
    <div className="bg-[#1f1e24] flex w-full h-screen">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App