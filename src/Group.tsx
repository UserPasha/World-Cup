import React, {useState} from 'react';
import {BaseType} from "./Test";
import Match from "./Match";
import Stats from "./Stats";
import style from "./Group.module.css"

type GroupProrsType = {
    A: BaseType
    B: BaseType
    C: BaseType
    D: BaseType
    setData: (val: string) => void
    data: string
    setStats: (obj: BaseType[]) => void
    setPlay: (obj: BaseType[]) => void
    title: string

    flags: string[]
}

const Group: React.FC<GroupProrsType> = ({
                                             A, B, C, D,
                                             title, data, setData, setStats, setPlay
                                         }) => {

    const [lock, setLock] = useState<boolean>(true)
    const toggler = () => {
        setLock(!lock)
    }

    return (lock
            ?
            <div className={style.CroupTitle} onClick={toggler}>
                <div className={style.Title}>GROUP {title}</div>
                <div className={style.FlagItems}>
                    {/*<div><img src={Props.flags[0]}/></div>*/}
                    {/*<div><img src={Props.flags[0]}/></div>*/}
                    {/*<div><img src={Props.flags[0]}/></div>*/}
                    {/*<div><img src={Props.flags[0]}/></div>*/}
                </div>
            </div>
            :
            <div className={style.GroupWrapper}>
                <div className={style.CroupHeader} onClick={toggler}>
                    <h3>GROUP {title}</h3></div>

                <div className={style.GroupItemWrapper}>

                    <div className={style.MatchesWrapper}>

                        <div className={style.MatchItems}>
                            <Match A={A} B={B} setData={setData} data={data} setStats={setStats}/>
                            <Match A={C} B={D} setData={setData} data={data} setStats={setStats}/>
                            <Match A={C} B={A} setData={setData} data={data} setStats={setStats}/>
                            <Match A={B} B={D} setData={setData} data={data} setStats={setStats}/>
                            <Match A={B} B={C} setData={setData} data={data} setStats={setStats}/>
                            <Match A={D} B={A} setData={setData} data={data} setStats={setStats}/>

                        </div>

                    </div>

                    <div className={style.TableWrapper}>
                        <Stats stats={[A, B, C, D]} setPlay={setPlay}/>
                    </div>

                </div>

            </div>
    );
};

export default Group;