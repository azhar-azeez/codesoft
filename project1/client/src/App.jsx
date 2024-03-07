import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer, Navbar } from "./components";
import FindJobs from "./pages/FindJobs";
import Companies from "./pages/Companies.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import CompanyProfile from "./pages/CompanyProfile.jsx";
import UploadJob from "./pages/UploadJob.jsx";
import About from "./pages/About.jsx";
import AuthPage from "./pages/Auth.jsx";
import JobDetail from "./pages/JobDetail.jsx";

function Layout(){
  const user = true;
  const location = useLocation();

  return user? (
    <Outlet />
  ) : (
    <Navigate to='/user-auth' state={{ from: location }} replace />
  );
}

function App() {
  const user = {};
  return (
  <main className='bg-[#f7fdfd]'>
    <Navbar />
    
    <Routes>
      <Route element={<Layout />}>
        <Route
        path='/'
        element={<Navigate to='/find-jobs' replace={true} />}
        />

        {/* find job page, find job component */}
        <Route path='/find-jobs' element={<FindJobs />} />
        <Route path='/companies' element={<Companies />} />
        <Route
          path={
            user?.user?.accountType === "seeker"
              ? "/user-profile"
              : "/user-profile/:id"
          }
          element={<UserProfile />}
          />

          <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-jobs"} element={<UploadJob />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />} />
      </Route>

      <Route path={"/about-us"} element={<About />} />
      <Route path={"/user-auth"} element={<AuthPage />} />
    </Routes>
    {user && <Footer />}
  </main>
);
   
}

export default App;
