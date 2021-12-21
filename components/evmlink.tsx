import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export type EvmNetworkType = 'ether' | 'ropsten' | 'matic' | 'bsc' | 'xdai' | 'avax';
export type EvmLinkType = 'address' | 'hash';



export interface EvmLinkState {
    network: EvmNetworkType
    type: EvmLinkType
    data: string
}

export const EvmLink = (props: EvmLinkState) => {

    const [avatar, label, domain] = getInfo(props.network)
    const linkPath = getLinkPath(props.network, props.type)
    return (
        <Chip
            component='a'
            avatar={<Avatar>{avatar}</Avatar>}
            label={label}
            href={`https://${domain}/${linkPath}/0x${props.data}`}
            target="_blank"
            size = {props.network == 'ropsten' ? 'small' : 'medium'}
            variant="outlined"
            clickable
        />
    )
}

const getLinkPath = (network: EvmNetworkType, type: EvmLinkType): string => {
    if(type == 'address'){
        return 'address'
    }
    return 'tx'
}

const getInfo = (network: EvmNetworkType): [avatar: string, label: string, domain: string] => {
    if(network == 'ether'){
        return ['E', 'mainnet', 'etherscan.io'];
    }
    if(network == 'ropsten'){
        return ['r', 'ropsten', 'ropsten.etherscan.io'];
    }
    // if(network == 'matic'){
    //     return ['M', 'polygonscan'];
    // }
    // if(network == 'bsc'){
    //     return ['B', 'bscscan'];
    // }
    // if(network == 'xdai'){
    //     return ['X', 'xDaiscan'];
    // }
    // if(network == 'avax'){
    //     return ['A', 'avaxscan'];
    // }
    return ['E','etherscan', 'etherscan.io'];
}