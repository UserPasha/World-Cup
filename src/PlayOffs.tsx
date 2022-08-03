import React from 'react';
import {BaseType} from "./Test";
import MatchPO from "./MatchPO";
import PlayOffStats from "./PlayOffStats";


type PlayOffsProrsType = {
    A: BaseType
    B: BaseType
    setOneEight: (obj: BaseType[]) => void
    setPE: (obj: BaseType[]) => void
}

const PlayOffs: React.FC<PlayOffsProrsType> = ({A, B,  setOneEight, setPE}) => {

    return (
        <div>
            <MatchPO A={A} B={B} setOneEight={setOneEight}/>
            <PlayOffStats winners={[A,B]} setPE={setPE}/>
        </div>
    );
};

export default PlayOffs;