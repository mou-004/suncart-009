

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="">
        
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
