import * as React from 'react';
import { EvmLink, EvmLinkState, EvmLinkType } from './evmlink';
import Stack from '@mui/material/Stack';

export const EvmLinkGroup = (props: {type: EvmLinkType, data: string}) => {
    return (
        <Stack direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            <EvmLink network='ether' type={props.type} data={props.data} />
            <EvmLink network='ropsten' type={props.type} data={props.data} />
        </Stack>
    )
}