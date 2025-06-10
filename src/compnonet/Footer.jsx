import databiz from "../assets/client-databiz.svg";
import audiophile from "../assets/client-audiophile.svg";
import meet from "../assets/client-meet.svg";
import maker from "../assets/client-maker.svg";
export default function Footer() {
  return (
    <>
      <div className="px-4 py-6 flex flex-col items-center md:items-start  ">
        <h1 className=" w-full text-4xl lg:text-8xl md:text-5xl font-bold lg:mt-20 ">
          Make remote work
        </h1>
        <p className=" py-6 text-gray-400 text-lg  text-bold lg:my-10">
          Get your teams in synic, no matter your location, Streamline
          processes, create team rituals, and watch productivity soar.
        </p>
        <button className="py-3 px-5 bg-black text-white rounded-2xl text-lg font-semibold duration-300 hover:bg-white hover:text-black border">
          Learn more
        </button>
        <div className="  my-6 w-full h-full flex justify-between items-center px-5 md:items-end">
          <img src={databiz} alt="databiz" className="w-20 h-4" />
          <img src={audiophile} alt="audiophile" className="w-16 h-6" />
          <img src={meet} alt="meet" className="w-16 h-4" />
          <img src={maker} alt="maker" className="w-16 h-4" />
        </div>
      </div>
    </>
  );
}
