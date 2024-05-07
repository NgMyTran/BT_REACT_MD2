import { useState } from "react";

export default function InputSong({ addSongToList }) {
  return (
    <>
      <form onSubmit={addSongToList}>
        <input type="text" placeholder="Input song" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
