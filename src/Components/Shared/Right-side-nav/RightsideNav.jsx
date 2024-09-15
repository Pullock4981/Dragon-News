import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
import add from "../../../assets/bg1.png"

const RightsideNav = () => {
  return (
    <div>
      <div>
        <h2 className="lg:text-2xl text-2xl font-semibold mb-3">Login with</h2>
        <button className="btn btn-outline btn-primary w-full">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>

        <button className="btn btn-outline mt-3 w-full">
          <FaGithub></FaGithub>
          Login with GitHub
        </button>
      </div>

      {/* Find us section */}

      <div>
        <h2 className="lg:text-2xl text-2xl font-semibold mt-7 mb-3">
          Find us on
        </h2>
        <a
          href=""
          className="flex items-center gap-4 text-xl p-2 border rounded-t-lg w-full"
        >
          <FaFacebook></FaFacebook>
          <span className="text-base font-medium">facebook</span>
        </a>

        <a
          href=""
          className="flex items-center gap-4 text-xl p-2 border-x w-full"
        >
          <FaTwitter></FaTwitter>
          <span className="text-base font-medium">twitter</span>
        </a>

        <a
          href=""
          className=" flex items-center gap-4 text-xl p-2 border rounded-b-lg w-full"
        >
          <FaInstagram></FaInstagram>
          <span className="text-base font-medium">instagram</span>
        </a>
      </div>

      {/* Q zone */}

      <div>
        <h2 className="lg:text-2xl text-2xl font-semibold mt-7 mb-3">Q-Zone</h2>
        <div className="space-y-8">
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
      </div>

      {/* add */}

      <div className="mt-7">
        <img src={add} alt="" />
      </div>

    </div>
  );
};

export default RightsideNav;
