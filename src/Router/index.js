import {
    Route, Routes
} from "react-router-dom";
import { Home } from "../pages/Home";

  export const AppRouter = () => {
      return (
        <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      )
  }