import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div>
      <div className="flex">
        <button className="btn btn-error text-white mt-4">Latest</button>
        <Marquee className="mt-4">
          <p className="text-red-600 font-bold mr-5">
          Breaking News
          </p>
          <p className="text-red-600 font-bold mr-5">
          Breaking News
          </p>
          <p className="text-red-600 font-bold mr-5">
          Breaking News
          </p>
          <p className="text-red-600 font-bold mr-5">
          Breaking News
          </p>
          <p className="text-red-600 font-bold mr-5">
          Breaking News
          </p>
          <p className="text-red-600 font-bold mr-5">
          Breaking News
          </p>
          <p className="text-red-600 font-bold mr-4">
          Breaking News
          </p>
          <p className="text-red-600 font-bold mr-4">
          Breaking News
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
