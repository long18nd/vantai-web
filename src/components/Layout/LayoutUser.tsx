import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer.tsx";
import Header from "./header/Header.tsx";
import ConsultationBox from "./consultation_box/ConsultationBox.tsx";

const LayoutUser = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ConsultationBox />
      <Footer />
    </div>
  );
};

export default LayoutUser;
