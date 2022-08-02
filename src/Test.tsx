import React, {useState} from 'react';
import Group from "./Group";
import MatchPO from "./MatchPO";
import a from "./Images/Mini/Brazil.png"

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
    inage?: string
    bigBlurImage?: string
}
export const ARA: BaseType = {
    name: "Arabia",
    rating: 65,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const ARG: BaseType = {
    name: "Argentina",
    rating: 90,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const AST: BaseType = {
    name: "Australia",
    rating: 68,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const BEL: BaseType = {
    name: "Belgium",
    rating: 90,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const BRA: BaseType = {
    name: "Brasil",
    rating: 93,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const CAM: BaseType = {
    name: "Cameroon",
    rating: 68,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const CAN: BaseType = {
    name: "Canada",
    rating: 68,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const COS: BaseType = {
    name: "Costa Rica",
    rating: 69,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const CRO: BaseType = {
    name: "Croatia",
    rating: 82,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const DAN: BaseType = {
    name: "Denmark",
    rating: 85,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const ECU: BaseType = {
    name: "Ecuador",
    rating: 66,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const ENG: BaseType = {
    name: "England",
    rating: 88,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const FRA: BaseType = {
    name: "France",
    rating: 90,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
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
    difference: 0
}
export const GHA: BaseType = {
    name: "Ghana",
    rating: 60,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const IRN: BaseType = {
    name: "Iran",
    rating: 75,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const KOR: BaseType = {
    name: "S Korea",
    rating: 72,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const MEX: BaseType = {
    name: "Mexico",
    rating: 82,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const MOR: BaseType = {
    name: "Morocco",
    rating: 76,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const NET: BaseType = {
    name: "Netherlands",
    rating: 85,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const POL: BaseType = {
    name: "Poland",
    rating: 75,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const POR: BaseType = {
    name: "Portugal",
    rating: 85,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const QUA: BaseType = {
    name: "Qatar",
    rating: 65,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const SEN: BaseType = {
    name: "Senegal",
    rating: 78,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const SER: BaseType = {
    name: "Serbia",
    rating: 75,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const SPA: BaseType = {
    name: "Spain",
    rating: 88,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const SWI: BaseType = {
    name: "Switzerland",
    rating: 80,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const TUN: BaseType = {
    name: "Tunisia",
    rating: 72,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const URU: BaseType = {
    name: "Uruguay",
    rating: 82,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const USA: BaseType = {
    name: "United States",
    rating: 82,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const JPN: BaseType = {
    name: "Japan",
    rating: 75,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
export const WAL: BaseType = {
    name: "Wales",
    rating: 78,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
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

    const AFlags = [a,"./Images/Mini/Brazil.png","./Images/Mini/Brazil.png","./Images/Mini/Brazil.png",]


    return (
        <>

            <div className="AppWrapper">
                {data}
                <Group A={SEN} B={NET} C={QUA} D={ECU} setData={setData} data={data} setStats={setStats}
                       setPlay={setA1} title={"A"} flags={AFlags}/>
                <Group A={ENG} B={IRN} C={USA} D={WAL} setData={setData} data={data} setStats={setStats}
                       setPlay={setB1} title={"B"}flags={AFlags}/>
                <Group A={ARG} B={ARA} C={MEX} D={POL} setData={setData} data={data} setStats={setStats}
                       setPlay={setC1} title={"C"}flags={AFlags}/>
                <Group A={DAN} B={TUN} C={FRA} D={AST} setData={setData} data={data} setStats={setStats}
                       setPlay={setD1} title={"D"}flags={AFlags}/>
                {/*<Group A={GER} B={JPN} C={SPA} D={COS} setData={setData} data={data} setStats={setStats}*/}
                {/*       setPlay={setE1} title={"E"}/>*/}
                {/*<Group A={MOR} B={CRO} C={BEL} D={CAN} setData={setData} data={data} setStats={setStats}*/}
                {/*       setPlay={setF1} title={"F"}/>*/}
                {/*<Group A={SWI} B={CAM} C={BRA} D={SER} setData={setData} data={data} setStats={setStats}*/}
                {/*       setPlay={setG1} title={"G"}/>*/}
                {/*<Group A={URU} B={KOR} C={POR} D={GHA} setData={setData} data={data} setStats={setStats}*/}
                {/*       setPlay={setH1} title={"H"}/>*/}
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