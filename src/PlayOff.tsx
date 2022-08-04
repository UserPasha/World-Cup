import React, {ReactNode, useState} from 'react';
import style from "./Group.module.css"
import ownStyle from "./PlayOff.module.css"

type PlayTypeProps = {
    children: ReactNode
    title: string
}
const PlayOff: React.FC<PlayTypeProps> = ({children, title}) => {

    const [lock, setLock] = useState<boolean>(true)
    const toggler = () => {
        setLock(!lock)
    }


    return (
        lock
            ?
            <div className={style.CroupTitle} onClick={toggler}>

                <div className={ownStyle.Title}>{title}</div>


            </div>
            :
            <div className={style.GroupWrapper}>
                <div className={style.CroupHeader} onClick={toggler}>
                    <h3> {title}</h3></div>


                <div className={style.GroupItemWrapper}>
                <div className={ownStyle.MatchesWrapper}>

                        <div className={style.MatchItems}>
                            {children}

                        </div>

                </div>
                </div>



            </div>

    );
};

export default PlayOff;