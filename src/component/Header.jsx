import logo from '../assets/logo-1.png'

function Header() {
  return (
    <nav className='flex justify-between p-5 bg-red-200'>
      <div className="flex">
        <img src={logo} alt="logo-icon" className='w-8 mx-4' />
        <div>
          <h1 className='text-2xl pt-1 font-josefin text-blue-400'>Meme Generator</h1>
        </div>
      </div>
      <div className="nav-menu">
        <p className='text-xl pt-2 mr-4 font-josefin text-blue-400'>Project 3</p>
      </div>

    </nav>
  );
}

export default Header;
