import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Modal = () => {
  const { setshowmodal } = useGlobalContext();
  return (
    <div className="Modal">
      <div className="header">
        <h2>Hello, this is a Modal Component</h2>
        <button>
          <FaTimes className="cross" onClick={() => setshowmodal(false)} />
        </button>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        magni iure maiores, esse asperiores iste.
      </p>
      <button onClick={() => setshowmodal(false)}>Close</button>
    </div>
  );
};

export default Modal;
