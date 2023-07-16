import useAuthStore from "./store";
import useAuth from "./useAuth";

const LoginStatus = () => {
  // const [user, setUser] = useState('');

  // const { user, dispatch } = useAuth();

  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a
            onClick={() =>
              // dispatch({ type: "LOGOUT" })
              logout()
            }
            href="#"
          >
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() =>
          // dispatch({ type: "LOGIN", username: "vikash" })
          login("vikash Singh")
        }
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
