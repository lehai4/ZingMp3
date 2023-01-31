import { useState } from "react";
import { Link } from "react-router-dom";
import { Banner, AddPlayList, FakeSideBarOne, FakeSideBarTwo } from "../common";
const SideBar = () => {
  const [user, setUser] = useState("");
  const [active, setActive] = useState(0);
  return (
    <div className="zm-sidebar">
      <div className="zm-sidebar__wrapper">
        <div className="zm__navbar__brand">
          <button>
            <div className="zmp3-logo"></div>
          </button>
        </div>
        <nav className="zm__navbar zm__navbar__main">
          <ul className="zm__navbar__main__menu">
            {FakeSideBarOne.map((item, index) => (
              <li
                className={
                  active === index
                    ? `zm__navbar__main__menu__item zm__navbar__main__menu__item--active`
                    : `zm__navbar__main__menu__item`
                }
                key={index}
                title={item.title}
                onClick={() => setActive(index)}
              >
                <Link to={`${item.path}`}>
                  <i className={`icon ${item.icon}`}></i>

                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="line"></div>
        <div className="scroll">
          <div className="scroll-bar">
            <nav className="zm__navbar zm__navbar__main">
              <ul className="zm__navbar__main__menu">
                {FakeSideBarTwo.map((item) => (
                  <li
                    className="zm__navbar__main__menu__item"
                    key={item.id}
                    title={item.title}
                  >
                    <a href={item.path}>
                      <i className={`icon ${item.icon}`}></i>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {user === "" ? <Banner user={user} /> : <Banner user={user} />}
            <AddPlayList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
