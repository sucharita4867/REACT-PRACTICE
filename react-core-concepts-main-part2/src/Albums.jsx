import { use } from "react";

export default function Albums({ albumsPromise }) {
  const albums = use(albumsPromise);

  return (
    <div className="card">
      <h2>Albums:{albums.length}</h2>
    </div>
  );
}
