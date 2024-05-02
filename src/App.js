import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Form from "./components/createBusiness/Form";
import MenuBar from "./components/menuBar/MenuBar";
import NotFound from "./components/NotFound";
import Register from "./components/register/Register";
import StepTwo from "./components/register/StepTwo";
import Home from "./components/Home";
import CashSystem from "./components/cashSystem/CashSystem";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import UnAuthorized from "./components/UnAuthorized";
import StepFour from "./components/createBusiness/StepFour";
import StepFive from "./components/createBusiness/StepFive";
import StepSix from "./components/createBusiness/StepSix";
import AllShiftOrders from "./components/cashSystem/AllShiftOrders";
import StepThree from "./components/createBusiness/StepThree";
import ManageItem from "./components/createBusiness/ManageItem";
function App() {
  return (
    <div className="App font-alexandria">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<UnAuthorized />} />
          <Route path="/menubar" element={<MenuBar />} />

          <Route element={<RequireAuth allowedRoles={[]} />}></Route>
          <Route path="/home" element={<Home />} />

          <Route element={<RequireAuth allowedRoles={[]} />}></Route>
          <Route path="/cash" element={<CashSystem />} />
          <Route path="/orders" element={<AllShiftOrders />} />

          <Route path="/createbusiness" element={<Form />} />
          <Route path="/steptwo" element={<StepTwo />} />
          <Route path="/stepthree" element={<StepThree />} />
          <Route path="/stepfour" element={<StepFour />} />
          <Route path="/stepfive" element={<StepFive />} />
          <Route path="/stepsix" element={<StepSix />} />
          <Route path="/manageitem" element={<ManageItem />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
