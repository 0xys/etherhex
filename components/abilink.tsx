import * as React from 'react';
import styles from '../styles/Home.module.css'

export const AbiLink = (props: {sig: string}) => {
    return (
        <a href={`https://www.4byte.directory/signatures/?bytes4_signature=0x${props.sig}`}
            className={styles.card}
            target='_blank'
            rel="noreferrer"
            >
            <h3>Maybe ABI signature?</h3>
            <p>0x{props.sig} &rarr;</p>
        </a>
    )
}