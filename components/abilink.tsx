import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
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