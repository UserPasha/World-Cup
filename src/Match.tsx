import React, {useState} from 'react';
import {BaseType} from "./Test";


type MatchType = {
    A: BaseType
    B: BaseType
    setData: (val: string)=> void
    data: string
}

const Match: React.FC<MatchType> = ({A,B, setData, data}) => {

    const [firstValue, setFirstValue] = useState<number>(0)
    const [secondValue, setSecondValue] = useState<number>(0)

    const [data2, setData2] = useState("")

    const scoreGeneratorToWin = (aV: (value: number)=>void,bV: (value: number)=>void) => {
        const ScoreRandomNumber = Math.ceil(Math.random() * 100)
        if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 21) {
            aV(1)
            bV(0)
        } else if (ScoreRandomNumber >= 21 && ScoreRandomNumber < 36) {
            aV(2)
            bV(0)
        } else if (ScoreRandomNumber >= 36 && ScoreRandomNumber < 46) {
            aV(2)
            bV(1)
        } else if (ScoreRandomNumber >= 46 && ScoreRandomNumber < 56) {
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
            aV(5)
            bV(3)
        } else if (ScoreRandomNumber === 99 || ScoreRandomNumber === 100) {
            aV(5)
            bV(4)
        } else {
            console.warn("something wrong!")
            aV(10)
            bV(10)
        }
    }

    const scoreGeneratorToLost = (aV: (value: number)=>void,bV: (value: number)=>void) => {
        const ScoreRandomNumber = Math.ceil(Math.random() * 100)
        if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 21) {
            aV(0)
            bV(1)
        } else if (ScoreRandomNumber >= 21 && ScoreRandomNumber < 36) {
            aV(0)
            bV(2)
        } else if (ScoreRandomNumber >= 36 && ScoreRandomNumber < 46) {
            aV(1)
            bV(2)
        } else if (ScoreRandomNumber >= 46 && ScoreRandomNumber < 56) {
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
            aV(3)
            bV(5)
        } else if (ScoreRandomNumber === 99 || ScoreRandomNumber === 100) {
            aV(4)
            bV(5)
        } else {
            console.warn("something wrong!")
            aV(10)
            bV(10)
        }
    }

    const scoreGeneratorToDraw = (aV: (value: number)=>void,bV: (value: number)=>void) => {
        const ScoreRandomNumber = Math.ceil(Math.random() * 100)
        if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 31) {
            aV(0)
            bV(0)
        } else if (ScoreRandomNumber >= 31 && ScoreRandomNumber < 70) {
            aV(1)
            bV(1)
        } else if (ScoreRandomNumber >= 70 && ScoreRandomNumber < 88) {
            aV(2)
            bV(2)
        } else if (ScoreRandomNumber >= 88 && ScoreRandomNumber < 95) {
            aV(3)
            bV(3)
        } else if (ScoreRandomNumber >= 95 && ScoreRandomNumber < 98) {
            aV(4)
            bV(4)
        } else if (ScoreRandomNumber >= 98 && ScoreRandomNumber <= 100) {
            aV(5)
            bV(5)
        } else {
            console.warn("something wrong!")
            aV(10)
            bV(10)
        }

    }

    const testGenerate = (a: number,b: number, c:(val: number)=>void, d:(val: number)=>void)=> {
        console.log(a-b)
        let w=60;
        let l=20;
        if(a-b>65){
            w = 80;
            l = 92
        }
        else if(a-b>55 && a-b<=65){
            w = 76;
            l = 90
        }
        else if(a-b>44 && a-b<=55){
            w = 68;
            l = 86
        }
        else if(a-b>36 && a-b<=44){
            w = 62;
            l = 84
        }
        else if(a-b>27 && a-b<=36){
            w = 58;
            l = 82
        }
        else if(a-b>18 && a-b<=27){
            w = 52;
            l = 76
        }
        else if(a-b>9 && a-b<=18){
            w = 44;
            l = 74
        }
        else if(a-b>0 && a-b<=9){
            w = 36;
            l = 70
        }
        else  if(b-a>65){
            w = 8;
            l = 20
        }
        else if(b-a>55 && b-a<=65){
            w = 10;
            l = 24
        }
        else if(b-a>44 && b-a<=55){
            w = 14;
            l = 32
        }
        else if(b-a>36 && b-a<=44){
            w = 16;
            l = 38
        }
        else if(b-a>27 && b-a<=36){
            w = 18;
            l = 42
        }
        else if(b-a>18 && b-a<=27){
            w = 24;
            l = 48
        }
        else if(b-a>9 && b-a<=18){
            w = 26;
            l = 56
        }
        else if(b-a>0 && b-a<=9){
            w = 30;
            l = 64
        }
        else {
            console.warn("something wrong!")
            w = 20;
            l = 60
        }
        const FirstRandomNumber = Math.ceil(Math.random() * 100)
        //console.log(FirstRandomNumber)
        if (FirstRandomNumber <= w) {
            scoreGeneratorToWin(c, d)
        } else if (FirstRandomNumber > l) {
            scoreGeneratorToLost(c, d)
        } else {
            scoreGeneratorToDraw(c, d)
        }
    }

    const SETG = ()=>{
        setData2(data2=>data2+firstValue +secondValue)
        setData(data+`${firstValue} ${secondValue}//`)
    }

    //console.log(`${A.name} ${B.name} ${firstValue} ${secondValue}`)
    const stata = `${A.name} ${B.name} ${firstValue} ${secondValue}`
    // const allStats = StatisticAdder(A,B)
    const result = []
    result.push(stata)


    return (
        <div>
            {data2}
            <h2>

                {A.name}:{B.name}--{firstValue}:{secondValue}
                <button onClick={()=>{testGenerate(A.rating, B.rating, setFirstValue, setSecondValue)}}>play</button>
                <button onClick={SETG}>set</button>
            </h2>
        </div>
    );
};

export default Match;