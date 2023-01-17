import React from "react";
import { Button } from "./Button";
import { useState } from "react";



export function Calculator() {


    const [sumX, setSumX] = useState(0);
    const [sumY, setSumY] = useState(0);
    const [func, setFunc] = useState([]);
    const [dot, setDot] = useState(0);


    const allClear = () => {
        setSumX(0);
        setSumY(0);
        setFunc([]);
        setDot(0);
    }

    const keystroke = (key) => {
        if (sumX == 0) {
            console.log('a');
            setSumX([key]);
        } else if (sumX == 0 && key == '.') {
            console.log('b');
            setSumX(sumX + key);
        } else if (sumX !== 0 && sumX !== sumY && func !== '=') {
            console.log('c')
            setSumX(sumX + key);
        } else if (sumX == sumY) {
            console.log('d');
            setSumX([key]);
        }
    }

    const decimal = (key) => {
        if (dot == 0) {
            console.log("dec trigger")
            keystroke(key);
            setDot(1);
        } else {
            console.log("don't double dot dude")
        }
    }

    const functionKey = (key) => {
        if (sumX == 0 && func == []) {
            console.log("1")
            setFunc(key);
        } else if (sumX == 0 && func !== [] && key == '-') {
            console.log("2")
            setSumY(0 - sumY);
        } else if (sumX == 0 && func !== [] && key == '+') {
            console.log("3")
            setSumY(Math.abs(sumY));
            setFunc(key);
        } else if (sumX !== 0 && sumY == 0 && key !== '=') {
            console.log("4")
            setFunc(key);
            setSumY(sumX);
            setSumX(0);
            setDot(0);
        } else if (sumX !== 0 && sumY !== 0 && key !== '=') {
            console.log("5")
            setFunc(key);
            setSumX(eval(Number(sumY) + func + Number(sumX)));
            setSumY(eval(Number(sumY) + func + Number(sumX)));
            setDot(0);
        } else if (sumX == 0 && sumY == 0 && key == '=') {
            console.log("6")
            setFunc(key);
            setSumX(sumX);
            setSumY(0);
            setDot(0);
        } else if (sumX !== 0 && sumY !== 0 && key == '=') {
            console.log("7")
            setFunc(key);
            setSumX(eval(Number(sumY) + func + Number(sumX)));
            setSumY(0);
            setDot(0);
        }
    }



    return (
        <div>
            <div>
                <output id="display">{sumX}</output>
            </div>
            <div>
                <Button text="AC" eventButton={allClear} id="clear" />
                <Button text="/" eventButton={() => functionKey("/")} id="divide" />
                <Button text="*" eventButton={() => functionKey("*")} id="multiply" />
            </div>
            <div>
                <Button text="7" eventButton={() => keystroke(7)} id="seven" />
                <Button text="8" eventButton={() => keystroke(8)} id="eight" />
                <Button text="9" eventButton={() => keystroke(9)} id="nine" />
                <Button text="-" eventButton={() => functionKey("-")} id="subtract" />
            </div>
            <div>
                <Button text="4" eventButton={() => keystroke(4)} id="four" />
                <Button text="5" eventButton={() => keystroke(5)} id="five" />
                <Button text="6" eventButton={() => keystroke(6)} id="six" />
                <Button text="+" eventButton={() => functionKey("+")} id="add" />
            </div>
            <div>
                <div>
                    <Button text="1" eventButton={() => keystroke(1)} id="one" />
                    <Button text="2" eventButton={() => keystroke(2)} id="two" />
                    <Button text="3" eventButton={() => keystroke(3)} id="three" />
                </div>
                <div>
                    <Button text="0" eventButton={() => keystroke(0)} id="zero" />
                    <Button text="." eventButton={() => decimal(".")} id="decimal" />
                </div>
                <Button text="=" eventButton={() => functionKey("=")} id="equals" />
            </div>
        </div>
    );
};
