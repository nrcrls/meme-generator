import logo from '../assets/logo-1.png'

function Header() {
  return (
    <nav className='flex justify-between p-5 bg-duck'>
      <div className="flex ml-4">
        <img src={logo} alt="logo-icon" className='w-8 mr-2' />
        <div>
          <h1 className='text-2xl pt-1 font-josefin text-yellow-200 drop-shadow-md'>Meme Generator</h1>
        </div>
      </div>
      <div className="nav-menu">
        <p className='text-xl pt-2 mr-4 font-josefin text-yellow-200 drop-shadow-md'>Project 3</p>
      </div>

    </nav>
  );
}

export default Header;
