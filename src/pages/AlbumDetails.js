import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

export const AlbumDetails = () => {
    const { albumId } = useParams ()
    const [albumInfo, setAlbuminfo] = useState([])

    useEffect(() => {
        fetch(`https://theaudiodb.com/api/v1/json/1/album.php?m=${albumId}`)
        .then((response) => response.json())
        .then((json) => {
            setAlbuminfo(json.album)
        })
    }, [albumId])

    return (
        <div>
            {albumInfo.map((album) => (
                <div key={album.idAlbum}>
                    <img src={album.strAlbumThumb} alt={album.strAlbum}/>
                    <h1>{album.strAlbum}</h1>
                    <h2>released year: {album.intYearReleased}</h2>
                </div>
            ))}
        </div>
    )

}