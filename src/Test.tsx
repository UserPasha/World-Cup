import React, {useState} from 'react';
import Match from "./Match";


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
const Test = () => {



    const FRA: BaseType = {
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

    const BEL: BaseType = {
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
    const GHA: BaseType = {
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
    const POL: BaseType = {
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
    const ARA: BaseType = {
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
    const POR: BaseType = {
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
    const URU: BaseType = {
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
    const KOR: BaseType = {
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

    const [data, setData] = useState<string>("x")

    return (
        <>
            <div>
                {data}
                <Match A={POR} B={URU} setData={setData} data={data}/>
                <Match A={KOR} B={GHA} setData={setData} data={data}/>
                <Match A={POR} B={KOR} setData={setData} data={data}/>
                <Match A={URU} B={GHA} setData={setData} data={data}/>
                <Match A={GHA} B={POR} setData={setData} data={data}/>
                <Match A={KOR} B={URU} setData={setData} data={data}/>
                {/*<Match A={FRA} B={BRA} setData={setData} data={data}/>*/}
                {/*<Match A={BLR} B={BRA} setData={setData} data={data}/>*/}
                {/*<Match A={BEL} B={EST} setData={setData} data={data}/>*/}

            </div>
        </>
    );
};

export default Test;