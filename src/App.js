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
  const {isAuthenticated,setIsAuthenticated,setUser,setMyCommunities} = useContext(Context);
  
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

  useEffect(() => {
    
    axios.get(`${baseUrl}/v1/community/my-community`,{
      withCredentials: true
    }).then(res => {
        setMyCommunities(res.data.data);
      })
        .catch(err => {
          console.error(err.response.data.errors);
    })
  }, [])

 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home/>:<Login/>}/> 
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create-community" element={isAuthenticated ? <CreateCommunity/> : <Login/>}/>
        <Route path="/all-communities" element={isAuthenticated ? <AllCommunities/> : <Login/>}/>
        <Route path="/jobs-alert" element={isAuthenticated ? <JobsAlert/> : <Login/>}/>
        <Route path="/hire-candidates" element={isAuthenticated ? <HireCandidates/> : <Login/>}/>
        <Route path="/hire-candidates-form" element={isAuthenticated ? <HireCandidatesForm/> : <Login/>}/>
        <Route path="/select-communities" element={isAuthenticated ? <SelectCommunities/> : <Login/>}/>
        <Route path="/hire-candidate-jobs" element={isAuthenticated ? <HireCandidateJobs/> : <Login/>}/>
        <Route path="/view-candidates" element={isAuthenticated ? <ViewCandidates/> : <Login/>}/>
        <Route path="/rise-communities" element={isAuthenticated ? <RiseCommunities/> : <Login/>}/>
        <Route path="/available-communities" element={isAuthenticated ? <AvailableCommunities/> : <Login/>}/>
      </Routes> 
      <Toaster/>
    </Router>
    </>
  );
}

export default App;
