import { Route, Routes } from "react-router-dom";
import CommonLayout from "./components/CommonLayout";
import EmployeesActivity from "./components/EmployeesActivity";
import EmployeesList from "./components/EmployeesList";
import Signin from "./components/Signin";
import Calendar from "./pages/Calendar.jsx";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import InfoPortal from "./pages/InfoPortal";
import Leads from "./pages/Leads.jsx";
import Messenger from "./pages/Messenger.jsx";
import Profile from "./pages/Profile";
import Vacations from "./pages/Vacations";
import SignUpMain from "./SignUpMain.jsx"; // Adjust path based on your file structure

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<SignUpMain />} />
      <Route element={<CommonLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />

        <Route path="/calendar" element={<Calendar />} />
        <Route path="/vacations" element={<Vacations />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employeeslist" element={<EmployeesList />} />
        <Route path="/employeesactivity" element={<EmployeesActivity />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/info-portal" element={<InfoPortal />} />
      </Route>
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default App;
