import { Route, Routes } from "react-router-dom";
import PortfolioList from "./components/PortfolioList";
import PortfolioPage from "./components/PortfolioPage";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="h-screen">
      <TopNav />
      <div className="flex h-full">
        <SideNav />
        <Content />
      </div>
    </div>
  );
}
function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/portList" element={<PortfolioList />} />
      </Routes>
    </div>
  )
}

export default App;
