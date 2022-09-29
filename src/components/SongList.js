import React, { useState, useRef } from 'react'
import styles from './SongList.module.css'
import List from '../List'

function SongList() {
    let [play, setPlay] = useState(false)
    let [isPlaying, setIsPlaying] = useState(null)
    let [active, setActive] = useState([])
    const audio = useRef(null);
    return (
        <div className={styles.body}>
            {
                List.map((list) => {
                    return (
                        <div className={styles.content} key={list.id}
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
                            <div className={styles.body_content}>
                                <div
                                    className={styles.button}
                                >
                                    <div className={`${active === list ? styles.active : styles.notActive}`}></div>
                                </div>
                                <div className={styles.wrapper}>
                                    <img src={list.image} alt={list.name} />
                                </div>
                            </div>
                            <div className={styles.title}>
                                <h1>{list.name}</h1>
                                <h3>{list.title}</h3>
                            </div>
                            <div className={styles.duration}>
                                <h4>{list.duration}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SongList