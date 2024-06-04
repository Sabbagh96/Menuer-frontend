import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Form from "./components/createBusiness/Form";
import MenuBar from "./components/menuBar/MenuBar";
import NotFound from "./components/NotFound";
import Register from "./components/register/Register";
import StepTwo from "./components/register/StepTwo";
import Home from "./components/home/Home";
import CashSystem from "./components/cashSystem/CashSystem";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import UnAuthorized from "./components/UnAuthorized";
import StepFour from "./components/createBusiness/StepFour";
import StepFive from "./components/createBusiness/StepFive";
import StepSix from "./components/createBusiness/StepSix";
import AllShiftOrders from "./components/cashSystem/AllShiftOrders";
import StepThree from "./components/createBusiness/StepThree";
import BussinessManager from "./components/businessManager/BussinessManager";
import QrDesign from "./components/businessManager/QrCode/QrDesign";
import ActiveMembers from "./components/businessManager/Stuff/ActiveMembers";
import AddNew from "./components/businessManager/Stuff/AddNew";
import BusinessDetails from "./components/businessManager/GeneralDetails/BusinessDetails";
import ContactDetails from "./components/businessManager/GeneralDetails/ContactDetails";
import AddItem from "./components/createBusiness/AddItem";
import NoBuisness from "./components/NoBuisness";
import AllSections from "./components/menuManager/AllSections";
import SectionDetails from "./components/menuManager/SectionDetails";
import ProductList from "./components/cashSystem/ProductList";
import StartNewShift from "./components/cashSystem/start-new-shift/StartNewShift";
import ReceiptDetails from "./components/cashSystem/ReceiptDetail";
function App() {
  return (
    <div className="App font-alexandria w-full h-screen overflow-auto">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/menubar" element={<MenuBar />} />

          <Route
            element={<RequireAuth allowedRoles={["owner", "stuff"]} />}
          ></Route>
          <Route path="/home" element={<Home />} />

          <Route
            element={<RequireAuth allowedRoles={["owner", "stuff"]} />}
          ></Route>
          <Route path="/startnewshift" element={<StartNewShift />} />
          <Route path="/cash" element={<CashSystem />} />
          <Route path="/orders" element={<AllShiftOrders />} />
          <Route path="/receiptdetails" element={<ReceiptDetails />} />
          <Route path="/productlist" element={<ProductList />} />

          <Route element={<RequireAuth allowedRoles={["owner", "stuff"]} />}>
            <Route path="/businessmanager" element={<BussinessManager />} />
            <Route path="/activemembers" element={<ActiveMembers />} />
            <Route path="/businessdetails" element={<BusinessDetails />} />
            <Route path="/contactdetails" element={<ContactDetails />} />
            <Route path="/qrdesign" element={<QrDesign />} />
            <Route path="/addnew" element={<AddNew />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["owner", "stuff"]} />}>
            <Route path="/createbusiness" element={<Form />} />
            <Route path="/steptwo" element={<StepTwo />} />
            <Route path="/stepthree" element={<StepThree />} />
            <Route path="/stepfour" element={<StepFour />} />
            <Route path="/stepfive" element={<StepFive />} />
            <Route path="/stepsix" element={<StepSix />} />
            <Route path="/allsections" element={<AllSections />} />
            <Route path="/sectiondetails" element={<SectionDetails />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>

          <Route path="/unauthorized" element={<UnAuthorized />} />
          <Route path="/nobusiness" element={<NoBuisness />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
