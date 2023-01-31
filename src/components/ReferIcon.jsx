import Tippy from "@tippyjs/react";
import { toast } from "react-toastify";
import "tippy.js/dist/tippy.css";
import "react-toastify/dist/ReactToastify.css";
const ReferIcon = (props) => {
  const handleClick = (e) => {
    let targetResult = e.target;
    let preVClass = targetResult.className;
    if (preVClass === "icon bx bxs-heart") {
      targetResult.classList.remove("bxs-heart");
      targetResult.classList.add("bx-heart");
      toast.success("Đã xóa bài hát khỏi thư viện");
    } else if (preVClass === "icon bx bx-heart") {
      targetResult.classList.remove("bx-heart");
      targetResult.classList.add("bxs-heart");
      toast.success("Đã thêm bài hát vào thư viện");
    }
  };
  return (
    <div className="level">
      {props?.data.map((item) => {
        return (
          <div className="level-item" key={item.id}>
            <Tippy content={item.title}>
              <button
                className="zm-btn zm-tooltip-btn"
                onClick={(e) => handleClick(e)}
              >
                <i className={`icon ${item.icon}`}></i>
              </button>
            </Tippy>
          </div>
        );
      })}
    </div>
  );
};

export default ReferIcon;
