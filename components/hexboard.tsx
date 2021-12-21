import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import BN from 'bn.js';
import * as React from 'react';
import { EvmLinkGroup } from './evmlinkGroup';
import { HexNum } from './hexnum';
import { Typography } from '@mui/material';

export const HexBoard = () => {
    const [hex, setHex] = React.useState('type hex string')

    console.log('original:', hex)
    let hexString = '';
    if(hex && hex != ''){
        try{
            if(hex.startsWith('0x')){
                console.log('jjj')
                const n = new BN(hex.substring(2), 'hex')
                const length = Math.ceil(hex.substring(2).length/2)*2
                console.log('afafa', length)
                hexString = n.toString('hex', length)
            }else{
                console.log('iii')
                const n = new BN(hex, 'hex')
                const length = Math.ceil(hex.length/2)*2
                console.log('afafa', length)
                hexString = n.toString('hex', length)
            }
        }catch{
            console.log('kkk')
            hexString = ''
        }
    }

    return (
        <Stack spacing={4}>
            <HexNum hexString={hexString} onChange={e => {
                    setHex(e.target.value)
                    console.log('onChange on hexboard')
                }
            }/>
            <Popup hexString={hexString} />
        </Stack>
    )
}

const Popup = (props: {hexString: string}) => {
    const length = Math.ceil(props.hexString.length/2);
    console.log('length:', length)
    console.log('hexValue:', props.hexString)

    if(length == 20){
        console.log('return address link')
        return (
            <Stack spacing={2} justifyContent="center" alignItems="center">
                <Typography variant="h4" gutterBottom component="div">
                    Maybe address?
                </Typography>
                <EvmLinkGroup type='address' data={props.hexString} />
            </Stack>
        )
    }
    if(length == 32){
        console.log('return tx link')
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