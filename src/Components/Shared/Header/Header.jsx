import logo from "../../../assets/logo.png";
import moment from 'moment';

const Header = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-5">
        <img src={logo} alt="" />
        <p className="mt-2 text-xl">
            Journalism Without Fear or Favour
        </p>
        <p className="border-2 p-2 text-xl font-semibold mt-3">
            {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Header;
