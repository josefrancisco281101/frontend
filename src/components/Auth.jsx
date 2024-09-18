import { useState } from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';

function Auth() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleToggle = () => {
    setIsRegistering(prevState => !prevState);
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      {isRegistering ? (
        <Register onToggle={handleToggle} />
      ) : (
        <Login onToggle={handleToggle} />
      )}
    </div>
  );
}

export default Auth;
