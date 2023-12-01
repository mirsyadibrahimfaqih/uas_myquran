import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMosque } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading";
import HeaderSection from "./HeaderSection";
import ItemAyat from "../shared/ItemAyat";
import { Utils } from "../../utils";

function RightSection({
  detailSurah,
  loadingDetail,
  audioUrl,
  currentVerse,
  onVerseChange
}) {
  const [onBookmark, setOnBookmark] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState(null);

  function setBookmark(value) {
    const bookmark = Utils.getBookmark();

    if (bookmark && bookmark["id"] === value.id) {
      setOnBookmark({});
      return Utils.removeBookmark();
    }

    Utils.setBookmark({ ...value, namaSurah: detailSurah.nama_latin });
    setOnBookmark({ ...value, namaSurah: detailSurah.nama_latin });
  }

  function isNotEmpty() {
    return Object.keys(detailSurah).length > 0;
  }

  const handleAudioToggle = () => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.pause();
      } else {
        audioRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    const nextVerse = currentVerse + 1;
    if (nextVerse <= detailSurah.ayat.length) {
      onVerseChange(nextVerse);
    }
  };

  useEffect(() => {
    const bookmark = Utils.getBookmark();
    if (bookmark) setOnBookmark(bookmark);

    return () => {
      if (audioRef) {
        audioRef.pause();
        audioRef.currentTime = 0;
      }
    };
  }, [audioRef]);

  return (
    <div className="flex">
      <div className="basis-3/4 flex flex-col">
        {loadingDetail ? <Loading /> : <></>}
        {isNotEmpty() ? (
          <>
            <HeaderSection namaSurah={detailSurah.nama_latin} />

            {/* Audio Player */}
            {audioUrl && (
              <div className="flex items-center">
                <audio
                  controls
                  className="my-4 mr-4 "
                  src={`${audioUrl}#${currentVerse}`}
                  ref={(audio) => setAudioRef(audio)}
                  onEnded={handleAudioEnded}
                >
                  Your browser does not support the audio tag.
                </audio>
                <button
                  className={`bg-blue-500 text-white px-4 py-2 rounded ${
                    isPlaying ? "bg-red-500" : ""
                  }`}
                  onClick={handleAudioToggle}
                  title={`Click to ${isPlaying ? "Pause" : "Play"}`}
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>
            )}

            {/* List Ayat */}
            <div className="h-full w-full overflow-y-auto">
              {detailSurah.ayat.map((data, index) => (
                <ItemAyat
                  key={index}
                  data={data}
                  setBookmark={setBookmark}
                  onBookmark={onBookmark}
                  showIconBookmark={true}
                  onVerseClick={() => onVerseChange(index + 1)}
                />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default RightSection;
