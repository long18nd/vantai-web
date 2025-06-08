import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ConsultationBox from "./Footer/ConsultationBox ";

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
