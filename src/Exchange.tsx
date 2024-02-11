import Card_Icon from './assets/Card_Icon.svg';
import Share from './assets/Share.svg';
import PresententationChart from './assets/PresentationChart.svg';
import Arrow_Up_Down from './assets/Arrow_Up_Down.svg';
import Gold_Arrow from './assets/Gold_Right_Arrow.svg';
import Arrow_Right from './assets/Arrow_Right.svg';

const Exchange = () => {
  return (
    <section className="m-20 flex">
      <div className=" space-y-4 border border-solid border-[#B59770] rounded-xl p-7">
        <h2 className="font-bold text-xl">HPAY | Exchange</h2>
        <div className="flex items-center justify-between px-4 py-2 w-full bg-[linear-gradient(137deg,rgba(52,52,52,0.50)_3.89%,rgba(61,61,61,0.20)_100%)]">
          <img loading="lazy" src={Card_Icon} alt="Gold Card Icon" />
          <h1 className="self-start bg-clip-text bg-[linear-gradient(103deg,rgba(255,233,134,0.88)_-25.17%,#BC7E20_77.94%,#A74D01_128.68%)]">
            Buy HedgePay
          </h1>
          <img loading="lazy" src={Gold_Arrow} alt="Gold Right Arrow" />
        </div>
        <div>
          <div className="flex gap-5 items-center justify-between px-4 py-2 text-base text-white rounded-md bg-[linear-gradient(137deg,rgba(52,52,52,0.50)_3.89%,rgba(61,61,61,0.20)_100%)]">
            <img loading="lazy" src={Share} alt="Share Logo" />
            <span>Transfer Gateway</span>
            <img loading="lazy" src={Arrow_Right} alt="Right Arrow" />
          </div>
        </div>
        <div>
          <div className="flex gap-5 items-center justify-between px-4 py-2 text-base text-white rounded-md bg-[linear-gradient(137deg,rgba(52,52,52,0.50)_3.89%,rgba(61,61,61,0.20)_100%)]">
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
          <div className="flex gap-5 items-center justify-between px-4 py-2 text-base text-white rounded-md bg-[linear-gradient(137deg,rgba(52,52,52,0.50)_3.89%,rgba(61,61,61,0.20)_100%)]">
            <img loading="lazy" src={Arrow_Up_Down} alt="Up Down Arrow" />
            <span>Buy with Transak</span>
            <img loading="lazy" src={Arrow_Right} alt="Right Arrow" />
          </div>
        </div>
      </div>
      <div>Hello</div>
      <div>Hi Hi</div>
    </section>
  );
};

export default Exchange;
