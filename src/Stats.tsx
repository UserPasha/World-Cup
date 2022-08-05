import React, {useState} from 'react';
import {BaseType} from "./Test";
import style from "./Stats.module.css"
import emblem from "./Images/Mini/emblem.png"

type StatsType = {
    stats: BaseType[],
    setToSortedArray: (obj: BaseType[]) => void
}
const Stats = (Props: StatsType) => {

    const [clicker, setClicker] = useState(false)
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

    const y = sortedX.map(m =>
        <tr key={m.rating + new Date().getMilliseconds()}>
            <td className={style.tdImage}><img src={m.image}/></td>
            <td className={style.tdCountryName}>{m.name}</td>
            <td className={style.tdItem}>{m.games}</td>
            <td className={style.tdItem}>{m.points}</td>
            <td className={style.tdItem}>{m.wins}</td>
            <td className={style.tdItem}>{m.draws}</td>
            <td className={style.tdItem}>{m.lost}</td>
            <td className={style.tdItem}>{m.scored}</td>
            <td className={style.tdItem}>{m.conceded}</td>
            <td className={style.tdItem}>{m.scored - m.conceded}</td>
        </tr>)
    // const y = sortedX.map(m => <div key={m.rating + new Date().getMilliseconds()}><span>{m.name}</span>
    //     <span>{m.games}/</span> <span>{m.points}/</span>
    //     <span>{m.wins}/</span> <span>{m.draws}/</span> <span>{m.lost}/</span> <span>{m.scored}:</span>
    //     <span>{m.conceded}/</span>
    //     <span>{m.scored - m.conceded}</span></div>)
    const GoTolayOff = () => {
        Props.setToSortedArray(sortedX)
        setClicker(true)
    }
    const AllGamesPlayed = Props.stats[0].games !== 3 || Props.stats[1].games !== 3 || Props.stats[2].games !== 3 || Props.stats[3].games !== 3

    return (
        <div className={style.StatsWrapper}>

            <table>
                <thead>
                <tr>
                    <th></th>
                    <th className={style.thCountryName}>Country</th>
                    <th className={style.thItem}>Ga</th>
                    <th className={style.thItem}>P</th>
                    <th className={style.thItem}>W</th>
                    <th className={style.thItem}>D</th>
                    <th className={style.thItem}>L</th>
                    <th className={style.thItem}>Sco</th>
                    <th className={style.thItem}>Con</th>
                    <th className={style.thItem}>Dif</th>
                </tr>
                </thead>
                <tbody>
                {y}
                </tbody>
            </table>

            <button onClick={GoTolayOff} disabled={AllGamesPlayed || clicker}>Go PlayOFF</button>
            <div className={style.CupLogo}>
                <img src={emblem}/>
            </div>

        </div>
    );
};

export default Stats;