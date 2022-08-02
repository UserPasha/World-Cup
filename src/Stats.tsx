import React from 'react';
import {BaseType} from "./Test";
import style from "./Stats.module.css"
type StatsType = {
    stats: BaseType[],
    setPlay: (obj: BaseType[]) => void
}
const Stats = (Props: StatsType) => {


    const SuperMegaSort = Props.stats.sort(function (a, b) {

        if (a.points === b.points) {
            return (b.scored - b.conceded) - (a.scored - a.conceded)
        }
        if ((a.scored - a.conceded) === (b.scored - b.conceded)) {
            return b.scored - a.scored
        }
        if (a.scored === b.scored) {
            return b.wins - a.wins
        }
        return a.points < b.points ? 1 : -1
    })

    const sortedX = Props.stats.sort((a: BaseType, b: BaseType): number => a.points <= b.points ? 1 : -1)

    const y = sortedX.map(m => <tr key={m.rating + new Date().getMilliseconds()}><td className={style.tdCountryName}>{m.name}</td>
        <td>{m.games}/</td> <td>{m.points}/</td>
        <td>{m.wins}/</td> <td>{m.draws}/</td> <td>{m.lost}/</td> <td>{m.scored}:</td>
        <td>{m.conceded}/</td>
        <td>{m.scored - m.conceded}</td></tr>)
    // const y = sortedX.map(m => <div key={m.rating + new Date().getMilliseconds()}><span>{m.name}</span>
    //     <span>{m.games}/</span> <span>{m.points}/</span>
    //     <span>{m.wins}/</span> <span>{m.draws}/</span> <span>{m.lost}/</span> <span>{m.scored}:</span>
    //     <span>{m.conceded}/</span>
    //     <span>{m.scored - m.conceded}</span></div>)
    const GoTolayOff = () => {
        Props.setPlay(sortedX)
    }
    const AllGamesPlayed = Props.stats[0].games !== 3 || Props.stats[1].games !== 3 || Props.stats[2].games !== 3 || Props.stats[3].games !== 3

    return (
        <div className={style.StatsWrapper}>

            <table>
                {/*<tr>*/}
                {/*    <th></th>*/}
                {/*    <th></th>*/}
                {/*</tr>*/}
                {y}
            </table>

            <button onClick={GoTolayOff} disabled={AllGamesPlayed}>Go PlayOFF</button>


        </div>
    );
};

export default Stats;