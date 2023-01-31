import { Fragment } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { ReferIcon, data1 } from "../common";
const PlayerDetails = (props) => {
  const { song, songs, idSong, handlePlaySong } = props;
  const obj = {
    status: false,
    data: [...data1],
  };
  return (
    <Fragment>
      <div className="scroll">
        <div className="scroll-bar">
          <div className="player-queue__list">
            {songs?.map((item) => (
              <div index={item.id} data-index={item.id} key={item.id}>
                <div
                  className={clsx(
                    `player-queue__list__item`,
                    `${
                      idSong === item.id && idSong === song?.id ? "active" : ""
                    }`
                  )}
                >
                  <div className="player-queue__list__item__content">
                    <div className="player-queue__list__item__content__left">
                      <div className="song-thumb">
                        <figure>
                          <img src={item?.image} alt={song?.name} />
                        </figure>
                        <div className="opacity"></div>
                        <div
                          className="icon-hover"
                          onClick={() => handlePlaySong(item.id)}
                        >
                          <FontAwesomeIcon icon={faPlay} className="icon" />
                        </div>
                      </div>
                      <div className="card-info">
                        <div className="card-info__title">
                          <span>{item?.name}</span>
                        </div>
                        <h3 className="card-info__singer">{item?.author}</h3>
                      </div>
                    </div>
                    <div className="player-queue__list__item__content__right">
                      <ReferIcon {...obj} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PlayerDetails;
