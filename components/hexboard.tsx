import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import BN from 'bn.js';
import * as React from 'react';
import { EvmLinkGroup } from './evmlinkGroup';
import { HexNum } from './hexnum';
import { Typography } from '@mui/material';
import { AbiLink } from './abilink';
import styles from '../styles/Home.module.css'
import create from 'keccak';

export const HexBoard = () => {
    const [hex, setHex] = React.useState('type hex string')

    let hexString = '';
    if(hex && hex != ''){
        try{
            if(hex.startsWith('0x') || hex.startsWith('0X')){
                const n = new BN(hex.substring(2), 'hex')
                const length = Math.ceil(hex.substring(2).length/2)*2
                hexString = n.toString('hex', length)
            }else{
                const n = new BN(hex, 'hex')
                const length = Math.ceil(hex.length/2)*2
                hexString = n.toString('hex', length)
            }
        }catch{
            hexString = ''
        }
    }

    return (
        <Stack spacing={4}>
            <HexNum hexString={hex} onChange={e => {
                    setHex(e.target.value)
                }
            }/>
            <Popup hexString={hexString} />
        </Stack>
    )
}

const Popup = (props: {hexString: string}) => {
    const length = Math.ceil(props.hexString.length/2);

    if(length == 4){
        return (
            <AbiLink sig={props.hexString}/>
        )
    }
    if(length == 20){
        const checksumAddress = toChecksumAddress(props.hexString.toLowerCase())
        return (
            <Stack spacing={2} justifyContent="center" alignItems="center">
                <Typography variant="h4" gutterBottom component="div">
                    Maybe address?
                </Typography>
                <code className={styles.code}>{ checksumAddress }</code>
                <EvmLinkGroup type='address' data={props.hexString} />
            </Stack>
        )
    }
    if(length == 32){
        return (
            <Stack spacing={2} justifyContent="center" alignItems="center">
                <Typography variant="h4" gutterBottom component="div">
                    Maybe transaction?
                </Typography>
                <EvmLinkGroup type='hash' data={props.hexString} />
            </Stack>
        )
    }
    return (<div></div>)
}

const toChecksumAddress = (address: string): string => {
    let res = '0x'
    const hashed = create('keccak256').update(address).digest('hex')
    for(let i=0;i<address.length;i++){
        if(parseInt(hashed[i], 16) >= 8){
            res += address[i].toUpperCase()
        }else{
            res += address[i]
        }
    }
    return res;
}