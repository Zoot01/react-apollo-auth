import { useContext } from "react";
import { FaCheckCircle, FaThumbsUp } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Profile.module.scss";

const technologies: { img: string; technology: string; link: string }[] = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    technology: "Typescript",
    link: "https://github.com/microsoft/TypeScript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    technology: "React",
    link: "https://github.com/facebook/react",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    technology: "Express",
    link: "https://github.com/expressjs/express",
  },
  {
    img: "https://aws1.discourse-cdn.com/business5/uploads/apollographql/original/1X/25bd5104d61020fe4dc0777a5919cd009bca633e.png",
    technology: "Apollo GraphQL",
    link: "https://github.com/apollographql",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    technology: "MongoDB",
    link: "https://github.com/mongodb/mongo",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    technology: "Sass",
    link: "https://github.com/sass/sass",
  },
];

const Profile = () => {
  let navigate = useNavigate();
  const { state } = useContext(AuthContext);

  if (!state._id)
    return (
      <div className={styles.loginContianer}>
        <h2>Hey, you want to see something cool? Just login. 😉</h2>
        <button
          className={styles.loginButton}
          onClick={() => navigate({ pathname: "login" })}
        >
          <FiLogIn />
          Log In
        </button>
      </div>
    );

  return (
    <div className={styles.container}>
      <h1>My Profile</h1>
      <div className={styles.profileContiner}>
        <img src={state.avatarImg as string} alt={state.avatarImg as string} />
        <FaCheckCircle
          size={12}
          color={"#36a4ec"}
          style={{
            position: "absolute",
            top: "10%",
            left: "17%",
            background: "#282c34",
            padding: "2px",
            borderRadius: "50%",
          }}
        />
        <div className={styles.metaData}>
          <div className={styles.username}>{state.name}</div>
          <span className={styles.userhandle}>@{state.handle}</span>
        </div>
        <div className={styles.actions}>
          <div
            className={styles.button}
            onClick={() => toast.info("Hey, this is pretty cool. 🚀")}
          >
            <FaThumbsUp size={18} />
          </div>
        </div>
      </div>
      <div>
        <img
          draggable={false}
          className={styles.gif}
          src="https://c.tenor.com/dDZAejq7_jQAAAAM/typing-cat.gif"
          alt=""
        />
      </div>
      <span className={styles.lowKey}>Yo, it lowkey be like that 🔝</span>
      <div>
        <button
          className={styles.protectedButton}
          onClick={() => navigate({ pathname: "protected" }, { replace: true })}
        >
          Protected Route 🔓
        </button>
      </div>
      <h2>Learn more about these technologies 👀</h2>
      <div className={styles.techGrid}>
        {technologies.map((i, index: number) => {
          return (
            <div className={styles.techContainer} key={index}>
              <a href={i.link} target="_blank" rel="noopener noreferrer">
                <img src={i.img} alt={i.technology} />
              </a>
              <div>{i.technology}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
