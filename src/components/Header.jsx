import fifalogo from "../assets/fifa_2005_logo_by_henser_dd75hpw-fullview.png";
import fifalogo2 from "../assets/tumblr_b2d14e6d83834b172d9441ec5053c177_7f2e57cc_400.png"

const Header = () => {
  return (
    <div className="header">
      <img src={fifalogo} alt="" />
      {/* <img src={fifalogo2} alt="" /> */}
      <h1>
        FIFA <span>2005</span> <span style={{ color: "white" }}>LEGENDS</span>
      </h1>
    </div>
  );
};

export default Header;