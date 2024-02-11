import Logo3D from './assets/Logo3D.svg';
import Bottom_Line from './assets/Bottom_Line.svg';
import Vertical_Bar from './assets/Line.png';
import Shopping_Cart from './assets/Shopping_Cart.svg';

const Navbar = () => {
  return (
    <header className="py-9 pr-9 pl-20 bg-background shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-poppins max-md:px-5 ">
      <nav className="flex gap-5">
        <div className="flex grow gap-10 justify-between items-center mt-1.5 text-base whitespace-nowrap text-[#E0E0E0]">
          <img loading="lazy" src={Logo3D} />
          <div className="mt-3 font-medium text-white">
            <div>Swap</div>
            <img loading="lazy" src={Bottom_Line} className="mt-2" />
          </div>
          <a className="self-stretch my-auto" href="#">
            Rewards
          </a>
          <a className="self-stretch my-auto" href="#">
            Products
          </a>
          <a className="self-stretch my-auto" href="#">
            Launchpad
          </a>
          <a className="grow self-stretch my-auto" href="#">
            Leaderboard
          </a>
        </div>
        <div className="flex flex-col ml-5">
          <div className="flex grow gap-10 justify-between">
            <a
              className="my-auto text-base text-white whitespace-nowrap"
              href="#"
            >
              About Us
            </a>
            <a className="my-auto text-base text-white" href="#">
              Support
            </a>
            <div className="flex gap-3 justify-center items-center">
              <button className="grow justify-center self-stretch px-7 py-2.5 my-auto text-sm font-semibold text-center text-white whitespace-nowrap rounded-md bg-[linear-gradient(103deg,rgba(255,233,134,0.88)_-25.17%,#BC7E20_77.94%,#A74D01_128.68%)]">
                Connect Wallet
              </button>
              <div className="flex flex-col self-stretch my-auto text-sm font-medium tracking-tight leading-4 text-center">
                <span>En</span>
                <img loading="lazy" src={Bottom_Line} className=" w-full" />
              </div>
              <div className="flex gap-2 justify-between self-stretch px-1 py-0.5">
                <img loading="lazy" src={Vertical_Bar} className="" />
                <img loading="lazy" src={Shopping_Cart} className="" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
