import './App.css';
import Login from './components/Auth/Signup/Login';
import Signup from './components/Auth/Signup/Signup';
import Home from './components/Home/Home';
import CreateCommunity from './components/CreateCommunity/CreateCommunity';
import AllCommunities from './components/AllCommunities/AllCommunities';
import JobsAlert from './components/JobsAlert/JobsAlert';
import HireCandidates from './components/HireCandidates/HireCandidates';
import HireCandidatesForm from './components/HireCandidates/HireCandidatesForm';
import SelectCommunities from './components/SelectCommunities/SelectCommunities';
import HireCandidateJobs from './components/JobsAlert/HireCandidateJobs';
import ViewCandidates from './components/ViewCandidates/ViewCandidates';
import RiseCommunities from './components/RiseCommunities/RiseCommunities';
import AvailableCommunities from './components/AvailableCommunities/AvailableCommunities';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from 'react';
import Context from './store/AuthContext';
import axios from 'axios';
import { baseUrl } from '.';

function App() {
  const {setIsAuthenticated,setUser} = useContext(Context);
  
  useEffect(() => {
    axios.get(`${baseUrl}/v1/user/me`,{
      withCredentials: true
    }).then(res => {
        setUser(res.data.data);
        setIsAuthenticated(true) 
      })
        .catch(err => {
        setUser({});
        setIsAuthenticated(false);
    })
  },[]);

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/> {/* my communities */}
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create-community" element={<CreateCommunity/>}/>
        <Route path="/all-communities" element={<AllCommunities/>}/>
        <Route path="/jobs-alert" element={<JobsAlert/>}/>
        <Route path="/hire-candidates" element={<HireCandidates/>}/>
        <Route path="/hire-candidates-form" element={<HireCandidatesForm/>}/>
        <Route path="/select-communities" element={<SelectCommunities/>}/>
        <Route path="/hire-candidate-jobs" element={<HireCandidateJobs/>}/>
        <Route path="/view-candidates" element={<ViewCandidates/>}/>
        <Route path="/rise-communities" element={<RiseCommunities/>}/>
        <Route path="/available-communities" element={<AvailableCommunities/>}/>
      </Routes>
      <Toaster/>
    </Router>
    </>
  );
}

export default App;
