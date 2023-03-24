import { auth } from "../firebase";

export default function SignUp() {
  return (
    <div>
      <input type="email" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button>Login</button>
    </div>
  );
}
