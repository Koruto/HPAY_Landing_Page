import Card_Icon from './assets/Card_Icon.svg';
import Share from './assets/Share.svg';
import PresententationChart from './assets/PresentationChart.svg';
import Arrow_Up_Down from './assets/Arrow_Up_Down.svg';
import Gold_Arrow from './assets/Gold_Right_Arrow.svg';
import Arrow_Right from './assets/Arrow_Right.svg';
import Gold_Arrow_Down from './assets/Gold_Arrow_Down.svg';
import Gold_Lion from './assets/Gold_Logo_Lion.svg';
import Infinity from './assets/Infinity.svg';
import Logo_X from './assets/Logo_X.svg';
import Question from './assets/Question.svg';
import Repeat from './assets/Repeat.svg';

const Exchange = () => {
  return (
    <section className="m-20 flex justify-between space-x-20 flex-col gap-20 xl:gap-0 xl:flex-row ">
      <div className="space-y-4 border border-solid border-[#B59770] rounded-xl p-10 h-full xl:text-base md:text-sm">
        <h2 className="font-bold xl:text-xl md:text-lg">HPAY | Exchange</h2>
        <div className="flex items-center justify-between px-4 py-2 bg-[linear-gradient(137deg,rgba(52,52,52,0.50)_3.89%,rgba(61,61,61,0.20)_100%)]">
          <img loading="lazy" src={Card_Icon} alt="Gold Card Icon" />
          <h1 className=" text-secondary">Buy HedgePay</h1>
          <img loading="lazy" src={Gold_Arrow} alt="Gold Right Arrow" />
        </div>
        <div>
          <div className="flex gap-5 items-center justify-between whitespace-nowrap px-4 py-2 rounded-md bg-[linear-gradient(137deg,rgba(52,52,52,0.50)_3.89%,rgba(61,61,61,0.20)_100%)]">
            <img loading="lazy" src={Share} alt="Share Logo" />
            <span>Transfer Gateway</span>
            <img loading="lazy" src={Arrow_Right} alt="Right Arrow" />
          </div>
        </div>
        <div>
          <div className="flex gap-5 items-center justify-between px-4 py-2 rounded-md bg-[linear-gradient(137deg,rgba(52,52,52,0.50)_3.89%,rgba(61,61,61,0.20)_100%)]">
            <img
              loading="lazy"
              src={PresententationChart}
              alt="Chart in Board"
            />
            <span>View Chart</span>
            <img loading="lazy" src={Arrow_Right} alt="Right Arrow" />
          </div>
        </div>
        <div>
          <div className="flex gap-5 items-center justify-between whitespace-nowrap px-4 py-2 rounded-md bg-[linear-gradient(137deg,rgba(52,52,52,0.50)_3.89%,rgba(61,61,61,0.20)_100%)]">
            <img loading="lazy" src={Arrow_Up_Down} alt="Up Down Arrow" />
            <span>Buy with Transak</span>
            <img loading="lazy" src={Arrow_Right} alt="Right Arrow" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start xl:max-w-[400px]">
        <div className="px-3 py-2 w-full">
          <h1 className="text-4xl font-bold">Aggregator DEX</h1>
          <p className="mt-4 text-lg text-faded">
            HedgePay&apos;s Aggregator DEX has the ability to track the best
            prices for the token you want on established Decentralized
            Exchanges. The HedgePay DEX will also provides you with the option
            to set limit orders, giving you the freedom hunt for the token you
            want at the price you want it
          </p>
        </div>
        <div className="flex gap-5 items-center justify-between self-start mt-5 text-sm font-semibold text-center whitespace-nowrap space-x-4 ml-5">
          <button className=" px-7 py-2.5 rounded-lg bg-[linear-gradient(103deg,rgba(255,233,134,0.88)_-25.17%,#BC7E20_77.94%,#A74D01_128.68%)]">
            Buy HedgePay
          </button>
          <button className=" px-10 py-2.5 rounded-lg border border-solid border-[#B59770]">
            View Chart
          </button>
        </div>
      </div>

      <form className="rounded-lg border border-solid border-[#B59770] p-5 space-y-5 xl:w-[400px]">
        <div className=" space-y-2">
          <div className="flex text-xs text-faded leading-4 whitespace-nowrap space-x-2">
            <div>Your Balance:</div>
            <span>$0.92</span>
          </div>
          <div className="text-2xl font-bold tracking-wide max-w-[187px] whitespace-nowrap">
            <span>0.20115234 NEAR</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <div>You Pay</div>
            <div>3409.2419 THPAY/NEAR</div>
          </div>
          <div className="px-2 py-2 font-semibold whitespace-nowrap rounded-xl bg-[linear-gradient(137deg,rgba(52,52,52,0.50)_3.89%,rgba(61,61,61,0.20)_100%)]  ">
            <div className="flex">
              <div className="flex gap-2.5 justify-between px-2.5 py-1 text-base tracking-wide">
                <img loading="lazy" src={Logo_X} className="" alt="Logo" />
                <div>0</div>
              </div>
              <div className="ml-auto py-1.5 pr-6 pl-2 text-base leading-5 text-center rounded-[30px]">
                <div className="flex items-center gap-2.5 justify-between px-0.5">
                  <img loading="lazy" src={Gold_Lion} alt="Near Logo" />
                  <span className=" text-secondary">NEAR</span>
                  <img
                    loading="lazy"
                    src={Gold_Arrow_Down}
                    alt="Downwards Arrow"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-faded text-xs tracking-normal text whitespace-nowrap">
            <img
              src={Repeat}
              alt="Repeat Logo"
              className="bg-[#222D2D] p-3 rounded-full"
            />
            <div className="flex items-center space-x-1">
              <div>Better by +76.7750%</div>
              <img loading="lazy" src={Question} alt="Question Logo" />
            </div>
          </div>
          <div className="flex flex-col px-1.5 py-2 font-semibold whitespace-nowrap rounded-xl bg-[linear-gradient(137deg,rgba(52,52,52,0.50)_3.89%,rgba(61,61,61,0.20)_100%)]">
            <div className="flex gap-5 justify-between px-0.5">
              <div className="flex items-center gap-2.5 justify-between px-2.5 py-1 text-base tracking-wide">
                <img
                  loading="lazy"
                  srcSet={Infinity}
                  alt="Infinity Logo"
                  className="h-10"
                />
                <div className="flex-auto">0</div>
              </div>
              <div className="flex items-center ml-auto py-1.5 pr-6 pl-2 text-base leading-5 text-center rounded-[30px]">
                <div className="flex items-center gap-2.5 justify-between px-0.5">
                  <img loading="lazy" src={Gold_Lion} alt="Near Logo" />
                  <span className=" text-secondary">THPAY</span>
                  <img
                    loading="lazy"
                    src={Gold_Arrow_Down}
                    alt="Downwards Arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className=" space-x-2 text-sm text-faded">
            <input type="checkbox" id="option1" className="h-4 w-4" />
            <label htmlFor="option1">
              I have read and agree with HedgePay Terms of Service. I have done
              my research to make sure I am legally able to purchase the token
              in my country of residence.
            </label>
          </div>

          <button
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="text-center px-16 py-2 text-md font-medium tracking-wide leading-7 whitespace-nowrap rounded-md bg-[#9F9F9F] w-full"
          >
            Swap
          </button>
        </div>
      </form>
    </section>
  );
};

export default Exchange;
