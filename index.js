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
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    const playlists = guardians.map(guardian => {
        const playlist = songs.filter(song => song.genre === guardian.preferredGenre);
        return {
            guardian: guardian.name,
            playlist: playlist
        };
    });

    return playlists;
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);
console.log(playlists)


