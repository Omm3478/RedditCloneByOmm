import { BrowserRouter, Routes, Route } from "react-router-dom";


// PAGES
import Home from "./pages/Home";

import Signup from "./pages/Signup";

import Login from "./pages/Login";

import CreatePost from "./pages/CreatePost";

import PostPage from "./pages/PostPage";

import CreateCommunity from "./pages/CreateCommunity";

import Communities from "./pages/Communities";

import CommunityPage from "./pages/CommunityPage";
import Navbar from "./components/Navbar";


// COMPONENTS
import ProtectedRoute from "./components/ProtectedRoute";


function App(){

  return(

    <BrowserRouter>

  

  <Routes>

        
        {/* HOME */}
        <Route
          path="/"
          element={
            <ProtectedRoute>

              <Home />

            </ProtectedRoute>
          }
        />


        {/* SIGNUP */}
        <Route
          path="/signup"
          element={<Signup />}
        />


        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />


        {/* CREATE POST */}
        <Route
          path="/create-post"
          element={
            <ProtectedRoute>

              <CreatePost />

            </ProtectedRoute>
          }
        />


        {/* SINGLE POST */}
        <Route
          path="/post/:id"
          element={
            <ProtectedRoute>

              <PostPage />

            </ProtectedRoute>
          }
        />


        {/* CREATE COMMUNITY */}
        <Route
          path="/create-community"
          element={
            <ProtectedRoute>

              <CreateCommunity />

            </ProtectedRoute>
          }
        />


        {/* ALL COMMUNITIES */}
        <Route
          path="/communities"
          element={
            <ProtectedRoute>

              <Communities />

            </ProtectedRoute>
          }
        />


        {/* SINGLE COMMUNITY */}
        <Route
          path="/community/:id"
          element={
            <ProtectedRoute>

              <CommunityPage />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;