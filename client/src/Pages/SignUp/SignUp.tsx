import React, { useContext } from "react";
import styles from "./SignUp.module.scss";
import { FaGooglePlus, FaTwitter } from "react-icons/fa";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext, Types } from "../../context/AuthContext";
import { useRegisterUserMutation } from "../../generated/graphql";
import Loading from "../../components/Loading/Loading";
import jwtDecode from "jwt-decode";
import { IJwtAccessTokenDecoded } from "../Login/Login";

type IFormInputs = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  handle: string;
  avatarImg: string;
};

const SignUp = () => {
  let navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const {
    handleSubmit,
    control,
    reset,
    watch,
    register,
    formState: { errors },
  } = useForm<IFormInputs>();

  const [handleSignUp, { loading }] = useRegisterUserMutation();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    handleSignUp({
      variables: {
        registerUserInput: {
          avatarImg: data.avatarImg,
          email: data.email,
          handle: data.handle,
          name: data.name,
          password: data.password,
        },
      },
      onError(error) {
        toast.error(error.graphQLErrors[0].message);
      },
      onCompleted(res) {
        toast.success(
          res.RegisterUser?.registerSuccess &&
            `Thanks for registering, ${data.name}.`
        );
        const decodedAccessToken = jwtDecode(
          res.RegisterUser?.accessToken as string
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
        reset();
        navigate({ pathname: "/home" }, { replace: true });
      },
    });
  };

  if (loading)
    return (
      <div
        className={styles.formContainer}
        style={{
          height: "100vh",
        }}
      >
        <Loading />
      </div>
    );

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <label htmlFor="email">Email</label>
        {errors.email?.type === "required" && (
          <small className={styles.error}>Required</small>
        )}
        <Controller
          name="email"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              {...field}
              className={errors.email && styles.inputError}
              type="email"
              name="email"
              id="email"
              placeholder="📧 Enter your email."
            />
          )}
        />

        <label htmlFor="name">Name</label>
        {errors.name?.type === "required" && (
          <small className={styles.error}>Required</small>
        )}
        <Controller
          name="name"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              {...field}
              className={errors.name && styles.inputError}
              type="text"
              name="name"
              id="name"
              placeholder="😉 Enter your name."
            />
          )}
        />

        <label htmlFor="password">Password</label>
        {errors.password?.type === "required" && (
          <small className={styles.error}>Required</small>
        )}
        <Controller
          name="password"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              {...field}
              className={errors.password && styles.inputError}
              type="password"
              name="password"
              id="password"
              placeholder="🔒 Enter your password."
            />
          )}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        {errors.confirmPassword?.type === "required" && (
          <small className={styles.error}>Required</small>
        )}
        {errors.confirmPassword && (
          <small className={styles.error}>
            {errors.confirmPassword.message}
          </small>
        )}
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <input
              {...field}
              {...register("confirmPassword", {
                required: true,
                validate: (val: string) => {
                  if (watch("password") !== val) {
                    return "Be sure your passwords match.";
                  }
                },
              })}
              className={errors.confirmPassword && styles.inputError}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="🔁 Confirm your password."
            />
          )}
        />

        <label htmlFor="handle">Username Handle</label>
        {errors.handle?.type === "required" && (
          <small className={styles.error}>Required</small>
        )}
        <Controller
          name="handle"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              {...field}
              className={errors.handle && styles.inputError}
              type="text"
              name="handle"
              id="handle"
              placeholder="🚪 Choose your handle."
            />
          )}
        />

        <label htmlFor="avatarImg">Avtar Image URL</label>
        {errors.avatarImg?.type === "required" && (
          <small className={styles.error}>Required</small>
        )}
        <Controller
          name="avatarImg"
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              {...field}
              className={errors.avatarImg && styles.inputError}
              type="text"
              name="avatarImg"
              id="avatarImg"
              placeholder="📌 Link your avatar image."
            />
          )}
        />

        <button className={styles.loginButton} type="submit">
          Sign Up
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
          Already have an account? <a href="/login">Sign In</a>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
