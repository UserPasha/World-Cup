import React, {useState} from 'react';
import {BaseType} from "./Test";
import PlayOffStats from "./PlayOffStats";
import style from "./Match.module.css";
import ownStyle from "./MatchPO.module.css"

type MatchPOPropsType = {
    A: BaseType
    B: BaseType
    setStats: (obj: BaseType[]) => void
    setWinners: (obj: BaseType[]) => void
}

const MatchPO: React.FC<MatchPOPropsType> = ({A, B, setStats, setWinners}) => {

    const [firstValue, setFirstValue] = useState<number>(0)
    const [secondValue, setSecondValue] = useState<number>(0)
    const [clicker, setClicker] = useState(false)
    const [secondClicker, setSecondClicker] = useState(false)
    const scoreGeneratorToWin = (aV: (value: number) => void, bV: (value: number) => void, s: number = 3) => {

        if (s === 1) {
            const ScoreRandomNumber = Math.ceil(Math.random() * 100)
            if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 20) {
                aV(1)
                bV(0)
            } else if (ScoreRandomNumber >= 20 && ScoreRandomNumber < 32) {
                aV(2)
                bV(0)
            } else if (ScoreRandomNumber >= 32 && ScoreRandomNumber < 44) {
                aV(2)
                bV(1)
            } else if (ScoreRandomNumber >= 44 && ScoreRandomNumber < 56) {
                aV(3)
                bV(0)
            } else if (ScoreRandomNumber >= 56 && ScoreRandomNumber < 63) {
                aV(3)
                bV(1)
            } else if (ScoreRandomNumber >= 63 && ScoreRandomNumber < 72) {
                aV(3)
                bV(2)
            } else if (ScoreRandomNumber >= 72 && ScoreRandomNumber < 77) {
                aV(4)
                bV(0)
            } else if (ScoreRandomNumber >= 77 && ScoreRandomNumber < 82) {
                aV(4)
                bV(1)
            } else if (ScoreRandomNumber >= 82 && ScoreRandomNumber < 87) {
                aV(4)
                bV(2)
            } else if (ScoreRandomNumber >= 87 && ScoreRandomNumber < 91) {
                aV(4)
                bV(3)
            } else if (ScoreRandomNumber >= 91 && ScoreRandomNumber < 94) {
                aV(5)
                bV(0)
            } else if (ScoreRandomNumber >= 94 && ScoreRandomNumber < 96) {
                aV(5)
                bV(1)
            } else if (ScoreRandomNumber >= 96 && ScoreRandomNumber < 98) {
                aV(5)
                bV(2)
            } else if (ScoreRandomNumber === 98) {
                aV(6)
                bV(0)
            } else if (ScoreRandomNumber === 99 || ScoreRandomNumber === 100) {
                aV(6)
                bV(1)
            } else {
                console.warn("something wrong!")
                aV(10)
                bV(10)
            }
        } else if (s === 2) {
            const ScoreRandomNumber = Math.ceil(Math.random() * 100)
            if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 40) {
                aV(1)
                bV(0)
            } else if (ScoreRandomNumber >= 40 && ScoreRandomNumber < 62) {
                aV(2)
                bV(0)
            } else if (ScoreRandomNumber >= 62 && ScoreRandomNumber < 88) {
                aV(2)
                bV(1)
            } else if (ScoreRandomNumber >= 88 && ScoreRandomNumber < 98) {
                aV(3)
                bV(2)
            } else if (ScoreRandomNumber >= 98 && ScoreRandomNumber < 99) {
                aV(3)
                bV(1)
            } else if (ScoreRandomNumber >= 99 && ScoreRandomNumber <= 100) {
                aV(3)
                bV(0)
            } else {
                console.warn("something wrong!")
                aV(10)
                bV(10)
            }
        } else {
            const ScoreRandomNumber = Math.ceil(Math.random() * 100)
            if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 28) {
                aV(1)
                bV(0)
            } else if (ScoreRandomNumber >= 28 && ScoreRandomNumber < 40) {
                aV(2)
                bV(0)
            } else if (ScoreRandomNumber >= 40 && ScoreRandomNumber < 52) {
                aV(2)
                bV(1)
            } else if (ScoreRandomNumber >= 52 && ScoreRandomNumber < 62) {
                aV(3)
                bV(0)
            } else if (ScoreRandomNumber >= 62 && ScoreRandomNumber < 72) {
                aV(3)
                bV(1)
            } else if (ScoreRandomNumber >= 72 && ScoreRandomNumber < 80) {
                aV(3)
                bV(2)
            } else if (ScoreRandomNumber >= 80 && ScoreRandomNumber < 86) {
                aV(4)
                bV(0)
            } else if (ScoreRandomNumber >= 92 && ScoreRandomNumber < 97) {
                aV(4)
                bV(1)
            } else if (ScoreRandomNumber >= 86 && ScoreRandomNumber < 92) {
                aV(4)
                bV(2)
            } else if (ScoreRandomNumber >= 97 && ScoreRandomNumber <= 100) {
                aV(4)
                bV(3)
            } else {
                console.warn("something wrong!")
                aV(10)
                bV(10)
            }
        }
    }


    const scoreGeneratorToLost = (aV: (value: number) => void, bV: (value: number) => void, s: number = 3) => {
        if (s ===1) {
            const ScoreRandomNumber = Math.ceil(Math.random() * 100)
            if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 40) {
                aV(0)
                bV(1)
            } else if (ScoreRandomNumber >= 40 && ScoreRandomNumber < 62) {
                aV(0)
                bV(2)
            } else if (ScoreRandomNumber >= 62 && ScoreRandomNumber < 88) {
                aV(1)
                bV(2)
            } else if (ScoreRandomNumber >= 88 && ScoreRandomNumber < 98) {
                aV(2)
                bV(3)
            } else if (ScoreRandomNumber >= 98 && ScoreRandomNumber < 99) {
                aV(1)
                bV(3)
            } else if (ScoreRandomNumber >= 99 && ScoreRandomNumber <= 100) {
                aV(0)
                bV(3)
            } else {
                console.warn("something wrong!")
                aV(10)
                bV(10)
            }
        } else if (s === 2) {
            const ScoreRandomNumber = Math.ceil(Math.random() * 100)
            if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 20) {
                aV(0)
                bV(1)
            } else if (ScoreRandomNumber >= 20 && ScoreRandomNumber < 32) {
                aV(0)
                bV(2)
            } else if (ScoreRandomNumber >= 32 && ScoreRandomNumber < 44) {
                aV(1)
                bV(2)
            } else if (ScoreRandomNumber >= 44 && ScoreRandomNumber < 56) {
                aV(0)
                bV(3)
            } else if (ScoreRandomNumber >= 56 && ScoreRandomNumber < 63) {
                aV(1)
                bV(3)
            } else if (ScoreRandomNumber >= 63 && ScoreRandomNumber < 72) {
                aV(2)
                bV(3)
            } else if (ScoreRandomNumber >= 72 && ScoreRandomNumber < 77) {
                aV(0)
                bV(4)
            } else if (ScoreRandomNumber >= 77 && ScoreRandomNumber < 82) {
                aV(1)
                bV(4)
            } else if (ScoreRandomNumber >= 82 && ScoreRandomNumber < 87) {
                aV(2)
                bV(4)
            } else if (ScoreRandomNumber >= 87 && ScoreRandomNumber < 91) {
                aV(3)
                bV(4)
            } else if (ScoreRandomNumber >= 91 && ScoreRandomNumber < 94) {
                aV(0)
                bV(5)
            } else if (ScoreRandomNumber >= 94 && ScoreRandomNumber < 96) {
                aV(1)
                bV(5)
            } else if (ScoreRandomNumber >= 96 && ScoreRandomNumber < 98) {
                aV(2)
                bV(5)
            } else if (ScoreRandomNumber === 98) {
                aV(0)
                bV(6)
            } else if (ScoreRandomNumber === 99 || ScoreRandomNumber === 100) {
                aV(1)
                bV(6)
            } else {
                console.warn("something wrong!")
                aV(10)
                bV(10)
            }
        } else {
            const ScoreRandomNumber = Math.ceil(Math.random() * 100)
            if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 28) {
                aV(0)
                bV(1)
            } else if (ScoreRandomNumber >= 28 && ScoreRandomNumber < 40) {
                aV(0)
                bV(2)
            } else if (ScoreRandomNumber >= 40 && ScoreRandomNumber < 52) {
                aV(1)
                bV(2)
            } else if (ScoreRandomNumber >= 52 && ScoreRandomNumber < 62) {
                aV(0)
                bV(3)
            } else if (ScoreRandomNumber >= 62 && ScoreRandomNumber < 72) {
                aV(1)
                bV(3)
            } else if (ScoreRandomNumber >= 72 && ScoreRandomNumber < 80) {
                aV(2)
                bV(3)
            } else if (ScoreRandomNumber >= 80 && ScoreRandomNumber < 86) {
                aV(0)
                bV(4)
            } else if (ScoreRandomNumber >= 92 && ScoreRandomNumber < 97) {
                aV(1)
                bV(4)
            } else if (ScoreRandomNumber >= 86 && ScoreRandomNumber < 92) {
                aV(2)
                bV(4)
            } else if (ScoreRandomNumber >= 97 && ScoreRandomNumber <=100) {
                aV(3)
                bV(4)
            } else {
                console.warn("something wrong!")
                aV(10)
                bV(10)
            }

        }

    }

    const scoreGeneratorToDraw = (aV: (value: number) => void, bV: (value: number) => void) => {
        const ScoreRandomNumber = Math.ceil(Math.random() * 100)
        if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 34) {
            aV(0)
            bV(0)
        } else if (ScoreRandomNumber >= 34 && ScoreRandomNumber < 74) {
            aV(1)
            bV(1)
        } else if (ScoreRandomNumber >= 74 && ScoreRandomNumber < 92) {
            aV(2)
            bV(2)
        } else if (ScoreRandomNumber >= 92 && ScoreRandomNumber <= 100) {
            aV(3)
            bV(3)
        } else {
            console.warn("something wrong!")
            aV(10)
            bV(10)
        }

    }

    const testGenerate = (a: number, b: number, c: (val: number) => void, d: (val: number) => void) => {

        console.log(a - b)
        let w = 60;
        let l = 20;
        let s = 0
        if (a - b > 40) {
            w = 97;
            l = 97
            s = 1
        } else if (a - b > 30 && a - b <= 40) {
            w = 96;
            l = 96
            s = 1
        } else if (a - b > 25 && a - b <= 30) {
            w = 95;
            l = 95
            s = 1
        } else if (a - b > 20 && a - b <= 25) {
            w = 92;
            l = 92
            s = 1
        } else if (a - b > 16 && a - b <= 20) {
            w = 84;
            l = 84
        } else if (a - b > 12 && a - b <= 16) {
            w = 76;
            l = 76;
        } else if (a - b > 8 && a - b <= 12) {
            w = 68;
            l = 68;
        } else if (a - b > 3 && a - b <= 8) {
            w = 58;
            l = 58;
        } else if (a - b >= 0 && a - b <= 3) {
            w = 50;
            l = 50
        } else if (b - a > 40) {
            w = 2;
            l = 2
            s = 2
        } else if (b - a > 30 && b - a <= 40) {
            w = 3;
            l = 3
            s = 2
        } else if (b - a > 25 && b - a <= 30) {
            w = 4;
            l = 4
            s = 2
        } else if (b - a > 20 && b - a <= 25) {
            w = 7;
            l = 7
            s = 2
        } else if (b - a > 16 && b - a <= 20) {
            w = 15;
            l = 15;
        } else if (b - a > 12 && b - a <= 16) {
            w = 24;
            l = 24;
        } else if (b - a > 8 && b - a <= 12) {
            w = 32;
            l = 32;
        } else if (b - a > 3 && b - a <= 8) {
            w = 42;
            l = 42;
        } else if (b - a >= 0 && b - a <= 3) {
            w = 50;
            l = 50
        } else {
            console.warn("something wrong!")
            w = 50;
            l = 50
        }
        const FirstRandomNumber = Math.ceil(Math.random() * 100)
        if (FirstRandomNumber <= w) {
            scoreGeneratorToWin(c, d)
        } else if (FirstRandomNumber > l) {
            scoreGeneratorToLost(c, d)
        } else {
            scoreGeneratorToDraw(c, d)
        }
        setClicker(true)
    }


    const SETG = () => {
        if (firstValue > secondValue) {
            A.playOffPoints = A.playOffPoints + 5
        } else if (firstValue < secondValue) {
            B.playOffPoints = B.playOffPoints + 5
        }
        setStats([A, B])
        setSecondClicker(true)
    }

    return (
        <>

            <div className={style.MatcItem}>

                <div className={style.ItemWrapper}>

                    <div className={style.ItemValuesWithNames}>{A.name}</div>
                    <div className={style.ItemValues}>{firstValue}</div>
                    <div className={style.ItemValues}>{secondValue}</div>
                    <div className={style.ItemValuesWithNames}>{B.name}</div>
                </div>
                <div className={ownStyle.ButtnosWrapper}>
                    <button onClick={() => {
                        testGenerate(A.rating, B.rating, setFirstValue, setSecondValue)
                    }} disabled={clicker}>play
                    </button>
                    <button onClick={SETG} disabled={secondClicker}>set</button>
                    <PlayOffStats winners={[A,B]} setWinners={setWinners}/>
                </div>


            </div>

            <div>
                {/*<PlayOffStats winners={[A,B]} setWinners={setWinners}/>*/}
            </div>

        </>
    );
};

export default MatchPO;
