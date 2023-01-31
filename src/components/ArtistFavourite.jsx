import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { ReferIcon, data1 } from "../common";
const ArtistFavourite = (props) => {
  const { item, i } = props;
  const obj = { data: [...data1] };
  return (
    <div
      className={`item-artist item-artist-${item.id}`}
      data-target={item.id}
      key={i}
    >
      <div className="zm-card">
        <div className="zm-card-img">
          <figure className="image">
            <img src={item.imgageMain} alt={item.artist} />
          </figure>
          <div className="card-hover">
            <div className="card-hover__content">
              <div className="hover_lr">
                <ReferIcon {...obj} />
              </div>
              <div className="hover__between">
                <button className="zm-btn ">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="icon fill"
                    title={item.title}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="blur-bg"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%, rgb(22, 43, 68))",
          }}
        ></div>
        <div className="mix-content">
          <h3 className="title">
            <span minifontsize="19px">{item.artist}</span>
          </h3>
          <div className="thumbs">
            {item.imageArr.map((item, i) => (
              <div className="thumb-item" key={i}>
                <figure className="image">
                  <img src={item} alt="" />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistFavourite;
