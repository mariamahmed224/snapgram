import AuthLayout from "./_Auth/AuthLayout";
import SigninForm from "./_Auth/forms/SigninForm";
import SignupForm from "./_Auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import {
  AllUsers,
  CreatePost,
  EditPost,
  Explore,
  Profile,
  Saved,
  UpdateProfile,
} from "./_root/pages";
import PostDetails from "./_root/pages/PostDetails";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
