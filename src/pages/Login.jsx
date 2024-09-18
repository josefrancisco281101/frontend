import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Register from './Register'; 

function Login() {
  const { loginMutation, errorMessage } = useContext(AuthContext); 
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = async e => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    await loginMutation.mutate(data);
  };

  return (
    <div>
      {showRegister ? (
        <Register />
      ) : (
        <main className='h-screen flex flex-col justify-center items-center max-w-[550px] m-auto gap-5'>
          <form
            onSubmit={handleLogin}
            className='border-2 border-[#DEDEDE] rounded-2xl p-8 flex flex-col h-[520px] w-[420px]'
          >
            <img src="logo.png" alt="Logo" className='w-[200px]' />
            <h3 className='text-lg font-bold mb-6'>Login</h3>

            <label className='text-md pb-4'>
              <input
                type='text'
                name='username'
                className='border border-gray-400 rounded-md w-full p-2 email-input'
                placeholder='Email'
              />
            </label>
            <label className='text-md pb-6'>
              <input
                type='password'
                name='password'
                className='border border-gray-400 rounded-md w-full p-2 password-input'
                placeholder='Password'
              />
            </label>

            <button type='submit' className='bg-blue-500 text-white rounded-md p-2'>
              Login
            </button>

            {errorMessage && (
              <p className='text-red-500 mt-4 text-center'>{errorMessage}</p>
            )}

            <p className='text-center mt-4 text-gray-400'>or continue with these social profile</p>
            <div className='flex justify-center gap-5 mt-4'>
              <div className='border border-gray-400 rounded-full'>
                <img className='w-[38px] p-[10px]' src="google.png" alt="Google" />
              </div>
              <div className='border border-gray-400 rounded-full'>
                <img className='w-[38px] p-[10px]' src="facebook.png" alt="Facebook" />
              </div>
              <div className='border border-gray-400 rounded-full'>
                <img className='w-[38px] p-[10px]' src="twitter.png" alt="Twitter" />
              </div>
              <div className='border border-gray-400 rounded-full'>
                <img className='w-[38px] p-[10px]' src="github.png" alt="GitHub" />
              </div>
            </div>

            <p className='text-center mt-7 text-gray-400'>
              Don't have an account?{' '}
              <span className='text-blue-500 cursor-pointer' onClick={() => setShowRegister(true)}>
                Register
              </span>
            </p>
          </form>

          <span className='text-gray-400'>
            created by <strong>JoseFrancisco</strong>
          </span>
        </main>
      )}
    </div>
  );
}

export default Login;
