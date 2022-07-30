import React, {useState} from 'react';
import {BaseType} from "./Test";

type TableType = {
    // Stats: BaseType[]
    // StatisticAdder: (x: BaseType, y: BaseType)=>BaseType[]
    stata: string
    allStats: BaseType[]
    result: string[]

}
const Table = (Props: TableType) => {
    // console.log(Props.Stats[0])
    // console.log(Props.Stats[1])
    console.log(Props)
    const [data2, setData2] = useState("")
    const [data3, setData3] = useState("")
    const DataResult: string[] = ["pp"]
    DataResult.push(data2)
    const refresh = () => {

        setData2(Props.stata)

    }

    return (

        <div>
            XXXXXXXXX{data2} - {DataResult}
            <button onClick={refresh}>Refresh</button>

        </div>
    );
};

export default Table;