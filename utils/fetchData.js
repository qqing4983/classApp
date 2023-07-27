export async function getArtist(username) {
    const res = await fetch(`https://api.example.com/artist/${username}`)
    return res.json()
}

export async function getArtistAlbums(username) {
    const res = await fetch(`https://api.example.com/artist/${username}/albums`)
    return res.json()
}

