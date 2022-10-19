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
    setStats: (obj: BaseType[]) => void
    setToSortedArray: (obj: BaseType[]) => void
    title: string
}

const Group: React.FC<GroupProrsType> = ({
                                             A, B, C, D,
                                             title, setStats, setToSortedArray
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
                    <div className={style.flag}><img src={A.image}/></div>
                    <div className={style.flag}><img src={B.image}/></div>
                    <div className={style.flag}><img src={C.image}/></div>
                    <div className={style.flag}><img src={D.image}/></div>
                </div>

            </div>
            :
            <div className={style.GroupWrapper}>
                <div className={style.CroupHeader}  onClick={toggler} >
                    <h3>GROUP {title}</h3></div>

                <div className={style.GroupItemWrapper}>

                    <div className={style.MatchesWrapper}>

                        <div className={style.MatchItems}>
                            <Match A={A} B={B} setStats={setStats}/>
                            <Match A={C} B={D} setStats={setStats}/>
                            <Match A={C} B={A} setStats={setStats}/>
                            <Match A={B} B={D} setStats={setStats}/>
                            <Match A={B} B={C} setStats={setStats}/>
                            <Match A={D} B={A} setStats={setStats}/>

                        </div>

                    </div>

                    <div className={style.TableWrapper}>
                        <Stats stats={[A, B, C, D]} setToSortedArray={setToSortedArray}/>
                    </div>

                </div>

            </div>
    );
};

export default Group;