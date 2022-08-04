import React, {useState} from 'react';
import {BaseType} from "./Test";
import style from "./Match.module.css"

type MatchType = {
    A: BaseType
    B: BaseType
    setStats: (obj: BaseType[]) => void
}

const Match: React.FC<MatchType> = ({A, B,  setStats}) => {

    const [firstValue, setFirstValue] = useState<number>(0)
    const [secondValue, setSecondValue] = useState<number>(0)
    const [clicker, setClicker] = useState(false)
    const [secondClicker, setSecondClicker] = useState(false)

    const scoreGeneratorToWin = (aV: (value: number) => void, bV: (value: number) => void, s: number = 4) => {

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
        } else if (s === 3) {
            const ScoreRandomNumber = Math.ceil(Math.random() * 100)
            if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 20) {
                aV(1)
                bV(0)
            } else if (ScoreRandomNumber >= 20 && ScoreRandomNumber < 38) {
                aV(2)
                bV(0)
            } else if (ScoreRandomNumber >= 38 && ScoreRandomNumber < 52) {
                aV(2)
                bV(1)
            } else if (ScoreRandomNumber >= 52 && ScoreRandomNumber < 66) {
                aV(3)
                bV(1)
            } else if (ScoreRandomNumber >= 66 && ScoreRandomNumber < 82) {
                aV(3)
                bV(2)
            } else if (ScoreRandomNumber >= 82 && ScoreRandomNumber < 91) {
                aV(4)
                bV(3)
            } else if (ScoreRandomNumber >= 91 && ScoreRandomNumber <= 99) {
                aV(4)
                bV(2)
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
            if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 24) {
                aV(1)
                bV(0)
            } else if (ScoreRandomNumber >= 24 && ScoreRandomNumber < 36) {
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
    }

    const scoreGeneratorToLost = (aV: (value: number) => void, bV: (value: number) => void, s: number = 4) => {

        if (s === 1) {
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
        } else if (s === 3) {
            const ScoreRandomNumber = Math.ceil(Math.random() * 100)
            if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 20) {
                aV(0)
                bV(1)
            } else if (ScoreRandomNumber >= 20 && ScoreRandomNumber < 38) {
                aV(0)
                bV(2)
            } else if (ScoreRandomNumber >= 38 && ScoreRandomNumber < 52) {
                aV(1)
                bV(2)
            } else if (ScoreRandomNumber >= 52 && ScoreRandomNumber < 66) {
                aV(1)
                bV(3)
            } else if (ScoreRandomNumber >= 66 && ScoreRandomNumber < 82) {
                aV(2)
                bV(3)
            } else if (ScoreRandomNumber >= 82 && ScoreRandomNumber < 91) {
                aV(3)
                bV(4)
            } else if (ScoreRandomNumber >= 91 && ScoreRandomNumber <= 99) {
                aV(2)
                bV(4)
            } else if (ScoreRandomNumber >= 99 && ScoreRandomNumber <= 100) {
                aV(0)
                bV(3)
            } else {
                console.warn("something wrong!")
                aV(10)
                bV(10)
            }
        } else {
            const ScoreRandomNumber = Math.ceil(Math.random() * 100)
            if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 24) {
                aV(0)
                bV(1)
            } else if (ScoreRandomNumber >= 24 && ScoreRandomNumber < 36) {
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
    }

    const scoreGeneratorToDraw = (aV: (value: number) => void, bV: (value: number) => void) => {
        const ScoreRandomNumber = Math.ceil(Math.random() * 100)
        if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 34) {
            aV(0)
            bV(0)
        } else if (ScoreRandomNumber >= 34 && ScoreRandomNumber < 73) {
            aV(1)
            bV(1)
        } else if (ScoreRandomNumber >= 73 && ScoreRandomNumber < 89) {
            aV(2)
            bV(2)
        } else if (ScoreRandomNumber >= 89 && ScoreRandomNumber < 95) {
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

    const testGenerate = (a: number, b: number, c: (val: number) => void, d: (val: number) => void) => {

        console.log(a - b)
        let w = 0;
        let l = 50;
        let s = 0
        if (a - b > 40) {
            w = 96;
            l = 97
            s = 1
        } else if (a - b > 30 && a - b <= 40) {
            w = 91;
            l = 95
            s = 1
        } else if (a - b > 25 && a - b <= 30) {
            w = 85;
            l = 92
            s = 1
        } else if (a - b > 20 && a - b <= 25) {
            w = 78;
            l = 88
            s = 1
        } else if (a - b > 14 && a - b <= 20) {
            w = 72;
            l = 82
        } else if (a - b > 8 && a - b <= 14) {
            w = 64;
            l = 78
        } else if (a - b > 3 && a - b <= 8) {
            w = 48;
            l = 66
            s = 3
        } else if (a - b >= 0 && a - b <= 3) {
            w = 38;
            l = 62
            s = 3
        } else if (b - a > 40) {
            w = 2;
            l = 4;
            s = 2
        } else if (b - a > 30 && b - a <= 40) {
            w = 5;
            l = 9;
            s = 2
        } else if (b - a > 25 && b - a <= 30) {
            w = 8;
            l = 15
            s = 2
        } else if (b - a > 20 && b - a <= 25) {
            w = 12;
            l = 22
            s = 2
        } else if (b - a > 14 && b - a <= 20) {
            w = 18;
            l = 28
        } else if (b - a > 8 && b - a <= 14) {
            w = 22;
            l = 36
        } else if (b - a > 3 && b - a <= 8) {
            w = 34;
            l = 52
            s = 3
        } else if (b - a >= 0 && b - a <= 3) {
            w = 38;
            l = 62
            s = 3
        } else {
            console.warn("something wrong!")
            w = 0;
            l = 50
        }
        const FirstRandomNumber = Math.ceil(Math.random() * 100)

        if (FirstRandomNumber <= w) {
            scoreGeneratorToWin(c, d, s)
        } else if (FirstRandomNumber > l) {
            scoreGeneratorToLost(c, d, s)
        } else {
            scoreGeneratorToDraw(c, d)
        }
        setClicker(true)
    }

    // const scoreGeneratorToWin = (aV: (value: number) => void, bV: (value: number) => void, s: number) => {
    //     if (s = 1) {
    //         console.log("im here")
    //         const ScoreRandomNumber = Math.ceil(Math.random() * 100)
    //         if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 20) {
    //             aV(1)
    //             bV(0)
    //         } else if (ScoreRandomNumber >= 20 && ScoreRandomNumber < 32) {
    //             aV(2)
    //             bV(0)
    //         } else if (ScoreRandomNumber >= 32 && ScoreRandomNumber < 44) {
    //             aV(2)
    //             bV(1)
    //         } else if (ScoreRandomNumber >= 44 && ScoreRandomNumber < 56) {
    //             aV(3)
    //             bV(0)
    //         } else if (ScoreRandomNumber >= 56 && ScoreRandomNumber < 63) {
    //             aV(3)
    //             bV(1)
    //         } else if (ScoreRandomNumber >= 63 && ScoreRandomNumber < 72) {
    //             aV(3)
    //             bV(2)
    //         } else if (ScoreRandomNumber >= 72 && ScoreRandomNumber < 77) {
    //             aV(4)
    //             bV(0)
    //         } else if (ScoreRandomNumber >= 77 && ScoreRandomNumber < 82) {
    //             aV(4)
    //             bV(1)
    //         } else if (ScoreRandomNumber >= 82 && ScoreRandomNumber < 87) {
    //             aV(4)
    //             bV(2)
    //         } else if (ScoreRandomNumber >= 87 && ScoreRandomNumber < 91) {
    //             aV(4)
    //             bV(3)
    //         } else if (ScoreRandomNumber >= 91 && ScoreRandomNumber < 94) {
    //             aV(5)
    //             bV(0)
    //         } else if (ScoreRandomNumber >= 94 && ScoreRandomNumber < 96) {
    //             aV(5)
    //             bV(1)
    //         } else if (ScoreRandomNumber >= 96 && ScoreRandomNumber < 98) {
    //             aV(5)
    //             bV(2)
    //         } else if (ScoreRandomNumber === 98) {
    //             aV(6)
    //             bV(0)
    //         } else if (ScoreRandomNumber === 99 || ScoreRandomNumber === 100) {
    //             aV(6)
    //             bV(1)
    //         } else {
    //             console.warn("something wrong!")
    //             aV(10)
    //             bV(10)
    //         }
    //     }
    //     const ScoreRandomNumber = Math.ceil(Math.random() * 100)
    //     if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 24) {
    //         aV(1)
    //         bV(0)
    //     } else if (ScoreRandomNumber >= 24 && ScoreRandomNumber < 36) {
    //         aV(2)
    //         bV(0)
    //     } else if (ScoreRandomNumber >= 36 && ScoreRandomNumber < 46) {
    //         aV(2)
    //         bV(1)
    //     } else if (ScoreRandomNumber >= 46 && ScoreRandomNumber < 56) {
    //         aV(3)
    //         bV(0)
    //     } else if (ScoreRandomNumber >= 56 && ScoreRandomNumber < 63) {
    //         aV(3)
    //         bV(1)
    //     } else if (ScoreRandomNumber >= 63 && ScoreRandomNumber < 72) {
    //         aV(3)
    //         bV(2)
    //     } else if (ScoreRandomNumber >= 72 && ScoreRandomNumber < 77) {
    //         aV(4)
    //         bV(0)
    //     } else if (ScoreRandomNumber >= 77 && ScoreRandomNumber < 82) {
    //         aV(4)
    //         bV(1)
    //     } else if (ScoreRandomNumber >= 82 && ScoreRandomNumber < 87) {
    //         aV(4)
    //         bV(2)
    //     } else if (ScoreRandomNumber >= 87 && ScoreRandomNumber < 91) {
    //         aV(4)
    //         bV(3)
    //     } else if (ScoreRandomNumber >= 91 && ScoreRandomNumber < 94) {
    //         aV(5)
    //         bV(0)
    //     } else if (ScoreRandomNumber >= 94 && ScoreRandomNumber < 96) {
    //         aV(5)
    //         bV(1)
    //     } else if (ScoreRandomNumber >= 96 && ScoreRandomNumber < 98) {
    //         aV(5)
    //         bV(2)
    //     } else if (ScoreRandomNumber === 98) {
    //         aV(5)
    //         bV(3)
    //     } else if (ScoreRandomNumber === 99 || ScoreRandomNumber === 100) {
    //         aV(5)
    //         bV(4)
    //     } else {
    //         console.warn("something wrong!")
    //         aV(10)
    //         bV(10)
    //     }
    // }
    //
    // const scoreGeneratorToLost = (aV: (value: number) => void, bV: (value: number) => void, s:number) => {
    //    if (s=1){
    //        const ScoreRandomNumber = Math.ceil(Math.random() * 100)
    //        if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 20) {
    //            aV(0)
    //            bV(1)
    //        } else if (ScoreRandomNumber >= 20 && ScoreRandomNumber < 32) {
    //            aV(0)
    //            bV(2)
    //        } else if (ScoreRandomNumber >= 32 && ScoreRandomNumber < 44) {
    //            aV(1)
    //            bV(2)
    //        } else if (ScoreRandomNumber >= 44 && ScoreRandomNumber < 56) {
    //            aV(0)
    //            bV(3)
    //        } else if (ScoreRandomNumber >= 56 && ScoreRandomNumber < 63) {
    //            aV(1)
    //            bV(3)
    //        } else if (ScoreRandomNumber >= 63 && ScoreRandomNumber < 72) {
    //            aV(2)
    //            bV(3)
    //        } else if (ScoreRandomNumber >= 72 && ScoreRandomNumber < 77) {
    //            aV(0)
    //            bV(4)
    //        } else if (ScoreRandomNumber >= 77 && ScoreRandomNumber < 82) {
    //            aV(1)
    //            bV(4)
    //        } else if (ScoreRandomNumber >= 82 && ScoreRandomNumber < 87) {
    //            aV(2)
    //            bV(4)
    //        } else if (ScoreRandomNumber >= 87 && ScoreRandomNumber < 91) {
    //            aV(3)
    //            bV(4)
    //        } else if (ScoreRandomNumber >= 91 && ScoreRandomNumber < 94) {
    //            aV(0)
    //            bV(5)
    //        } else if (ScoreRandomNumber >= 94 && ScoreRandomNumber < 97) {
    //            aV(1)
    //            bV(5)
    //        } else if (ScoreRandomNumber >= 96 && ScoreRandomNumber < 98) {
    //            aV(2)
    //            bV(5)
    //        } else if (ScoreRandomNumber === 98) {
    //            aV(0)
    //            bV(6)
    //        } else if (ScoreRandomNumber === 99 || ScoreRandomNumber === 100) {
    //            aV(1)
    //            bV(6)
    //        } else {
    //            console.warn("something wrong!")
    //            aV(10)
    //            bV(10)
    //        }
    //    }
    //     const ScoreRandomNumber = Math.ceil(Math.random() * 100)
    //     if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 24) {
    //         aV(0)
    //         bV(1)
    //     } else if (ScoreRandomNumber >= 24 && ScoreRandomNumber < 36) {
    //         aV(0)
    //         bV(2)
    //     } else if (ScoreRandomNumber >= 36 && ScoreRandomNumber < 46) {
    //         aV(1)
    //         bV(2)
    //     } else if (ScoreRandomNumber >= 46 && ScoreRandomNumber < 56) {
    //         aV(0)
    //         bV(3)
    //     } else if (ScoreRandomNumber >= 56 && ScoreRandomNumber < 63) {
    //         aV(1)
    //         bV(3)
    //     } else if (ScoreRandomNumber >= 63 && ScoreRandomNumber < 72) {
    //         aV(2)
    //         bV(3)
    //     } else if (ScoreRandomNumber >= 72 && ScoreRandomNumber < 77) {
    //         aV(0)
    //         bV(4)
    //     } else if (ScoreRandomNumber >= 77 && ScoreRandomNumber < 82) {
    //         aV(1)
    //         bV(4)
    //     } else if (ScoreRandomNumber >= 82 && ScoreRandomNumber < 87) {
    //         aV(2)
    //         bV(4)
    //     } else if (ScoreRandomNumber >= 87 && ScoreRandomNumber < 91) {
    //         aV(3)
    //         bV(4)
    //     } else if (ScoreRandomNumber >= 91 && ScoreRandomNumber < 94) {
    //         aV(0)
    //         bV(5)
    //     } else if (ScoreRandomNumber >= 94 && ScoreRandomNumber < 96) {
    //         aV(1)
    //         bV(5)
    //     } else if (ScoreRandomNumber >= 96 && ScoreRandomNumber < 98) {
    //         aV(2)
    //         bV(5)
    //     } else if (ScoreRandomNumber === 98) {
    //         aV(3)
    //         bV(5)
    //     } else if (ScoreRandomNumber === 99 || ScoreRandomNumber === 100) {
    //         aV(4)
    //         bV(5)
    //     } else {
    //         console.warn("something wrong!")
    //         aV(10)
    //         bV(10)
    //     }
    // }
    //
    // const scoreGeneratorToDraw = (aV: (value: number) => void, bV: (value: number) => void) => {
    //     const ScoreRandomNumber = Math.ceil(Math.random() * 100)
    //     if (ScoreRandomNumber >= 0 && ScoreRandomNumber < 34) {
    //         aV(0)
    //         bV(0)
    //     } else if (ScoreRandomNumber >= 34 && ScoreRandomNumber < 73) {
    //         aV(1)
    //         bV(1)
    //     } else if (ScoreRandomNumber >= 73 && ScoreRandomNumber < 89) {
    //         aV(2)
    //         bV(2)
    //     } else if (ScoreRandomNumber >= 89 && ScoreRandomNumber < 95) {
    //         aV(3)
    //         bV(3)
    //     } else if (ScoreRandomNumber >= 95 && ScoreRandomNumber < 98) {
    //         aV(4)
    //         bV(4)
    //     } else if (ScoreRandomNumber >= 98 && ScoreRandomNumber <= 100) {
    //         aV(5)
    //         bV(5)
    //     } else {
    //         console.warn("something wrong!")
    //         aV(10)
    //         bV(10)
    //     }
    //
    // }
    //
    // const testGenerate = (a: number, b: number, c: (val: number) => void, d: (val: number) => void) => {
    //     console.log(a - b)
    //     let w = 0;
    //     let l = 50;
    //     let s = 0
    //     if (a - b > 65) {
    //         w = 92;
    //         l = 96
    //         s = 1
    //     } else if (a - b > 55 && a - b <= 65) {
    //         w = 86;
    //         l = 94
    //     } else if (a - b > 42 && a - b <= 55) {
    //         w = 82;
    //         l = 92
    //     } else if (a - b > 30 && a - b <= 42) {
    //         w = 76;
    //         l = 90
    //     } else if (a - b > 22 && a - b <= 30) {
    //         w = 68;
    //         l = 82
    //     } else if (a - b > 14 && a - b <= 22) {
    //         w = 60;
    //         l = 76
    //     } else if (a - b > 7 && a - b <= 14) {
    //         w = 52;
    //         l = 74
    //     } else if (a - b >= 0 && a - b <= 7) {
    //         w = 46;
    //         l = 70
    //     } else if (b - a > 65) {
    //         w = 4;
    //         l = 8;
    //         s = 2
    //     } else if (b - a > 55 && b - a <= 65) {
    //         w = 6;
    //         l = 14;
    //     } else if (b - a > 42 && b - a <= 55) {
    //         w = 8;
    //         l = 18
    //     } else if (b - a > 30 && b - a <= 42) {
    //         w = 10;
    //         l = 24
    //     } else if (b - a > 22 && b - a <= 30) {
    //         w = 18;
    //         l = 32
    //     } else if (b - a > 14 && b - a <= 22) {
    //         w = 24;
    //         l = 40
    //     } else if (b - a > 7 && b - a <= 14) {
    //         w = 26;
    //         l = 48
    //     } else if (b - a >= 0 && b - a <= 7) {
    //         w = 30;
    //         l = 54
    //         s = 3
    //     } else {
    //         console.warn("something wrong!")
    //         w = 0;
    //         l = 50
    //     }
    //     const FirstRandomNumber = Math.ceil(Math.random() * 100)
    //     if (FirstRandomNumber <= w) {
    //         scoreGeneratorToWin(c, d, s)
    //     } else if (FirstRandomNumber > l) {
    //         scoreGeneratorToLost(c, d, s)
    //     } else {
    //         scoreGeneratorToDraw(c, d)
    //     }
    //     setClicker(true)
    // }

    const SETG = () => {
        A.games = A.games + 1
        B.games = B.games + 1
        A.scored = A.scored + firstValue
        A.conceded = A.conceded + secondValue
        B.scored = B.scored + secondValue
        B.conceded = B.conceded + firstValue

        if (firstValue > secondValue) {
            A.wins = A.wins + 1
            A.points = A.points + 3
            B.lost = B.lost + 1
        } else if (firstValue < secondValue) {
            B.wins = B.wins + 1
            B.points = B.points + 3
            A.lost = A.lost + 1
        } else {
            A.draws = A.draws + 1
            B.draws = B.draws + 1
            A.points = A.points + 1
            B.points = B.points + 1
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
                <div className={style.ButtnosWrapper}>
                    <button onClick={() => {
                        testGenerate(A.rating, B.rating, setFirstValue, setSecondValue)
                    }} disabled={clicker}>play
                    </button>
                    <button onClick={SETG} disabled={secondClicker}>set</button>
                </div>


            </div>

            <div>

            </div>

        </>
    );
};

export default Match;