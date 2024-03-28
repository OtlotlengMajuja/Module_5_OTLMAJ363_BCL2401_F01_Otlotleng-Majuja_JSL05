// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "You Don't Know My Name", artist: "Alicia Keys", genre: "R&B" },
    { title: "Heaven Sent", artist: "Keyshia Cole", genre: "R&B" },
    { title: "Love Language", artist: "SZA", genre: "R&B" },
    { title: "Boy Bye", artist: "Ari Lennox", genre: "R&B" },
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Seven Rings", artist: "Ariana Grande", genre: "Pop" },
    { title: "Got Me Started", artist: "Troye Sivan", genre: "Pop" },
    { title: "Popular", artist: "The Weeknd", genre: "Pop" },
    { title: "On & On", artist: "Erykah Badu", genre: "Neo-Soul" },
    { title: "Nothing Even Matters", artist: "Ms. Lauryn Hill", genre: "Neo-Soul" },
    { title: "Cranes In the Sky", artist: "Solange", genre: "Neo-Soul" },
    { title: "Breathe", artist: "UMI", genre: "Neo-Soul" },
    { title: "FE!N", artist: "Travis Scott", genre: "Hip-hop" },
    { title: "NEVEREVER", artist: "Destroy Lonely", genre: "Hip-hop" },
    { title: "Purple Palm Trees", artist: "Jay Jody", genre: "Hip-hop" },
    { title: "K.K", artist: "Wordz", genre: "Hip-hop" },
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "R&B",
    "Drax": "Pop",
    "Rocket": "Neo-Soul",
    "Groot": "Hip-hop",
    // Add preferences for Drax, Rocket and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = Object.entries(guardians).map(([name, genre]) => {
        // Filter the songs array based on the specified genre
        const preferredGenre = songs.filter(song => song.genre === genre);

        // Generate a random playlist of songs
        const playlist = preferredGenre
            .sort(() => 0.5 - Math.random())  // This method sorts the elements of an array in place and returns the sorted array.
            .slice(0, 3);  // This method creates a shallow copy of a portion of an array.

        // Add guardian's name as the first element of the playlist
        playlist.unshift({ name }); //Adds an object containing name of the playlist to beginning of playlist array.

        return playlist;
    });

    // Call function to display playlists
    displayPlaylists(playlists);
}


// Helper function to display playlists
function displayPlaylists(playlists) {
    Object.entries(playlists).forEach(([guardian, playlist]) => {

        // Create a container div for playlists
        const playlistsDiv = document.createElement('div');
        playlistsDiv.id = 'playlists';

        // Loop through each playlist
        playlists.forEach((playlist) => {
            // Create a playlist container div
            const playlistDiv = document.createElement('div');
            playlistDiv.classList.add('playlist');

            // Create a title h1
            const title = document.createElement('h1');
            title.textContent = playlist[0].name + "'s Playlist";
            playlistDiv.appendChild(title)

            // Create an unordered list
            const list = document.createElement('ul');

            // Loop through each song in the playlist
            playlist.slice(1).forEach((song) => {
                // Create a list items
                const listItem = document.createElement('ul');

                // Set the song title and artist
                const songTitle = document.createElement("span");
                songTitle.textContent = `${song.title}`;
                songTitle.className = 'song-title';
                const songArtist = document.createElement('span');
                songArtist.textContent = `by ${song.artist}`;

            })

/* const guardianHeader = document.createElement("h1")
    guardianHeader.textContent = `${guardian}'s Playlist`;
    playlistDiv.appendChild(guardianHeader);

    const songList = document.createElement("ul");

    playlist.forEach(song => {
        const [artist, title] = song.split(' - ');
        const songItem = document.createElement("ul");
        songItem.classList.add("song");
        
        songTitle.classList.add("song-title");
        const artistName = document.createElement("span");
        artistName.textContent = ` by ${artist}`;
        songItem.appendChild(songTitle);
        songItem.appendChild(artistName);
        songList.appendChild(songItem);

    });

    playlistElement.appendChild(songList);

    document.body.appendChild(playlistElement);
})
}


// Generate playlists


// Call generatePlaylist and display the playlists for each Guardian


