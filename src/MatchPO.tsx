import React, {useState} from 'react';
import {BaseType} from "./Test";

type MatchPOPropsType = {
    A: BaseType
    B: BaseType
    setData: (val: string) => void
    data: string
    setStats:(obj:BaseType[])=>void
}

const MatchPO: React.FC<MatchPOPropsType> = ({A, B, setData, data, setStats}) => {

    const [firstValue, setFirstValue] = useState<number>(0)
    const [secondValue, setSecondValue] = useState<number>(0)

    const scoreGeneratorToWin = (aV: (value: number) => void, bV: (value: number) => void) => {
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
        } else if (ScoreRandomNumber >= 80 && ScoreRandomNumber < 85) {
            aV(4)
            bV(0)
        } else if (ScoreRandomNumber >= 85 && ScoreRandomNumber < 90) {
            aV(4)
            bV(1)
        } else if (ScoreRandomNumber >= 90 && ScoreRandomNumber < 94) {
            aV(4)
            bV(2)
        } else if (ScoreRandomNumber >= 94 && ScoreRandomNumber < 98) {
            aV(4)
            bV(3)
        } else if (ScoreRandomNumber >= 98 && ScoreRandomNumber <=100) {
            aV(5)
            bV(0)
        }  else {
            console.warn("something wrong!")
            aV(10)
            bV(10)
        }
    }

    const scoreGeneratorToLost = (aV: (value: number) => void, bV: (value: number) => void) => {
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
        } else if (ScoreRandomNumber >= 80 && ScoreRandomNumber < 85) {
            aV(0)
            bV(4)
        } else if (ScoreRandomNumber >= 85 && ScoreRandomNumber < 90) {
            aV(1)
            bV(4)
        } else if (ScoreRandomNumber >= 90 && ScoreRandomNumber < 94) {
            aV(2)
            bV(4)
        } else if (ScoreRandomNumber >= 94 && ScoreRandomNumber < 98) {
            aV(3)
            bV(4)
        } else if (ScoreRandomNumber >= 98 && ScoreRandomNumber <= 100) {
            aV(0)
            bV(5)
        }  else {
            console.warn("something wrong!")
            aV(10)
            bV(10)
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
        }
        else {
            console.warn("something wrong!")
            aV(10)
            bV(10)
        }

    }

    const testGenerate = (a: number, b: number, c: (val: number) => void, d: (val: number) => void) => {
        console.log(a - b)
        let w = 60;
        let l = 20;
        if (a - b > 60) {
            w = 95;
            l = 95
        } else if (a - b > 45 && a - b <= 60) {
            w = 90;
            l = 90
        } else if (a - b > 34 && a - b <= 45) {
            w = 80;
            l = 80
        } else if (a - b > 24 && a - b <= 34) {
            w = 74;
            l = 74
        } else if (a - b > 16 && a - b <= 24) {
            w = 68;
            l = 68;
        } else if (a - b > 10 && a - b <= 16) {
            w = 63;
            l = 63;
        } else if (a - b > 5 && a - b <= 10) {
            w = 56;
            l = 56;
        } else if (a - b > 0 && a - b <= 5) {
            w = 50;
            l = 50
        } else if (b - a > 60) {
            w = 5;
            l = 5
        } else if (b - a > 45 && b - a <= 60) {
            w = 10;
            l = 10
        } else if (b - a > 34 && b - a <= 45) {
            w = 20;
            l = 20
        } else if (b - a > 24 && b - a <= 34) {
            w = 26;
            l = 26;
        } else if (b - a > 16 && b - a <= 24) {
            w = 32;
            l = 32;
        } else if (b - a > 10 && b - a <= 16) {
            w = 37;
            l = 37;
        } else if (b - a > 5 && b - a <= 10) {
            w = 44;
            l = 44;
        } else if (b - a > 0 && b - a <= 5) {
            w = 50;
            l = 50
        } else {
            console.warn("something wrong!")
            w = 20;
            l = 60
        }
        const FirstRandomNumber = Math.ceil(Math.random() * 100)
        if (FirstRandomNumber <= w) {
            scoreGeneratorToWin(c, d)
        } else if (FirstRandomNumber > l) {
            scoreGeneratorToLost(c, d)
        } else {
            scoreGeneratorToDraw(c, d)
        }
    }

    const SETG = () => {
        if(firstValue>secondValue){
            A.wins = A.wins+1
            A.points = A.points+3
            B.lost = B.lost+1
        }
        else if(firstValue<secondValue){
            B.wins = B.wins+1
            B.points = B.points+3
            A.lost = A.lost +1
        }
        setData(data + `${A.name} ${B.name} ${firstValue} ${secondValue} ${A.wins} ${B.wins}/`)
        setStats([A, B])

    }

    return (
        <div>
            <h2>

                {A.name}:{B.name}--{firstValue}:{secondValue}
                {/*{{firstValue}==={secondValue}? <div> dops</div>: <div>OK</div>}*/}
                <button onClick={() => {
                    testGenerate(A.rating, B.rating, setFirstValue, setSecondValue)
                }}>play
                </button>
                <button onClick={SETG}>set</button>
            </h2>
        </div>
    );
};

export default MatchPO;