import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import Loading from "../Components/Loading";
import Home from "../Pages/Home/Home";
import MyProfile from "../Pages/MyProfile/MyProfile";
import PrivateRoute from "../Private/PrivateRoute";
import Login from "../Pages/Login/Login";
import SignUp from '../Pages/SignUp/SignUp'
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import SkillDetailPage from "../Pages/SkillDetailPage/SkillDetailPage";
const MainLayout = lazy(() => import("../Layout/MainLayout"))
const router = createBrowserRouter([
   {
      path: '/',
      element: <Suspense fallback={<Loading />}>
         <MainLayout></MainLayout>
      </Suspense>,
      children: [
         {
            index: true,
            Component: Home
         },
         {
            path: '/profile',
            element: <PrivateRoute>
               <MyProfile></MyProfile>
            </PrivateRoute>
         }, {
            path: '/login', element: <Login></Login>

         },
         {
            path: '/signUp', element: <SignUp></SignUp>


         }, {
            path: '/forgetPassword', element:<ForgetPassword></ForgetPassword>
   

         }, {
            path: '/skillDetailsPage/:id',
            loader: () => fetch('/fake_data.json'),
            element: <PrivateRoute>
               < SkillDetailPage ></ SkillDetailPage>
            </PrivateRoute>
         }
      ],

   },



])

export default router