import { Route, Routes } from "react-router-dom";
import DashboardPage from "./insurtech/pages/dashboardPage/DashboarPage";
import NotFoundPage from "./insurtech/pages/not-found/NotFoundPage";
import ScrollToTop from "./insurtech/components/ScrollToTop";
import InsurancePage from "./insurtech/pages/Insurance/InsurancePage";
import DashBoardLayout from "./insurtech/layout/DashBoard/DashBoardLayout";

// import HeaderInsurtech from "./insurtech/components/HeaderInsurtech";
// import Footer from "./insurtech/components/Footer";

function App() {
  // const location = useLocation();
  // const showHeaderFooter = location.pathname !== "/payment";
  return (
    <div className="max-w-[1920px] m-auto my-0">
      <ScrollToTop />
      {/* {showHeaderFooter && <HeaderInsurtech />} */}
      <Routes>
        <Route path="/" element={<DashBoardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="seguros" element={<InsurancePage />} />
          {/* <Route path="favoritos" element={<Favoritoss />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="lista-clientes" element={<ListaClientes />} />
          <Route path="polizas" element={<Polizas />} /> */}
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* {showHeaderFooter && <Footer />} */}
    </div>
  );
}

export default App;
