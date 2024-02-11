import Certik from './assets/Certik.svg';
import Coin_Icon from './assets/coin-market.svg';
import Social_Icon from './assets/socials-icon.svg';
import Support_Icon from './assets/support-icon.png';

const Footer = () => {
  return (
    <footer className="flex justify-between mx-16 pb-10 border-t pt-10">
      <img src={Certik} alt="Certik Icon" />
      <div className="flex space-x-6">
        <div className="flex flex-col space-y-1">
          <img src={Coin_Icon} alt="Coin Icon" className="h-10" />
          <span className="font-light text-faded text-xs">CoinMarketCap</span>
        </div>
        <div className="flex flex-col space-y-1">
          <img src={Social_Icon} alt="Coin Icon" className="h-10" />
          <span className="font-light text-faded text-xs">Socials</span>
        </div>
        <div className="flex flex-col space-y-1 items-center">
          <img src={Support_Icon} alt="Coin Icon" className="h-10 w-10" />
          <span className="font-light text-faded text-xs">Support</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
