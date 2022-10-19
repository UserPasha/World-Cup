import React, {useState} from 'react';
import style from './Screw.module.css'
import Select from "./Select/Select";
import {PriceTable} from "./Select/Price";

export const Screw = () => {
    const widths = ['3.0', '3.5', '4.0']
    const lengths = ['20', '25', '30', '35', '40']
    const [width, onChangeWidth] = useState(widths[0])
    const [length, onChangeLength] = useState(widths[0])
    let [price, setPrice] = useState(0)
    const matchingPrice = (width: string, length: string) => {

        let param: string = width + length

        switch (param){
            case '3.020': price = PriceTable["3x20"]
                break
            case '3.025': price = PriceTable["3x25"]
                break
            case '3.030': price = PriceTable["3x30"]
                break
            case '3.035': price = PriceTable["3x35"]
                break
            case '3.040': price = PriceTable["3x40"]
                break
            case '3.520': price = PriceTable["3.5x20"]
                break
            case '3.525': price = PriceTable["3.5x25"]
                break
            case '3.530': price = PriceTable["3.5x30"]
                break
            case '3.535': price = PriceTable["3.5x35"]
                break
            case '3.540': price = PriceTable["3.5x40"]
                break
            case '4.020': price = PriceTable["4x20"]
                break
            case '4.025': price = PriceTable["4x25"]
                break
            case '4.030': price = PriceTable["4x30"]
                break
            case '4.035': price = PriceTable["4x35"]
                break
            case '4.040': price = PriceTable["4x40"]
                break
            default: price = 0
        }
        setPrice (price)
    }

    return (
        <div className={style.wrapper}>
            <Select options={widths}
                    value={width}
                    onChangeOption={onChangeWidth}/>
            <Select options={lengths}
                    value={length}
                    onChangeOption={onChangeLength}/>
            <button onClick={()=>{matchingPrice(width, length)}}>Select</button>
            <div>{price}</div>
        </div>
    );
};

