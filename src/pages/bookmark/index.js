import { useEffect, useState } from "react";
import ItemAyat from "../../components/shared/ItemAyat";
import { Utils } from "../../utils";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    position: "relative",
    width: "90%", // Menggunakan persentase untuk responsif
    maxWidth: "800px", // Menetapkan lebar maksimum
    height: "auto", // Menggunakan tinggi otomatis
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  cardHeader: {
    padding: "16px",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#4CAF50",
    color: "#fff",
  },
  cardBody: {
    padding: "16px",
    position: "relative",
    color: "#000", // Warna teks default (mode terang)
  },
  removeButton: {
    cursor: "pointer",
    position: "absolute",
    bottom: "8px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "white",
    transition: "transform 0.3s ease-in-out",
  },
  emptyBookmark: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#4CAF50",
    fontWeight: "bold",
  },
};

function Bookmark({ isDarkMode }) {
  const [onBookmark, setOnbookmark] = useState({});

  useEffect(() => {
    const bookmark = Utils.getBookmark();
    if (bookmark) setOnbookmark(bookmark);
  }, []);

  function removeBookmark() {
    setOnbookmark({});
    Utils.removeBookmark();
  }

  return (
    <div style={styles.container}>
      {Object.keys(onBookmark).length > 0 ? (
        <div style={{ ...styles.card, backgroundColor: isDarkMode ? "#333" : "#fff" }}>
          <div style={{ ...styles.cardHeader, backgroundColor: isDarkMode ? "#333" : "#4CAF50" }}>
            {onBookmark.namaSurah}
          </div>
          <div style={{ ...styles.cardBody, color: isDarkMode ? "#fff" : "#000" }}>
            <ItemAyat
              data={onBookmark}
              onBookmark={onBookmark}
              setBookmark={() => {}}
            />
            <div
              style={{ ...styles.removeButton }}
              onClick={() => removeBookmark()}
            >
              <img src="remove.png" alt="remove.png" width={40} height={40} />
            </div>
          </div>
        </div>
      ) : (
        <div style={styles.emptyBookmark}>
          Bookmark kosong.
        </div>
      )}
    </div>
  );
}

export default Bookmark;
