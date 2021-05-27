//constructor
class Music {
  constructor(song, artist, album, releasedate, genre) {
    this.song = song;
    this.artist = artist;
    this.album = album;
    this.releasedate = releasedate;
    this.genre = genre;
  }
}

//UI class:handle Ul tasks

class UL {
  static displaymusic() {
    const storedmusic = [
      {
        song: "Loyal",
        artist: "chris brown",
        album: "loyal",
        releasedate: 2010,
        genre: "pop",
      },
    ];
    const bestmusic = storedmusic;
    bestmusic.forEach((music) => UL.addMusicToList(music));
  }

  static addMusicToList(music) {
    const list = document.querySelector("#music-list");

    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${music.song}</td>
    <td>${music.artist}</td>
    <td>${music.album}</td>
    <td>${music.releasedate}</td>
    <td>${music.genre}</td>
    <td><a href="#" style="color:red; font-size:20px;">X</a></td>
    `;

    list.appendChild(row);
  }
}
//Display Music
document.addEventListener("DOMContentLoaded", UL.displaymusic);

//Add Music EVENT
document.querySelector("#form").addEventListener("submit", (e) => {
  //prevent actual submit

  e.preventDefault();

  //Get form values
  const song = document.querySelector("#song").value;
  const artist = document.querySelector("#artist").value;
  const album = document.querySelector("#album").value;
  const releasedate = document.querySelector("#release_date").value;
  const genre = document.querySelector("#genre").value;

  //initiate music
  const music = new Music(song, artist, album, releasedate, genre);

  //add book to Ul

  UL.addMusicToList(music);
});
