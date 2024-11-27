import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import GayPage from "./pages/GayPage";
import Login from "./component/Auth/Login";
import SignUp from "./component/Auth/SignUp";
import ForgetPassword from "./component/Auth/ForgetPassword";
import Esports from "./pages/Esports";
import Navbar from "./component/ui/Navbar";
import Footer from "./component/ui/Footer";
import TransPage from "./pages/TransPage";
import EscortsDetail from "./component/EscortsDetail/EscortsDetail";
// import { lazy } from "react";
// import BlogDetail from "./component/Blog/BlobsDetails/BlogDetail";
import Faq from "./pages/Faq";
import ContactUs from "./component/ContactUs/ContactUs";
import CompleteProfileForm from "./pages/CompleteProfileForm";
import TermsAndCondition from "./pages/TermsAndCondition";
import Pricing from "./pages/Pricing";
import LogoutModal from "./component/Modal/LogoutModal";
import LogoutPopup from "./component/Modal/LogoutPopup";
import Aboutus from "./component/AboutUs/Aboutus";
import NewPassword from "./component/Modal/NewPassword";
import Success from "./component/Modal/Success";
import Adult from "./component/Modal/Adult";
import Verification from "./component/Modal/Verification";
import Sidebar from "./component/Dashboard/Sidebar";
import Dashboard from "./component/Dashboard/Dashboard";
import Dashboardnavbar from "./component/Dashboard/Dashboardnavbar";
import Drp from "./pages/drp";
import ChangePassword from "./component/Dashboard/DashboardMenu/ChangePassword";

// const Blobs = lazy(() => import("./component/Blog/Blogs"));

const App = () => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem("token");
  const authPages = ["/signin", "/signup", "/forget_pass"];
  const isDeshboard = ["/dashboard"];
  const isAuthPage = authPages.includes(location.pathname);
  const isDashboardPage = isDeshboard.includes(location.pathname);
  console.log("isDashboardPage,,", isDashboardPage);

  return (
    <div>
      
      {!isAuthPage && isDeshboard && !isAuthenticated ? (
        <Dashboardnavbar />
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget_pass" element={<ForgetPassword />} />
        <Route path="/change-pass" element={<ChangePassword />} />
        <Route
          path="/escorts"
          element={isAuthenticated ? <Esports /> : <Navigate to="/signin" />}
        />
        <Route
          path="/drp"
          element={ <Drp />}
        />
        
        <Route
          path="/gay"
          element={isAuthenticated ? <GayPage /> : <Navigate to="/signin" />}
        />
        <Route
          path="/trans"
          element={isAuthenticated ? <TransPage /> : <Navigate to="/signin" />}
        />
        <Route
          path="/escort_detail"
          element={
            isAuthenticated ? <EscortsDetail /> : <Navigate to="/signin" />
          }
        />
        {/* <Route
          path="/blog"
          element={isAuthenticated ? <Blobs /> : <Navigate to="/signin" />}
        />
        <Route
          path="/blogs-details/:id"
          element={isAuthenticated ? <BlogDetail /> : <Navigate to="/signin" />}
        /> */}
        <Route
          path="/faq"
          element={isAuthenticated ? <Faq /> : <Navigate to="/signin" />}
        />
        <Route
          path="/contact-us"
          element={isAuthenticated ? <ContactUs /> : <Navigate to="/signin" />}
        />
        <Route
          path="/complete-profile"
          element={
            isAuthenticated ? (
              <CompleteProfileForm />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/terms-condition"
          element={
            isAuthenticated ? <TermsAndCondition /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/pricing"
          element={isAuthenticated ? <Pricing /> : <Navigate to="/signin" />}
        />
        <Route
          path="/logout-modal"
          element={
            isAuthenticated ? <LogoutModal /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/logout-popup"
          element={
            isAuthenticated ? <LogoutPopup /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/aboutUs"
          element={isAuthenticated ? <Aboutus /> : <Navigate to="/signin" />}
        />

        <Route
          path="/new-passowrd"
          element={
            isAuthenticated ? <NewPassword /> : <Navigate to="/signin" />
          }
        />

        <Route
          path="/success"
          element={isAuthenticated ? <Success /> : <Navigate to="/signin" />}
        />

        <Route
          path="/adult-alert"
          element={isAuthenticated ? <Adult /> : <Navigate to="/signin" />}
        />

        <Route
          path="/verification"
          element={
            isAuthenticated ? <Verification /> : <Navigate to="/signin" />
          }
        />

        <Route
          path="/sidebar"
          element={isAuthenticated ? <Sidebar /> : <Navigate to="/signin" />}
        />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>

      {!isAuthPage && isAuthenticated && <Footer />}
    </div>
  );
};

export default App;
