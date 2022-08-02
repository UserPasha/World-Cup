import React, {useState} from 'react';
import Group from "./Group";
import MatchPO from "./MatchPO";
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
    image: SaudiArabia
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
    image: Argentina
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
    image: Australia
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
    image: Belgium
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
    image:Brazil
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
    image: Cameroon
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
    image: Canada
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
    image: CostaRica
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
    image: Croatia
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
    image:Denmark
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
    image: Ecuador
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
    image: England
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
    image: France
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
    image: Germany
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
    image: Ghana
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
    image: Iran
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
    image:SouthKorea
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
    image: Mexico
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
    image: Morocco
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
    image: Netherlands
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
    image: Poland
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
    image: Portugal
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
    image: Qatar
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
    image: Senegal
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
    image: Serbia
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
    image: Spain
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
    image: Switzerland
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
    image: Tunisia
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
    image: Uruguay
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
    image: USAImage
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
    image: Japan
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
    image: Wales
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
    const [stats, setStats] = useState<BaseType[]>([
        POR, URU
    ])
    const [a1, setA1] = useState<BaseType[]>([
        POR, URU
    ])
    const [b1, setB1] = useState<BaseType[]>([
        POR, URU
    ])
    const [c1, setC1] = useState<BaseType[]>([
        POR, URU
    ])
    const [d1, setD1] = useState<BaseType[]>([
        POR, URU
    ])
    const [e1, setE1] = useState<BaseType[]>([
        POR, URU
    ])
    const [f1, setF1] = useState<BaseType[]>([
        POR, URU
    ])
    const [g1, setG1] = useState<BaseType[]>([
        POR, URU
    ])
    const [h1, setH1] = useState<BaseType[]>([
        POR, URU
    ])



    return (
        <>

            <div className="AppWrapper">
                {data}
                <Group A={SEN} B={NET} C={QUA} D={ECU} setData={setData} data={data} setStats={setStats}
                       setPlay={setA1} title={"A"} />
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
                {/*<PlayOffs A={a1[0]} B={b1[1]} C={c1[0]} D={d1[1]} setData={setData} data={data} setStats={setStats}/>*/}
                {/*<PlayOffs A={d1[0]} B={c1[1]} C={b1[0]} D={a1[1]}  setData={setData} data={data} setStats={setStats}/>*/}
                {/*<PlayOffs A={e1[0]} B={f1[1]} C={g1[0]} D={h1[1]}  setData={setData} data={data} setStats={setStats}/>*/}
                {/*<PlayOffs A={f1[0]} B={e1[1]} C={h1[0]} D={g1[1]}  setData={setData} data={data} setStats={setStats}/>*/}
                <MatchPO A={a1[0]} B={b1[1]} setData={setData} data={data} setStats={setStats}/>
                <MatchPO A={c1[0]} B={d1[1]} setData={setData} data={data} setStats={setStats}/>
                <MatchPO A={d1[0]} B={c1[1]} setData={setData} data={data} setStats={setStats}/>
                <MatchPO A={b1[0]} B={a1[1]} setData={setData} data={data} setStats={setStats}/>
                <MatchPO A={e1[0]} B={f1[1]} setData={setData} data={data} setStats={setStats}/>
                <MatchPO A={g1[0]} B={h1[1]} setData={setData} data={data} setStats={setStats}/>
                <MatchPO A={f1[0]} B={e1[1]} setData={setData} data={data} setStats={setStats}/>
                <MatchPO A={h1[0]} B={g1[1]} setData={setData} data={data} setStats={setStats}/>
            </div>


        </>
    );
};

export default Test;