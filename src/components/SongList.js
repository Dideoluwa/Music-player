import React, { useState, useRef } from 'react'
import styles from './SongList.module.css'
import List from '../List'

function SongList() {
    let [play, setPlay] = useState(false)
    let [isPlaying, setIsPlaying] = useState(null)
    let [active, setActive] = useState([])
    // let [content , setContent] = useState([])
    // let ctrl = !isPlaying ? <p>&#9658;</p> : <p>&#8214;</p>
    const audio = useRef(null);
    return (
        <div>
            {
                List.map((list) => {
                    return (
                        <div key={list.id}>
                            <div
                                onClick={() => {
                                    const song = list.song;
                                    setActive(list)
                                    if (play === song) {
                                        isPlaying ? setActive(null) : setActive(list)
                                        isPlaying ? audio.current.pause() : audio.current.play();
                                        setIsPlaying(!isPlaying);
                                    } else {
                                        if (audio.current) {
                                            audio.current.pause();
                                        }
                                        setPlay(song);
                                        setIsPlaying(true);
                                        audio.current = new Audio(song);
                                        audio.current.play();
                                    }
                                }}>
                                <div className={`${active === list ? styles.active : styles.notActive}`}></div>
                            </div>
                            <h1>{list.name}</h1>
                            <h3>{list.title}</h3>
                            <img src={list.image} alt={list.name} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SongList