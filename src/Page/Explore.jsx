import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  ReferPlayLists,
  playlist2,
  playlist3,
  playlist4,
  SliderCarousel,
  artistFavourite,
  ArtistFavourite,
} from "../common";
const Explore = () => {
  const headerRef = useRef(null);
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
      <main className="scroll-bar" style={{ marginTop: "0" }} ref={headerRef}>
        <div className="zm-main">
          <div className="wrapper-explore wrapper">
            <div className="slider-carousel">
              <SliderCarousel />
            </div>
            <div className="wrapper-content">
              <h3 className="content-title">
                <span>Gần Đây</span>
              </h3>
              <div className="content-playlist">
                {playlist2.map((item, i) => (
                  <ReferPlayLists item={item} key={i} />
                ))}
              </div>
            </div>
            <div className="wrapper-content">
              <h3 className="content-title">
                <span>Mới Phát Hành</span>

                <a href="/allPlayList" className="more">
                  Tất cả
                  <FontAwesomeIcon icon={faAngleRight} className="icon" />
                </a>
              </h3>
              <div className="general-select">
                <button className="zm-btn active">Bài hát</button>
                <button className="zm-btn ">Album</button>
              </div>
            </div>
            <div className="wrapper-content">
              <h3 className="content-title">
                <span>Lựa chọn hôm nay</span>
              </h3>
              <div className="content-playlist">
                {playlist3.map((item, i) => (
                  <ReferPlayLists item={item} key={i} />
                ))}
              </div>
            </div>
            <div className="wrapper-content mix-section">
              <h3 className="content-title">
                <span>Nghệ sĩ yêu thích</span>
              </h3>
              <div className="content-playlist">
                {artistFavourite.map((item, i) => (
                  <ArtistFavourite item={item} key={i} />
                ))}
              </div>
            </div>
            <div className="wrapper-content">
              <h3 className="content-title">
                <span></span>
                Nhạc mới mỗi ngày
              </h3>
              <div className="content-playlist">
                {playlist4.map((item, i) => (
                  <ReferPlayLists item={item} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="track-vertical">
          <div className="thumb-vertical"></div>
        </div>
      </main>
    </div>
  );
};

export default Explore;
