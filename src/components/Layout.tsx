import ConsultationBox from "./Footer/ConsultationBox ";
import Footer from "./Footer/Footer";
import Header from "./Header/Header"

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children} : LayoutProps) => {
  return (
    <div>
      <Header/>
      {children}
      <ConsultationBox/>
      <Footer/>
    </div>
  )
}

export default Layout
