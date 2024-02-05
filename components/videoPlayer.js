import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styles from "./videoPlayer.module.css";

const VideoPlayer = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient){
        return null;
    }

  //video path
  let videosrc = "/images/vid.mp4";

  return (
    <div className={styles.videoContainer}>
      <ReactPlayer
      className={styles.reactPlayer}
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;