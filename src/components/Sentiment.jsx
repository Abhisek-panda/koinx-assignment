import { IoInformationCircle } from "react-icons/io5";
import { BiSolidNews } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";

const Sentiment = () => {
  return (
    <section className="w-[60%] bg-white mx-12 mt-5 p-4 flex flex-col gap-3">
      <h2 className="font-semibold text-2xl">Sentiment</h2>
      <h3 className="flex items-center text-[#44475b] text-md gap-1 font-semibold">
        Key Events <IoInformationCircle />
      </h3>
      <div className="flex gap-2">
        <div className="bg-[#e8f4fd]">
          <div>
            <BiSolidNews />
            <h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              vel velit delectus illum maiores?
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              quae distinctio dignissimos iste! Ad, distinctio! Corporis beatae,
              voluptate non doloremque nisi, cumque laborum hic reiciendis error
              enim aperiam deserunt! Saepe.
            </p>
          </div>
        </div>
        <div className="bg-[#e8f4fd]">
          <div>
            <BsGraphUpArrow />
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque harum eaque voluptatem vitae sunt.
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur rem animi qui iusto laboriosam omnis quod. Voluptas
              repellendus amet veritatis itaque error sint laborum dolorem odit,
              doloribus impedit dolores inventore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sentiment;
