import Coin from "./Coin";
import { IoMdArrowDropup } from "react-icons/io";

const TradingChart = () => {
  return (
    <section className="bg-white ml-12 w-[60%] p-4 rounded-md">
      <div>
        <Coin />
      </div>
      <div className="flex gap-3 mt-6 items-center">
        <p className="text-2xl font-semibold">$46,953.04</p>
        <p className="flex bg-[#ebf9f4] text-[#14b079] text-sm p-0 h-6 pr-2 items-center rounded-sm">
          <IoMdArrowDropup className="text-2xl text-[#14b079] p-0 font-semibold" />
          2.51%
        </p>
        <p className="text-[#7e8b9d] text-[12px]">(24H)</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold text-md">
          <span className="mr-1">&#8377;</span>39,42,343
        </p>
      </div>
      <hr />
      <div className="flex items-center justify-between mt-4">
        <p className="font-semibold text-md">Bitcoin Price Chart (USD)</p>
        <div className="flex gap-3 items-center text-sm ">
          <button className="text-[#7b8294]">1H</button>
          <button className="text-[#7b8294]">24H</button>
          <button className="text-[#0141cf] text-semibold bg-[#e2ecfe] rounded-[30%] w-8">
            7D
          </button>
          <button className="text-[#7b8294]">1M</button>
          <button className="text-[#7b8294]">3M</button>
          <button className="text-[#7b8294]">6M</button>
          <button className="text-[#7b8294]">1Y</button>
          <button className="text-[#7b8294]">ALL</button>
        </div>
      </div>
      <div>
        <img
          src="https://www.investopedia.com/thmb/4lMMNe4lHpglkLrMi3tlcTV71Ik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Screenshot2023-10-27at11.45.00AM-820401e9ff944b97b6903c15878aab4a.png"
          alt="Bitcoin Graph"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default TradingChart;
