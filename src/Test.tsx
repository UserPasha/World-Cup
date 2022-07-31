import React, {useState} from 'react';
import Group from "./Group";


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

export const FRA: BaseType = {
    name: "France",
    rating: 91,
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
const BLR: BaseType = {
    name: "Belarus",
    rating: 24,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
const EST: BaseType = {
    name: "Estonia",
    rating: 33,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
const GER: BaseType = {
    name: "Germany",
    rating: 71,
    games: 0,
    points: 0,
    wins: 0,
    draws: 0,
    lost: 0,
    scored: 0,
    conceded: 0,
    difference: 0
}
const BRA: BaseType = {
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
export   const GHA: BaseType = {
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
const QUA: BaseType = {
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
const NET: BaseType = {
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
const SEN: BaseType = {
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
const ECU: BaseType = {
    name: "Ecuador",
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
const ARG: BaseType = {
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
const MEX: BaseType = {
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
export  const POR: BaseType = {
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
export    const URU: BaseType = {
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
export  const KOR: BaseType = {
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
export  const ENG: BaseType = {
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
export  const USA: BaseType = {
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
export  const IRN: BaseType = {
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
export  const WAL: BaseType = {
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
const Test = () => {





    const [data, setData] = useState<string>("")
    const [stats, setStats] = useState<BaseType[]>([
        POR, URU
    ])

    return (
        <>

            <div>
                {data}
                <Group A={POR} B={URU} C={KOR} D={GHA} setData={setData} data={data} setStats={setStats} stats={stats}/>
                <Group A={ENG} B={USA} C={IRN} D={WAL} setData={setData} data={data} setStats={setStats} stats={stats}/>
                <Group A={ARG} B={MEX} C={POL} D={ARA} setData={setData} data={data} setStats={setStats} stats={stats}/>
                <Group A={QUA} B={NET} C={SEN} D={ECU} setData={setData} data={data} setStats={setStats} stats={stats}/>

            </div>


        </>
    );
};

export default Test;