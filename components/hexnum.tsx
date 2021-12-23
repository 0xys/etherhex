import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import BN from 'bn.js'
import { Stack, Typography } from '@mui/material';
import { isNumberObject } from 'util/types';

export type OnChangeType = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

const nonNumRegex = /[^0-9]/;

export const HexNum = (props: { hexString: string, onChange: OnChangeType}) => {
    const hex = props.hexString

    let numFromHex: string = '';
    let hexFromNum: string = '';
    let is0xPrefix = false;
    if(hex && hex != ''){
        try{
            if(hex.startsWith('0x') || hex.startsWith('0X')){
                is0xPrefix = true
                const n = new BN(hex.substring(2), 'hex')
                numFromHex = n?.toString()
            }else{
                const n = new BN(hex, 'hex')
                numFromHex = n?.toString()
            }
        }catch{
            numFromHex = ''
        }
    }

    if(!is0xPrefix && hex !== '' && !hex.match(nonNumRegex)){
        const n = new BN(hex)
        hexFromNum = n.toString('hex')
    }
    const isHexError = numFromHex == '';

    return (
        <Stack spacing={2} justifyContent="center" alignItems="center">
            
            <TextField id="hex"
                error={isHexError}
                fullWidth
                label="hex or number"
                variant="outlined"
                onChange={e => {
                        console.log('onChange on hexnum')
                        props.onChange(e)
                    }
                }
                helperText={isHexError ? 'type hex or number' : ''}
            />
            <Typography variant='h6' gutterBottom component="div" fontFamily='Menlo, Monaco, Lucida Console'>
                { hexFromNum != '' ? `0x${hexFromNum}` : '' }
            </Typography>
            <Typography variant='h6' gutterBottom component="div" fontFamily='Menlo, Monaco, Lucida Console'>
                {numFromHex ?? ''}
            </Typography>
        </Stack>
    );
}