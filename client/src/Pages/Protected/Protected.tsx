import Loading from "../../components/Loading/Loading";
import { useHelloWorldQuery } from "../../generated/graphql";

const Protected = () => {
  const { data, loading } = useHelloWorldQuery({
    fetchPolicy: "network-only",
  });
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1>This page is protected with a route guard. 🔒</h1>
      <img
        src="https://media1.giphy.com/media/3o6nURyS2InUh6jbnq/giphy.gif"
        alt="lock-and-key"
        style={{
          borderRadius: "8px",
          marginTop: "0.5rem",
        }}
      />
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h3>Below is a protected message from the server. 🐱‍🐉</h3>
            <div>{data?.HelloWorld}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Protected;
