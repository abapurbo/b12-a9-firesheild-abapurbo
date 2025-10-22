import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import Loading from "../Components/Loading";
import Home from "../Pages/Home/Home";
import MyProfile from "../Pages/MyProfile/MyProfile";
import PrivateRoute from "../Private/PrivateRoute";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";

const MainLayout = lazy(() => import("../Layout/MainLayout"))
const ErrorPage = lazy(() => import("../Pages/Error/ErrorPage"))
const SignUp = lazy(() => import("../Pages/SignUp/SignUp"))
const Login = lazy(() => import("../Pages/Login/Login"))

const router = createBrowserRouter([
   {
      path: '/',
      element: <Suspense fallback={<Loading />}>
         <MainLayout></MainLayout>
      </Suspense>,
      errorElement: <Suspense>
         <ErrorPage></ErrorPage>
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
         }
      ],

   },
   {
      path: '/login', element: <Suspense fallback={<Loading />}>
         <Login></Login>
      </Suspense>,
   },
   {
      path: '/signUp', element: <Suspense fallback={<Loading />}>
         <SignUp></SignUp>
      </Suspense>,
   },
   {
      path: '/forgetPassword', element: <Suspense fallback={<Loading />}>
         <ForgetPassword></ForgetPassword>
      </Suspense>,
   }
])

export default router