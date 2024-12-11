import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/AppBar";
import Sidebar from "./components/SideBar";
import PagenotFound from "./PagesComponents/NoPageFound";
import UserStatistics from "./PagesComponents/UserStatistics";
import Policies from "./PagesComponents/Policies";
import Devices from "./PagesComponents/Devices";
import Threats from "./PagesComponents/Threats";
import MerchantTerminals from "./PagesComponents/MerchantTerminals";
import MerchantServices from "./PagesComponents/MerchantServices";
import AddTerminal from "./PagesComponents/AddTerminal";
import EventSearch from "./PagesComponents/EventSearch";
import Logout from "./PagesComponents/Logout";
import Aboutus from "./PagesComponents/Aboutus";
import ManageMerchants from "./PagesComponents/ManageMerchants";
import ManageProcessors from "./PagesComponents/ManageProcessors";
import ManageBin from "./PagesComponents/ManageBin";
import ProcessorRules from "./PagesComponents/ProcessorRules";
import DeviceController from "./PagesComponents/DeviceController";
import {
  TransactionData,
  DeviceUserData,
  GeneralInfo,
  PasswordData,
  SecurityInfo,
} from "../src/components/DataWrapper";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchMerchantData } from "../src/reduxtoolkit/Slices/merchantdata";
import RecordsContainer from "./Containers/RecordsContainer";
import "./App.css";
import ManageBankDetails from "./PagesComponents/ManageBankDetails";
import Footer from "./components/Footer";
import LoginPage from "./PagesComponents/Login";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMerchantData("111118"));
  }, [dispatch]);

  return (
    <Router>
      <Box display="flex" flexDirection="column">
        <Header />
        <Box display="flex" flexGrow={1}>
          <Sidebar />
          <Box flexGrow={1} padding={1}>
            <Routes>
              <Route
                path="/"
                element={<RecordsContainer data={DeviceUserData()} />}
              />

              <Route
                path="/General"
                element={<RecordsContainer data={GeneralInfo()} />}
              />
              <Route
                path="/Password"
                element={<RecordsContainer data={PasswordData()} />}
              />
              <Route
                path="/Security"
                element={<RecordsContainer data={SecurityInfo()} />}
              />
              <Route
                path="/Transactions"
                element={<RecordsContainer data={TransactionData()} />}
              />
              <Route path="/user-statistics" element={<UserStatistics />} />
              <Route path="/event-search" element={<EventSearch />} />
              <Route path="/add-terminal" element={<AddTerminal />} />
              <Route path="/merchant-services" element={<MerchantServices />} />
              <Route
                path="/merchant-terminals"
                element={<MerchantTerminals />}
              />
              <Route path="/Threats" element={<Threats />} />
              <Route path="/Devices" element={<Devices />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/device-controller" element={<DeviceController />} />
              <Route path="/processor-rules" element={<ProcessorRules />} />
              <Route path="/manage-bin" element={<ManageBin />} />
              <Route path="/manage-merchants" element={<ManageMerchants />} />
              <Route
                path="/manage-bank-details"
                element={<ManageBankDetails />}
              />
              <Route path="/manage-processors" element={<ManageProcessors />} />
              <Route path="/about-us" element={<Aboutus />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<PagenotFound />} />
            </Routes>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Router>
  );
};

export default App;
