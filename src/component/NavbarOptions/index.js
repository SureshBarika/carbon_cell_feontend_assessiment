import { HiArrowsUpDown } from "react-icons/hi2";

import { FiHome } from "react-icons/fi";
import { GoOrganization } from "react-icons/go";
import { MdOutlineHourglassEmpty } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";

import "./index.css";

const NavbarOption = (props) => {
  const { options, activeNavOption, updateActiveId } = props;
  const { id, option } = options;

  const ActiveOption = id === activeNavOption ? "active" : "";

  const updateActiveOption = () => {
    updateActiveId(id);
  };

  const GetIcon = (id) => {
    switch (id) {
      case "home":
        return <FiHome />;
      case "organization":
        return <GoOrganization />;
      case "assets":
        return <LuBox />;
      case "trade":
        return <HiArrowsUpDown />;
      case "history":
        return <MdOutlineHourglassEmpty />;
      case "wallet":
        return <IoWalletOutline />;

      default:
        break;
    }
  };

  return (
    <li className={`option-item ${ActiveOption}`} onClick={updateActiveOption}>
      {GetIcon(id)}
      <p className="option">{option}</p>
    </li>
  );
};

export default NavbarOption;
