import Header from "../Shared/Header/Header";
import LefrSideNav from "../Shared/Left-side-nav/LefrSideNav";
import Navbar from "../Shared/NavBar/Navbar";
import RightsideNav from "../Shared/Right-side-nav/RightsideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <h2 className="text-3xl font-poppins text-center my-7 font-bold">This is Home</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LefrSideNav></LefrSideNav>
        </div>
        <div className="md:col-span-2 border">
          <h2 className="lg:text-4xl text-2xl text-center">News comming soon...</h2>
        </div>
        <div>
          <RightsideNav></RightsideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
