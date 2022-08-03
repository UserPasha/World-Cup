import React from 'react';
import {BaseType} from "./Test";

type PlayOffStatsPropsType = {
    winners: BaseType[]
    setPE: (obj: BaseType[]) => void
}
 const PlayOffStats: React.FC<PlayOffStatsPropsType> = ({winners, setPE}) => {



    const sortedX = winners.sort((a: BaseType, b: BaseType): number => a.oneEightWin <= b.oneEightWin ? 1 : -1)
    const setter = () => {
        setPE(sortedX)
    }
    return (
        <div>
            <button onClick={setter}> XXXXX</button>
        </div>
    );
};

export default PlayOffStats;