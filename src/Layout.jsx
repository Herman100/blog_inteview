import { Outlet } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function AppLayout() {
  return (
    <>
      <Header className="header" />
      <Outlet className="outlet" />
      <Footer className="footer" />
    </>
  );
}

export default AppLayout;
