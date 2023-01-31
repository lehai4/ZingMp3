import AudioPlayer from "react-h5-audio-player";
import { ReferIcon, data1 } from "../common";
const PlayerControls = (props) => {
  const { song, handleNextSong, handlePrevSong, handleNext } = props;
  const obj = {
    data: [...data1],
  };
  return (
    <div className="player-controls__container">
      <div className="player-controls__left">
        <div className="media">
          <div className="media-left">
            <figure className="image">
              <img src={song?.image} alt={song?.name} />
            </figure>
          </div>
          <div className="media-content">
            <span className="song-title-item">
              <span className="item-title title">{song?.name}</span>
            </span>
            <h3 className="subtitle">{song?.author}</h3>
          </div>
          <div className="media-right">
            <ReferIcon {...obj} />
          </div>
        </div>
      </div>
      <div className="player-controls__player-bar">
        <AudioPlayer
          className="player-music"
          src={`${song?.url}`}
          layout="stacked-reverse"
          showSkipControls={true}
          showJumpControls={false}
          onClickNext={handleNextSong}
          onClickPrevious={handlePrevSong}
          autoPlayAfterSrcChange={true}
          autoPlay={true}
          onEnded={() => handleNext(true)}
        />
      </div>
      <div className="player-controls__right"></div>
    </div>
  );
};

export default PlayerControls;
