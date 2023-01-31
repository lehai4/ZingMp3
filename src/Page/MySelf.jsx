import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { UilMusic } from "@iconscout/react-unicons";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { ReferPlayLists, ListPlaylist } from "../common";

const navBar = [
  { id: 0, title: "Bài hát", path: "/songs" },
  { id: 1, title: "podcast", path: "/podcast" },
  { id: 2, title: "album", path: "/album" },
  { id: 3, title: "mv", path: "/mv" },
];
const MySelf = () => {
  const data = useSelector((state) => state.songs.songs);
  const headerRef = useRef(null);
  const [active, setActive] = useState(0);
  const handleActive = (id) => {
    setActive(id);
  };

  const handleAddPlaylist = () => {
    toast.error("Xin lỗi chức năng chưa cập nhật!");
  };

  useEffect(() => {
    let navHeader = headerRef.current;
    let backgroundHeader = document.querySelector(".zm-header");
    navHeader.addEventListener("scroll", (e) => {
      if (e.target.scrollTop >= 20) {
        backgroundHeader.classList.add("is-sticky");
      } else {
        backgroundHeader.classList.remove("is-sticky");
      }
    });
  }, []);
  return (
    <div className="scroll">
      <div className="scroll-bar" style={{ marginTop: "0" }} ref={headerRef}>
        <div className="zm-main">
          <div className="wrapper">
            <div className="wrapper-header">
              <div className="text">Thư viện</div>
              <button className="zm-btn button">
                <FontAwesomeIcon icon={faPlay} className="icon" />
              </button>
            </div>
            <div className="wrapper-content">
              <h3 className="content-title">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textTransform: "uppercase",
                  }}
                >
                  Play list
                  <button className="zm-btn button" onClick={handleAddPlaylist}>
                    <FontAwesomeIcon icon={faPlus} className="icon" />
                  </button>
                </div>
                <a href="/allPlayList" className="more">
                  Tất cả
                  <FontAwesomeIcon icon={faAngleRight} className="icon" />
                </a>
              </h3>
              <div className="content-playlist">
                {ListPlaylist.map((item, i) => (
                  <ReferPlayLists item={item} key={i} />
                ))}
              </div>
            </div>
            <div className="wrapper-bottom">
              <nav className="zm-navbar">
                <ul className="zm-navbar__menu">
                  {navBar.map((nav) => (
                    <li className="zm-navbar__item" key={nav.id}>
                      <div
                        className={clsx(
                          `navbar-link`,
                          `${active === nav.id ? "active" : ""}`
                        )}
                        onClick={() => handleActive(nav.id)}
                      >
                        <a href={nav.path}>{nav.title}</a>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="general-select">
                <button className="zm-btn active">Yêu thích</button>
                <button className="zm-btn ">Đã tải lên</button>
              </div>
              <div className="zm-library-songs">
                <div className="select-header">
                  <div className="select-header-left">Bài hát</div>
                  <div className="select-header-middle">Album</div>
                  <div className="select-header-right">Thời gian</div>
                </div>
                <div className="list-select-songs">
                  {data.map((data, i) => (
                    <div className="item-song" data-target={`${i}`} key={i}>
                      <div className="media">
                        <div className="media-left">
                          <div className="song-prefix">
                            <UilMusic
                              size="140"
                              color="#61DAFB"
                              className="icon"
                            />
                          </div>
                          <div className="song-thumb">
                            <figure className="image">
                              <img src={data.image} alt={data.name} />
                            </figure>
                            <div className="opacity"></div>
                            <div className="icon-hover">
                              <FontAwesomeIcon icon={faPlay} className="icon" />
                            </div>
                          </div>
                          <div className="card-info">
                            <span className="song-title-item">
                              <span className="item-title title">
                                {data.name}
                              </span>
                            </span>
                            <h3 className="subtitle">{data.author}</h3>
                          </div>
                        </div>
                        <div className="media-content">
                          <span>{data.album}</span>
                        </div>
                        <div className="media-right"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySelf;
