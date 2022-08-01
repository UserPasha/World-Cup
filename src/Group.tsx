import React from 'react';
import {BaseType} from "./Test";
import Match from "./Match";
import Stats from "./Stats";

type GroupProrsType={
    A: BaseType
    B: BaseType
    C: BaseType
    D: BaseType
    setData: (val: string) => void
    data: string
    setStats:(obj:BaseType[])=>void
    setPlay:(obj:BaseType[])=>void
}

const Group = (Props: GroupProrsType) => {

    return (
        <div className="GroupWrapper">
        <div   className="MatchesWrapper">
            <Match A={Props.A} B={Props.B} setData={Props.setData} data={Props.data} setStats={Props.setStats}/>
            <Match A={Props.C} B={Props.D} setData={Props.setData} data={Props.data} setStats={Props.setStats}/>
            <Match A={Props.C} B={Props.A} setData={Props.setData} data={Props.data} setStats={Props.setStats}/>
            <Match A={Props.B} B={Props.D} setData={Props.setData} data={Props.data} setStats={Props.setStats}/>
            <Match A={Props.B} B={Props.C} setData={Props.setData} data={Props.data} setStats={Props.setStats}/>
            <Match A={Props.D} B={Props.A} setData={Props.setData} data={Props.data} setStats={Props.setStats}/>
        </div>
            <div   className="TableWrapper">
                <Stats  stats={[Props.A, Props.B, Props.C, Props.D]} setPlay={Props.setPlay}/>
            </div>
        </div>
    );
};

export default Group;