import React, {useState} from 'react';
import {BaseType} from "./Test";

type PlayOffStatsPropsType = {
    winners: BaseType[]
    setWinners: (obj: BaseType[]) => void
}
 const PlayOffStats: React.FC<PlayOffStatsPropsType> = ({winners, setWinners}) => {


     const [clicker, setClicker] = useState(false)
    const sortedX = winners.sort((a: BaseType, b: BaseType): number => a.playOffPoints <= b.playOffPoints ? 1 : -1)
    const setter = () => {
        setWinners(sortedX)
        console.log(sortedX)
        setClicker(true)
    }
    return (

            <button onClick={setter} disabled={clicker}> &#10148; </button>

    );
};

export default PlayOffStats;