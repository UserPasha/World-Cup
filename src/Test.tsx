import React, {useState} from 'react';
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
import PlayOffs from "./PlayOffs";

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
    oneEightWin: number
    quaterFinalWin: number
    semiFinalWin: number
    finalWin: number

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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
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
    image: Wales,
    oneEightWin: 0,
    quaterFinalWin: 0,
    semiFinalWin: 0,
    finalWin: 0
}

// const BLR: BaseType = {
//     name: "Belarus",
//     rating: 24,
//     games: 0,
//     points: 0,
//     wins: 0,
//     draws: 0,
//     lost: 0,
//     scored: 0,
//     conceded: 0,
//     difference: 0
// }
// const EST: BaseType = {
//     name: "Estonia",
//     rating: 33,
//     games: 0,
//     points: 0,
//     wins: 0,
//     draws: 0,
//     lost: 0,
//     scored: 0,
//     conceded: 0,
//     difference: 0
// }
const Test = () => {


    const [data, setData] = useState<string>("")
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

    const [semi, setSemi]= useState<BaseType[]>([TES, TES])
    const [semi2, setSemi2]= useState<BaseType[]>([TES, TES])

    const [final, setFinal]= useState<BaseType[]>([TES, TES])
    const [final2, setFinal2]= useState<BaseType[]>([TES, TES])

    return (
        <>

            <div className="AppWrapper">

                <Group A={SEN} B={NET} C={QUA} D={ECU} setData={setData} data={data} setStats={setStats}
                       setPlay={setA1} title={"A"}/>
                <Group A={ENG} B={IRN} C={USA} D={WAL} setData={setData} data={data} setStats={setStats}
                       setPlay={setB1} title={"B"}/>
                <Group A={ARG} B={ARA} C={MEX} D={POL} setData={setData} data={data} setStats={setStats}
                       setPlay={setC1} title={"C"}/>
                <Group A={DAN} B={TUN} C={FRA} D={AST} setData={setData} data={data} setStats={setStats}
                       setPlay={setD1} title={"D"}/>
                <Group A={GER} B={JPN} C={SPA} D={COS} setData={setData} data={data} setStats={setStats}
                       setPlay={setE1} title={"E"}/>
                <Group A={MOR} B={CRO} C={BEL} D={CAN} setData={setData} data={data} setStats={setStats}
                       setPlay={setF1} title={"F"}/>
                <Group A={SWI} B={CAM} C={BRA} D={SER} setData={setData} data={data} setStats={setStats}
                       setPlay={setG1} title={"G"}/>
                <Group A={URU} B={KOR} C={POR} D={GHA} setData={setData} data={data} setStats={setStats}
                       setPlay={setH1} title={"H"}/>
                <PlayOffs A={a1[0]} B={b1[1]} setOneEight={setOneEight} setPE={setPE}/>
                <PlayOffs A={c1[0]} B={d1[1]} setOneEight={setOneEight} setPE={setPE2}/>
                <PlayOffs A={d1[0]} B={c1[1]} setOneEight={setOneEight} setPE={setPE3}/>
                <PlayOffs A={b1[0]} B={a1[1]} setOneEight={setOneEight} setPE={setPE4}/>
                <PlayOffs A={e1[0]} B={f1[1]} setOneEight={setOneEight} setPE={setPE5}/>
                <PlayOffs A={g1[0]} B={h1[1]} setOneEight={setOneEight} setPE={setPE6}/>
                <PlayOffs A={f1[0]} B={e1[1]} setOneEight={setOneEight} setPE={setPE7}/>
                <PlayOffs A={h1[0]} B={g1[1]} setOneEight={setOneEight} setPE={setPE8}/>


                <PlayOffs A={pE5[0]} B={pE6[0]} setOneEight={setOneEight} setPE={setQ}/>
                <PlayOffs A={pE[0]} B={pE2[0]} setOneEight={setOneEight} setPE={setQ1}/>
                <PlayOffs A={pE7[0]} B={pE8[0]} setOneEight={setOneEight} setPE={setQ2}/>
                <PlayOffs A={pE4[0]} B={pE3[0]} setOneEight={setOneEight} setPE={setQ3}/>

                <PlayOffs A={q1[0]} B={q[0]} setOneEight={setOneEight} setPE={setSemi}/>
                <PlayOffs A={q3[0]} B={q2[0]} setOneEight={setOneEight} setPE={setSemi2}/>

                <PlayOffs A={semi[1]} B={semi2[1]} setOneEight={setOneEight} setPE={setFinal2}/>

                <PlayOffs A={semi[0]} B={semi2[0]} setOneEight={setOneEight} setPE={setFinal}/>

                <div>Winner: {final[0].name}</div>
                <div>Silver: {final[1].name}</div>
                <div>Podium: {final2[0].name}</div>

            </div>


        </>
    );
};

export default Test;