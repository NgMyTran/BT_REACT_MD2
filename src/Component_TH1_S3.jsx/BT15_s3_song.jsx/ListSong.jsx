// import InputSong from "./InputSong";

// export default function ListSong({ id, songName }) {
//   return (
//     <>
//       <InputSong />
//       <ul>
//         <li>
//           <p>Bài số {id}</p>
//           <p>{songName}</p>
//         </li>
//       </ul>
//     </>
//   );
// }

export default function ListSong({ songs, handleDelete }) {
  return (
    <div id="listSong">
      <ol>
        {songs?.map((song) => (
          <li key={song.id}>
            <span>{song.songName}</span>
            <button type="button" onClick={() => handleDelete(song.id)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
//?.optional chainig operator: if the value before the operator is null or undefined, the expression after the operator is not evaluated and the entire expression returns undefined.
