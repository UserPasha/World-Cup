import React from 'react';
import {BaseType} from "./Test";

type StatsType = {
    stats: BaseType[],
}
 const Stats = (Props: StatsType) => {


const SuperMegaSort = Props.stats.sort(function (a,b){

    if(a.points===b.points){
        return (b.scored - b.conceded) - (a.scored - a.conceded)
    }
     if((a.scored - a.conceded) === (b.scored - b.conceded)){
        return b.scored - a.scored
    }
     if(a.scored === b.scored){
         return a.wins - b.wins
     }
     return a.points<b.points ? 1 : -1
})

    const sortedX = Props.stats.sort((a: BaseType, b: BaseType): number => a.points <= b.points ? 1 : -1 )

     const y = sortedX.map(m => <div><span>{m.name}</span> <span>{m.games}/</span> <span>{m.points}/</span>
        <span>{m.wins}/</span> <span>{m.draws}/</span> <span>{m.lost}/</span> <span>{m.scored}:</span>
        <span>{m.conceded}/</span>
        <span>{m.scored - m.conceded}</span></div>)


    return (
        <div>
            ____

            -----
            {y}

            ___
        </div>
    );
};

export default Stats;