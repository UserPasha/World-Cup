import React, {useState} from 'react';
import style from "./Test.module.css"
import Group from "./Group";
import SaudiArabia from "./Images/Mini/SaudiArabia.png"
import Argentina from "./Images/Mini/Argentina.png"
import Australia from "./Images/Mini/Australia.png"
import Belgium from "./Images/Mini/Belgium.png"
import Brazil from "./Images/Mini/Brazil.png"
import Cameroon from "./Images/Mini/Cameroon.png"
import Canada from "./Images/Mini/Canada.png"
import CostaRica from "./Images/Mini/CostaRica.png"
import Croatia from "./Images/Mini/Croatia.png"
import Denmark from "./Images/Mini/Denmark.png"
import Ecuador from "./Images/Mini/Ecuador.png"
import England from "./Images/Mini/England.png"
import France from "./Images/Mini/France.png"
import Germany from "./Images/Mini/Germany.png"
import Ghana from "./Images/Mini/Ghana.png"
import Iran from "./Images/Mini/Iran.png"
import SouthKorea from "./Images/Mini/SouthKorea.png"
import Mexico from "./Images/Mini/Mexico.png"
import Morocco from "./Images/Mini/Morocco.png"
import Netherlands from "./Images/Mini/Netherlands.png"
import Poland from "./Images/Mini/Poland.png"
import Portugal from "./Images/Mini/Portugal.png"
import Qatar from "./Images/Mini/Qatar.png"
import Senegal from "./Images/Mini/Senegal.png"
import Serbia from "./Images/Mini/Serbia.png"
import Spain from "./Images/Mini/Spain.png"
import Switzerland from "./Images/Mini/Switzerland.png"
import Tunisia from "./Images/Mini/Tunisia.png"
import Uruguay from "./Images/Mini/Uruguay.png"
import USAImage from "./Images/Mini/USA.png"
import Japan from "./Images/Mini/Japan.png"
import Wales from "./Images/Mini/Wales.png"
import Logo from "./Images/Mini/emblem.png"
import PlayOff from "./PlayOff";
import MatchPO from "./MatchPO";

export  type BaseType = {
    name: string
    rating: number
    games: number
    points: number
    wins: number
    draws: number
    lost: number
    scored: number
    conceded: number
    difference: number
    image: string
    bigBlurImage?: string
    playOffPoints: number
}
export const ARA: BaseType = {
    name: "Saudi Arabia",
    rating: 53,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: SaudiArabia,
    playOffPoints: 0

}
export const ARG: BaseType = {
    name: "Argentina",
    rating: 89,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Argentina,
    playOffPoints: 0
}
export const AST: BaseType = {
    name: "Australia",
    rating: 60,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Australia,
    playOffPoints: 0
}
export const BEL: BaseType = {
    name: "Belgium",
    rating: 89,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Belgium,
    playOffPoints: 0
}
export const BRA: BaseType = {
    name: "Brasil",
    rating: 92,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Brazil,
    playOffPoints: 0
}
export const CAM: BaseType = {
    name: "Cameroon",
    rating: 60,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Cameroon,
    playOffPoints: 0
}
export const CAN: BaseType = {
    name: "Canada",
    rating: 59,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Canada,
    playOffPoints: 0
}
export const COS: BaseType = {
    name: "Costa Rica",
    rating: 61,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: CostaRica,
    playOffPoints: 0
}
export const CRO: BaseType = {
    name: "Croatia",
    rating: 78,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Croatia,
    playOffPoints: 0
}
export const DAN: BaseType = {
    name: "Denmark",
    rating: 83,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Denmark,
    playOffPoints: 0
}
export const ECU: BaseType = {
    name: "Ecuador",
    rating: 59,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Ecuador,
    playOffPoints: 0
}
export const ENG: BaseType = {
    name: "England",
    rating: 87,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: England,
    playOffPoints: 0
}
export const FRA: BaseType = {
    name: "France",
    rating: 89,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: France,
    playOffPoints: 0
}
export const GER: BaseType = {
    name: "Germany",
    rating: 83,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Germany,
    playOffPoints: 0
}
export const GHA: BaseType = {
    name: "Ghana",
    rating: 51,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Ghana,
    playOffPoints: 0
}
export const IRN: BaseType = {
    name: "Iran",
    rating: 68,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Iran,
    playOffPoints: 0
}
export const KOR: BaseType = {
    name: "South Korea",
    rating: 66,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: SouthKorea,
    playOffPoints: 0
}
export const MEX: BaseType = {
    name: "Mexico",
    rating: 81,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Mexico,
    playOffPoints: 0
}
export const MOR: BaseType = {
    name: "Morocco",
    rating: 68,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Morocco,
    playOffPoints: 0
}
export const NET: BaseType = {
    name: "Netherlands",
    rating: 84,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Netherlands,
    playOffPoints: 0
}
export const POL: BaseType = {
    name: "Poland",
    rating: 67,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Poland,
    playOffPoints: 0
}
export const POR: BaseType = {
    name: "Portugal",
    rating: 83,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Portugal,
    playOffPoints: 0
}
export const QUA: BaseType = {
    name: "Qatar",
    rating: 58,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Qatar,
    playOffPoints: 0
}
export const SEN: BaseType = {
    name: "Senegal",
    rating: 73,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Senegal,
    playOffPoints: 0
}
export const SER: BaseType = {
    name: "Serbia",
    rating: 67,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Serbia,
    playOffPoints: 0
}
export const SPA: BaseType = {
    name: "Spain",
    rating: 86,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Spain,
    playOffPoints: 0
}
export const SWI: BaseType = {
    name: "Switzerland",
    rating: 75,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Switzerland,
    playOffPoints: 0
}
export const TUN: BaseType = {
    name: "Tunisia",
    rating: 66,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Tunisia,
    playOffPoints: 0
}
export const URU: BaseType = {
    name: "Uruguay",
    rating: 81,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Uruguay,
    playOffPoints: 0
}
export const USA: BaseType = {
    name: "United States",
    rating: 78,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: USAImage,
    playOffPoints: 0
}
export const JPN: BaseType = {
    name: "Japan",
    rating: 67,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Japan,
    playOffPoints: 0
}
export const WAL: BaseType = {
    name: "Wales",
    rating: 72,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Wales,
    playOffPoints: 0
}
export const TES: BaseType = {
    name: "Country",
    rating: 0,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Logo,
    playOffPoints: 0
}

const BLR: BaseType = {
    name: "Belarus",
    rating: 94,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Wales,
    playOffPoints: 0
}
const EST: BaseType = {
    name: "Estonia",
    rating: 93,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0,
    image: Wales,
    playOffPoints: 0
}
const Test = () => {


    const [stats, setStats] = useState<BaseType[]>([TES, TES])
    const [oneEight, setOneEight] = useState<BaseType[]>([TES, TES])
    const [a1, setA1] = useState<BaseType[]>([TES, TES])
    const [b1, setB1] = useState<BaseType[]>([TES, TES])
    const [c1, setC1] = useState<BaseType[]>([TES, TES])
    const [d1, setD1] = useState<BaseType[]>([TES, TES])
    const [e1, setE1] = useState<BaseType[]>([TES, TES])
    const [f1, setF1] = useState<BaseType[]>([TES, TES])
    const [g1, setG1] = useState<BaseType[]>([TES, TES])
    const [h1, setH1] = useState<BaseType[]>([TES, TES])

    const [pE, setPE] = useState<BaseType[]>([TES, TES])
    const [pE2, setPE2] = useState<BaseType[]>([TES, TES])
    const [pE3, setPE3] = useState<BaseType[]>([TES, TES])
    const [pE4, setPE4] = useState<BaseType[]>([TES, TES])
    const [pE5, setPE5] = useState<BaseType[]>([TES, TES])
    const [pE6, setPE6] = useState<BaseType[]>([TES, TES])
    const [pE7, setPE7] = useState<BaseType[]>([TES, TES])
    const [pE8, setPE8] = useState<BaseType[]>([TES, TES])

    const [q, setQ] = useState<BaseType[]>([TES, TES])
    const [q1, setQ1] = useState<BaseType[]>([TES, TES])
    const [q2, setQ2] = useState<BaseType[]>([TES, TES])
    const [q3, setQ3] = useState<BaseType[]>([TES, TES])

    const [semi, setSemi] = useState<BaseType[]>([TES, TES])
    const [semi2, setSemi2] = useState<BaseType[]>([TES, TES])

    const [final, setFinal] = useState<BaseType[]>([TES, TES])
    const [final2, setFinal2] = useState<BaseType[]>([TES, TES])

    return (
        <>

            <div className={style.AppWrapper}>

                <Group A={SEN} B={NET} C={QUA} D={ECU} setStats={setStats} setToSortedArray={setA1} title={"A"}/>
                <Group A={ENG} B={IRN} C={USA} D={WAL} setStats={setStats} setToSortedArray={setB1} title={"B"}/>
                <Group A={ARG} B={ARA} C={MEX} D={POL} setStats={setStats} setToSortedArray={setC1} title={"C"}/>
                <Group A={DAN} B={TUN} C={FRA} D={AST} setStats={setStats} setToSortedArray={setD1} title={"D"}/>
                <Group A={GER} B={JPN} C={SPA} D={COS} setStats={setStats} setToSortedArray={setE1} title={"E"}/>
                <Group A={MOR} B={CRO} C={BEL} D={CAN} setStats={setStats} setToSortedArray={setF1} title={"F"}/>
                <Group A={SWI} B={CAM} C={BRA} D={SER} setStats={setStats} setToSortedArray={setG1} title={"G"}/>
                <Group A={URU} B={KOR} C={POR} D={GHA} setStats={setStats} setToSortedArray={setH1} title={"H"}/>
                {/*<PlayOffs A={BLR} B={EST} setOneEight={setOneEight} setPE={setPE}/>*/}


                <PlayOff title={"1 / 8 FINAL"}>

                    <MatchPO A={a1[0]} B={b1[1]} setStats={setStats} setWinners={setPE}/>
                    <MatchPO A={c1[0]} B={d1[1]} setStats={setStats} setWinners={setPE2}/>
                    <MatchPO A={d1[0]} B={c1[1]} setStats={setStats} setWinners={setPE3}/>
                    <MatchPO A={b1[0]} B={a1[1]} setStats={setStats} setWinners={setPE4}/>
                    <MatchPO A={e1[0]} B={f1[1]} setStats={setStats} setWinners={setPE5}/>
                    <MatchPO A={g1[0]} B={h1[1]} setStats={setStats} setWinners={setPE6}/>
                    <MatchPO A={f1[0]} B={e1[1]} setStats={setStats} setWinners={setPE7}/>
                    <MatchPO A={h1[0]} B={g1[1]} setStats={setStats} setWinners={setPE8}/>
                </PlayOff>


                <PlayOff title={"QUARTER-FINAL"}>
                    <MatchPO A={pE5[0]} B={pE6[0]} setStats={setStats} setWinners={setQ}/>
                    <MatchPO A={pE[0]} B={pE2[0]} setStats={setStats} setWinners={setQ1}/>
                    <MatchPO A={pE7[0]} B={pE8[0]} setStats={setStats} setWinners={setQ2}/>
                    <MatchPO A={pE4[0]} B={pE3[0]} setStats={setStats} setWinners={setQ3}/>
                </PlayOff>

                <PlayOff title={"SEMI-FINAL"}>
                    <MatchPO A={q1[0]} B={q[0]} setStats={setStats} setWinners={setSemi}/>
                    <MatchPO A={q3[0]} B={q2[0]} setStats={setStats} setWinners={setSemi2}/>
                </PlayOff>

                <PlayOff title={"FINALS"}>
                    <MatchPO A={semi[1]} B={semi2[1]} setStats={setStats} setWinners={setFinal2}/>
                    <MatchPO A={semi[0]} B={semi2[0]} setStats={setStats} setWinners={setFinal}/>
                </PlayOff>



                <div>Winner: {final[0].name}</div>
                <div>Silver: {final[1].name}</div>
                <div>Podium: {final2[0].name}</div>

            </div>


        </>
    );
};

export default Test;