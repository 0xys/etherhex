import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import BN from 'bn.js'
import { Stack, Typography } from '@mui/material';

export type OnChangeType = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

export const HexNum = (props: { hexString: string, onChange: OnChangeType}) => {
    const hex = props.hexString

    let numFromHex: string = '';
    if(hex && hex != ''){
        try{
            if(hex.startsWith('0x')){
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

    const isHexError = numFromHex == '';

    return (
        <Stack spacing={2} justifyContent="center" alignItems="center">
            
            <TextField id="hex"
                error={isHexError}
                fullWidth
                label="Hex"
                variant="outlined"
                onChange={e => {
                        console.log('onChange on hexnum')
                        props.onChange(e)
                    }
                }
                helperText={isHexError ? 'not hex string' : ''}
            />
            <Typography variant='h6' gutterBottom component="div" fontFamily='Menlo, Monaco, Lucida Console'>
                {numFromHex ?? ''}
            </Typography>
        </Stack>
        // <Box
        //     component="form"
        //     sx={{
        //         '& > :not(style)': { m: 1, width: '50ch' },
        //     }}
        //     noValidate
        //     autoComplete="off"
        // >
        //     <TextField id="hex"
        //         error={isHexError}
        //         fullWidth
        //         label="Hex"
        //         variant="outlined"
        //         onChange={e => {
        //                 console.log('onChange on hexnum')
        //                 props.onChange(e)
        //             }
        //         }
        //         helperText={isHexError ? 'not hex string' : ''}
        //     />
        //     <p>{numFromHex ?? ''}</p>
        // </Box>
    );
}