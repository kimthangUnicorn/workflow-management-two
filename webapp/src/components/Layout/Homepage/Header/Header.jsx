import Logo from '~/assets/logo.png';
function Header() {
  return (
    <div className="container" style={{ margin: '0 auto' }}>
      <header className="py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]">
        <div className="flex flex-wrap items-center justify-between gap-5 relative">
          <a>
            <img src={Logo} alt="logo" className="w-36" />
          </a>
          <div className="flex lg:order-1 max-sm:ml-auto">
            <button className="px-4 py-2 text-xl rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
              Login
            </button>
            <button className="px-4 py-2 text-xl rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] ml-3">
              Sign up
            </button>
            <button id="toggle" className="lg:hidden ml-7">
              <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <ul
            id="collapseMenu"
            className="lg:!flex max-lg:hidden max-lg:w-full lg:space-x-10 max-lg:space-y-4 max-lg:my-4"
          >
            <li className="max-lg:border-b max-lg:py-2">
              <a className="hover:text-blue-600 text-[15px] font-bold text-gray-600 block">Home</a>
            </li>
            <li className="group max-lg:border-b max-lg:py-2 relative">
              <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block">
                Pages
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name={16}
                    data-original="#000000"
                  />
                </svg>
              </a>
              <ul className="absolute hidden group-hover:block shadow-lg bg-white px-6 pb-4 pt-6 space-y-3 lg:top-12 max-lg:top-8 -left-6 min-w-[250px] z-50">
                <li className="border-b py-2">
                  <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">About</a>
                </li>
                <li className="border-b py-2">
                  <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">Contact</a>
                </li>
                <li className="border-b py-2">
                  <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">Login</a>
                </li>
                <li className="border-b py-2">
                  <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">Sign up</a>
                </li>
                <li className="border-b py-2">
                  <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">Blog</a>
                </li>
              </ul>
            </li>
            <li className="group max-lg:border-b max-lg:py-2 relative">
              <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block">
                Blog
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name={16}
                    data-original="#000000"
                  />
                </svg>
              </a>
              <ul className="absolute hidden group-hover:block shadow-lg bg-white px-6 pb-4 pt-6 space-y-3 lg:top-12 max-lg:top-8 -left-6 min-w-[250px]">
                <li className="border-b py-2">
                  <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">Foods</a>
                </li>
                <li className="border-b py-2">
                  <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">Sale</a>
                </li>
                <li className="border-b py-2">
                  <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">Marketing</a>
                </li>
                <li className="border-b py-2">
                  <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">Investment</a>
                </li>
              </ul>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">Team</a>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">About</a>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <a className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
