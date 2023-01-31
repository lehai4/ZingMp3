import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { ReferIcon, data1 } from "../common";
const ReferPlayLists = (props) => {
  const { item, i } = props;
  const obj = { data: [...data1] };
  return (
    <React.Fragment>
      <div
        className={`item-playlist item-playlist-${item.id}`}
        data-target={item.id}
        key={i}
      >
        <div className="zm-card-img">
          <div className="card-hover">
            <div className="card-hover__content">
              <div className="hover_lr">
                <ReferIcon {...obj} />
              </div>
              <div className="hover__between">
                <button className="zm-btn">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="icon fill"
                    title={item.title}
                  />
                </button>
              </div>
            </div>
          </div>
          <figure className="item-playlist__img">
            <img src={item.imageUrl} alt="" />
          </figure>
        </div>
        <div className="content">
          <span className="title">{item.title}</span>
          {item.subtitle && <span className="subtitle">{item.subtitle}</span>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReferPlayLists;
