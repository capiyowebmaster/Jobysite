import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import michaelPic from "../Images/michael.jpg"
import prisonBreak from "../Images/pb.jpeg"
import musk from "../Images/musk.jpeg"
import limitless from "../Images/limitless.jpeg"


export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={limitless} alt="michaelPic"
      />
      <div className="info">
        <img
          src={prisonBreak}
        />
        <span className="desc">
          Helloo, Wellcome to  MOVIT  to share movies and
          any interesting videos to other people around the world
        All you need to get started is an acount. Register up there and move 
        To watch movies.

        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
