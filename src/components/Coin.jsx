const Coin = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
        alt="Bitcoin Logo"
        className="w-8"
      />
      <p className="text-[#0b1426] font-semibold text-xl">Bitcoin</p>
      <p className="uppercase text-[#5d667b] font-semibold text-sm">btc</p>
      <p className="bg-[#768396] text-white p-2 w-18 text-nowrap text-sm rounded-md">
        Rank #1
      </p>
    </div>
  );
};

export default Coin;
