import { Route, Routes } from "react-router-dom";
import { MySelf, Explore } from "../common";
const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MySelf />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
};

export default Router;
