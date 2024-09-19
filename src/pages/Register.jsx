import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "./Login"; 
function Register() {
  const { registerMutation, errorMessage } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const [formError, setFormError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
        fName: e.target.fName.value, 
        lName: e.target.lName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
      username: e.target.username.value,
    };

    if (data.password.length < 8) {
      return setFormError("La contraseña debe tener al menos 8 caracteres.");
    }

    if (!/[A-Z]/.test(data.password)) {
      return setFormError(
        "La contraseña debe tener al menos una letra mayúscula."
      );
    }

    if (data.password !== data.confirmPassword) {
      return setFormError("Las contraseñas no coinciden.");
    }

    setFormError("");

    await registerMutation.mutate(data);
  };

  return (
    <div>
      {showLogin ? (
        <Login />
      ) : (
        <main className="h-screen flex flex-col justify-center items-center max-w-[550px] m-auto gap-5">
          <form
            onSubmit={handleRegister}
            className="border-2 border-[#DEDEDE] rounded-2xl p-8 flex flex-col h-[780px] w-[420px]"
          >
            <img src="logo.png" alt="Logo" className="w-[200px]" />
            <h3 className="text-lg font-bold mb-6">Register</h3>

            <label className="text-md pb-4">
              <input
                type="text"
                name="fName"
                className="border border-gray-400 rounded-md w-full p-2"
                placeholder="First Name"
                required
              />
            </label>

            <label className="text-md pb-4">
              <input
                type="text"
                name="lName"
                className="border border-gray-400 rounded-md w-full p-2"
                placeholder="Last Name"
                required
              />
            </label>
            <label className="text-md pb-4">
              <input
                type="text"
                name="username"
                className="border border-gray-400 rounded-md w-full p-2"
                placeholder="Username"
                required
              />
            </label>

            <label className="text-md pb-4">
              <input
                type="email"
                name="email"
                className="border border-gray-400 rounded-md w-full p-2"
                placeholder="Email"
                required
              />
            </label>

            <label className="text-md pb-4">
              <input
                type="password"
                name="password"
                className="border border-gray-400 rounded-md w-full p-2"
                placeholder="Password"
                required
              />
            </label>

            <label className="text-md pb-6">
              <input
                type="password"
                name="confirmPassword"
                className="border border-gray-400 rounded-md w-full p-2"
                placeholder="Confirm Password"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2"
            >
              Register
            </button>

            {formError && (
              <p className="text-red-500 mt-4 text-center">{formError}</p>
            )}

            {errorMessage && (
              <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
            )}

            <p className="text-center mt-4 text-gray-400">
              or continue with these social profiles
            </p>
            <p className="text-center mt-7 text-gray-400">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setShowLogin(true)}
              >
                Login
              </span>
            </p>
            <div className="flex justify-center gap-5 mt-4">
              <div className="border border-gray-400 rounded-full">
                <img
                  className="w-[38px] p-[10px]"
                  src="google.png"
                  alt="Google"
                />
              </div>
              <div className="border border-gray-400 rounded-full">
                <img
                  className="w-[38px] p-[10px]"
                  src="facebook.png"
                  alt="Facebook"
                />
              </div>
              <div className="border border-gray-400 rounded-full">
                <img
                  className="w-[38px] p-[10px]"
                  src="twitter.png"
                  alt="Twitter"
                />
              </div>
              <div className="border border-gray-400 rounded-full">
                <img
                  className="w-[38px] p-[10px]"
                  src="github.png"
                  alt="GitHub"
                />
              </div>
            </div>
          </form>

          <span className="text-gray-400">
            created by <strong>JoseFrancisco</strong>
          </span>
        </main>
      )}
    </div>
  );
}

export default Register;
