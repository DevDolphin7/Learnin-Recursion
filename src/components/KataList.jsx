import { Link } from "react-router-dom";
import { useState } from "react";

function KataList({ katas }) {
  const [codePreview, setCodePreview] = useState(null);

  const handleHover = ({ target: { textContent } }) => {
    katas.forEach((kata) => {
      if (kata.name === textContent) {
        setCodePreview(kata.image);
      }
    });
  };

  const handleRemoveHover = () => {
    setCodePreview(null);
  };

  return (
    <>
      <div className="kata-list">
        <ul>
          {katas.map((kata, index) => (
            <li key={index}>
              <Link to={kata.url}>
                <p onMouseOver={handleHover} onMouseOut={handleRemoveHover}>
                  {kata.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {codePreview ? (
        <div className="preview-image">
          <img src={codePreview}></img>
        </div>
      ) : null}
    </>
  );
}

export default KataList;
