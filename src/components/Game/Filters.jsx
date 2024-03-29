import React, { useEffect, useState } from "react";

import { genreService } from "../../services/genreService";
import { platformService } from "../../services/platformService";

import Alert from "../Alert";

const Filters = ({ handleGenre, handlePlatform }) => {
  const [platforms, setPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    platformService
      .getAll()
      .then((res) => {
        setPlatforms(res.data.results);
        console.log(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    genreService
      .getAll()
      .then((res) => {
        setGenres(res.data.results);
        console.log(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-white flex flex-col p-4 space-y-4 h-full">
      <div className="">
        <div className="font-bold text-lg">Filtrer</div>
      </div>

      <div>
        <div>Plateformes</div>
        <div className="flex flex-col space-y-1">
          {platforms.map((platform, index) => (
            <div className="flex items-center space-x-4" key={index}>
              <input
                type="checkbox"
                id={platform.name}
                name={platform.name}
                value={platform.id}
                onChange={(e) => handlePlatform(e.target.value)}
                className="w-5 h-5"
              />
              <label htmlFor={platform.name} className="text-yellow-500">
                {platform.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>Genre</div>
        <div className="flex flex-col space-y-1">
          {genres.map((genre, index) => (
            <div className="flex items-center space-x-4" key={index}>
              <input
                type="checkbox"
                id={genre.name}
                name={genre.name}
                value={genre.id}
                onChange={(e) => handleGenre(e.target.value)}
                className="w-5 h-5"
              />
              <label htmlFor={genre.name} className="text-yellow-500">
                {genre.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
