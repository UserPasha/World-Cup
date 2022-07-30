import React from 'react';

type StatsType = {
    result: string[]
}
const Stats = (Props: StatsType) => {
    console.log(Props)
    const x:string[] =["v"]
    const zzzz = () => {
        x.concat(Props.result)
    }
    const vvvvv = x.map(m=><p>{m}</p>)

    return (
        <div>
            ____
            {vvvvv}
            {Props.result}
            <button onClick={zzzz}>YYY</button>
            ___
        </div>
    );
};

export default Stats;