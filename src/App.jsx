import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Video from "./pages/Video";
import AddVideo from "./pages/AddVideo";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/addvideo" element={<AddVideo />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="/video" element={<Video />} />
    </Routes>
  );
}

export default App;
