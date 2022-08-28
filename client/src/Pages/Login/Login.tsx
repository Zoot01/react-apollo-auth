import jwtDecode, { JwtPayload } from "jwt-decode";
import { SyntheticEvent, useContext, useState } from "react";
import { FaGooglePlus, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  AuthContext,
  InitialStateType,
  Types,
} from "../../context/AuthContext";
import { useLoginUserMutation } from "../../generated/graphql";
import styles from "./Login.module.scss";

export interface IJwtAccessTokenDecoded extends JwtPayload, InitialStateType {}

const Login = () => {
  let navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [loginFormData, setLoginFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const [handleLogin] = useLoginUserMutation({
    variables: {
      loginUserInput: {
        email: loginFormData.email,
        password: loginFormData.password,
      },
    },
    fetchPolicy: "network-only",
    onCompleted(data) {
      const decodedAccessToken = jwtDecode(
        data.LoginUser?.accessToken as string
      ) as IJwtAccessTokenDecoded;
      dispatch({
        type: Types.Login,
        payload: {
          _id: decodedAccessToken._id as string,
          avatarImg: decodedAccessToken.avatarImg as string,
          email: decodedAccessToken.email as string,
          handle: decodedAccessToken.handle as string,
          name: decodedAccessToken.name as string,
          role: decodedAccessToken.role as string,
        },
      });
      navigate({ pathname: "/" }, { replace: true });
      toast.success(`Welcome back, ${decodedAccessToken.name}`);
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
            default:
              toast.error(err.message);
          }
        }
      }
      if (error.networkError) {
        console.log(`[Network error]: ${error.networkError}`);
      }
    },
  });

  const handleLoginFormSubmit = async (e: SyntheticEvent): Promise<any> => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className={styles.formContainer}>
      <form
        className={styles.form}
        onSubmit={(e: SyntheticEvent<HTMLFormElement>) =>
          handleLoginFormSubmit(e)
        }
      >
        <h1>Log In</h1>
        <label htmlFor="email">Email</label>
        <small>Required</small>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="📧 Enter your email."
          onChange={(e: SyntheticEvent<HTMLInputElement>) => {
            setLoginFormData({
              ...loginFormData,
              [e.currentTarget.id]: e.currentTarget.value,
            });
          }}
        />
        <label htmlFor="password">Password</label>
        <small>Required</small>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="🔒 Enter your password."
          onChange={(e: SyntheticEvent<HTMLInputElement>) => {
            setLoginFormData({
              ...loginFormData,
              [e.currentTarget.id]: e.currentTarget.value,
            });
          }}
        />
        <button className={styles.loginButton} type="submit">
          Log In
        </button>
        <button
          className={styles.socialButton}
          disabled
          style={{
            marginTop: "1rem",
          }}
        >
          <FaGooglePlus />
          Google
        </button>
        <button className={styles.socialButton} disabled>
          <FaTwitter />
          Twitter
        </button>
      </form>
      <div>
        <span>
          Don't have an account? <a href="/signup">Sign up</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
