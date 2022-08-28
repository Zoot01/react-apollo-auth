import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import RouteGuard from "./components/UI/RouteGuard";
import { AuthContext, Types } from "./context/AuthContext";
import { useRestoreSessionQuery } from "./generated/graphql";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Protected from "./Pages/Protected/Protected";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  const { dispatch } = useContext(AuthContext);
  const { loading, error } = useRestoreSessionQuery({
    fetchPolicy: "network-only",
    onCompleted(data) {
      dispatch({
        type: Types.Login,
        payload: {
          _id: data.RestoreSession?._id as string,
          avatarImg: data.RestoreSession?.avatarImg as string,
          email: data.RestoreSession?.email as string,
          handle: data.RestoreSession?.handle as string,
          name: data.RestoreSession?.name as string,
          role: data.RestoreSession?.role as string,
        },
      });
    },
    onError(error) {
      if (error.graphQLErrors) {
        for (let err of error.graphQLErrors) {
          switch (err.extensions.code) {
            case "UNAUTHENTICATED":
              dispatch({
                type: Types.Logout,
                payload: {
                  avatarImg: null,
                  email: null,
                  handle: null,
                  name: null,
                  role: null,
                  _id: null,
                },
              });
              break;
          }
        }
      }
      if (error.networkError) {
        console.log(`[Network error]: ${error.networkError}`);
      }
    },
  });

  if (loading || error?.networkError)
    return (
      <div className={styles.loadingContainer}>
        <Loading />
      </div>
    );

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      <Header />
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route
          path="protected"
          element={
            <RouteGuard>
              <Protected />
            </RouteGuard>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
