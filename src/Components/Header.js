import { FaBars } from "react-icons/fa";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

import { useGlobalContext } from "./Context";

const Header = () => {
  const { showmodal, setshowsidebar, setshowmodal } = useGlobalContext();
  return (
    <div className="Header">
      {showmodal && <Backdrop setshow={setshowmodal} />}
      {showmodal && <Modal />}
      <header>
        <button className="bars-open">
          <FaBars className="bars-icon" onClick={() => setshowsidebar(true)} />
        </button>
      </header>
      <button className="btn" onClick={() => setshowmodal(true)}>
        Show Modal
      </button>
    </div>
  );
};

export default Header;
