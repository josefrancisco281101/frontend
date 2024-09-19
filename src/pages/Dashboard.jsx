import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    f_name: "Jose" ,
   
    bio: 'I am a software developer and a big fan of devchallenges...',
    phone: '908249274292',
    email: '    jCkC3@example.com',
    password: '******'
  });
  const setLocation = useNavigate();

 
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    console.clear();
    setLocation('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleEditToggle = () => {
    setIsEditing(!isEditing); 
  };

 const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("datos guardados:", formData);
    setIsEditing(false);
  };

  return (
    <main className='flex flex-col justify-center items-center'>
     
       {/* ----------------------------------------------------*/}

       <div className=''>
       <nav className=' flex gap-[400px] items-center p-4 text-black'><img  className='w-[200px]' src="logo.png" alt="Logo" />
      <div className=''>
        <button onClick={toggleMenu} className='flex gap-2 items-center'>
          <img className='w-[30px] rounded-md' src={`http://localhost:3000/api/images/${user?.image}`} alt="Foto de perfil" />
          <span>{user?.f_name} {user?.m_name}</span>
        </button>
        {isMenuOpen && (
            <ul className="mt-2 w-48 bg-white shadow-lg rounded-lg py-2 p-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center"><img className='h-[30px] mt-[4px]' src="profile.png" alt="" /> My Profile</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center"><img className='h-[30px] mt-[4px]' src="group.png" alt="" /> Group Chat</li>
              <hr />
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center text-red-500"
                onClick={handleLogout}
              >
                <img className='h-[30px] mt-[4px]' src="logout.png " alt="" />
                Logout
              </li>
            </ul>
          )}
      </div>
       </nav>

          <h2 className='text-2xl text-center'>Personal info</h2>

          <p className='text-center mb-10'>Basic info, like your name and photo</p>
        {/* ----------------------------------------------------------------------------------------------- */}
        {/* ----------------------------------------------------------------------------------------------- */}

       
      {/* ---------------------------------------------------- */}
          <section className='border-2 rounded-xl w-[600px] ml-[100px]' >
          <div className='flex justify-between px-8 mt-6'>
          <div ><h3 className='text-2xl'>Profile</h3>
             <p>some info may be visible to other people</p></div>
             <button onClick={handleEditToggle} className='h-8 w-20 px-4 rounded-lg border-2 border-[#6b6262]'>
             {isEditing ? 'Cancel' : 'Edit'}
             </button>
          </div>
           <hr />
            {/* ---------------------------------------------------- */}
          
            {isEditing ? (
           
            <div className='p-8'>
              <div className='flex my-2 items-center'>
                
                <img className='w-[45px] rounded-lg' src={`http://localhost:3000/api/images/${user?.image}`} alt='Foto de perfil' />
                <span className='ml-8 text-sm relative'>CHANGE PHOTO</span> <img className='absolute ml-4 icon-white' src="camara.png" alt="icon camara edit" />
              </div>
              <div className='flex flex-col mt-4'>
                <label className='text-sm'>NAME</label>
                <input
                  className='border p-2 rounded-md'
                  type="text"
                  name="f_name"
                  value={formData.f_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col mt-4'>
                <label className='text-sm'>BIO</label>
                <input
                  className='border p-2 rounded-md'
                  type="text"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col mt-4'>
                <label className='text-sm '>PHONE</label>
                <input
                  className='border p-2 rounded-md'
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col mt-4'>
                <label className='text-sm '>EMAIL</label>
                <input
                  className='border p-2 rounded-md'
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col mt-4'>
                <label className='text-sm '>PASSWORD</label>
                <input
                  className='border p-2 rounded-md'
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <button onClick={handleSave} className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md'>
                Save
              </button>
            </div>
          ) : (
            
            <>
              <div className='flex my-2 items-center'>
                <span className='ml-8 text-sm'>PHOTO</span>
                <img className='w-[45px] ml-[90px] rounded-lg' src={`http://localhost:3000/api/images/${user?.image}`} alt='Foto de perfil' />
              </div>
              <hr />
              <div className='flex items-center gap-[85px] mt-4'>
                <span className='text-sm ml-[33px]'>NAME</span>
                <p className='text-lg'>{formData.f_name} </p>
              </div>
              <hr />
              <div className='flex items-center gap-[85px] mt-4'>
                <span className='text-sm ml-[33px]'>BIO</span>
                <p>{formData.bio}</p>
              </div>
              <hr />
              <div className='flex items-center gap-[85px] mt-4'>
                <span className='text-sm ml-[33px]'>PHONE</span>
                <p>{formData.phone}</p>
              </div>
              <hr />
              <div className='flex items-center gap-[85px] mt-4'>
                <span className='text-sm ml-[33px]'>EMAIL</span>
                <p>{formData.email}</p>
              </div>
              <hr />
              <div className='flex items-center gap-[85px] mt-4'>
                <span className='text-sm ml-[33px]'>PASSWORD</span>
                <p className='text-lg'>********</p>
              </div>
            </>
          )}
        </section>
      </div>
      <span className=' text-md mt-8'>created by <strong>JoseFrancisco</strong></span>
    </main>
  );
}

export default Dashboard;