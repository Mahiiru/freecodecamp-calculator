import React from "react";
import { Button } from "./Button";
import { useState } from "react";



export function Calculator() {


    const [actualValue, setActualValue] = useState(0);
    const [operatedValue, setOperatedValue] = useState(0);
    const [actualOperator, setActualOperator] = useState([]);
    const [dotCountPerNumber, setDotCountPerNumber] = useState(0);


    const handlerClearButton = () => {
        setActualValue(0);
        setOperatedValue(0);
        setActualOperator([]);
        setDotCountPerNumber(0);
    }

    const handlerDigitsButtons = (digit) => {
        if (Number(actualValue) === 0) {
            setActualValue([digit]);
        } else if (actualValue === 0 && digit === '.') {
            setActualValue(actualValue + digit);
        } else if (actualValue !== 0 && actualValue !== operatedValue && actualOperator !== '=') {
            setActualValue(actualValue + digit);
        } else if (actualValue === operatedValue) {
            setActualValue([digit]);
        }
    }

    const handlerDotButton = (decimal) => {
        if (dotCountPerNumber === 0) {
            handlerDigitsButtons(decimal);
            setDotCountPerNumber(1);
        }
    }

    const handlerOperatorsButtons = (operator) => {
        if (actualValue === 0 && actualOperator === []) {
            setActualOperator(operator);
        } else if (actualValue === 0 && actualOperator !== [] && operator === '-') {
            setOperatedValue(0 - operatedValue);
        } else if (actualValue === 0 && actualOperator !== [] && operator === '+') {
            setOperatedValue(Math.abs(operatedValue));
            setActualOperator(operator);
        } else if (actualValue !== 0 && operatedValue === 0 && operator !== '=') {
            setActualOperator(operator);
            setOperatedValue(actualValue);
            setActualValue(0);
            setDotCountPerNumber(0);
        } else if (actualValue !== 0 && operatedValue !== 0 && operator !== '=') {
            setActualOperator(operator);
            setActualValue(eval(Number(operatedValue) + actualOperator + Number(actualValue)));
            setOperatedValue(eval(Number(operatedValue) + actualOperator + Number(actualValue)));
            setDotCountPerNumber(0);
        } else if (actualValue === 0 && operatedValue === 0 && operator === '=') {
            setActualOperator(operator);
            setActualValue(actualValue);
            setOperatedValue(0);
            setDotCountPerNumber(0);
        } else if (actualValue !== 0 && operatedValue !== 0 && operator === '=') {
            setActualOperator(operator);
            setActualValue(eval(Number(operatedValue) + actualOperator + Number(actualValue)));
            setOperatedValue(0);
            setDotCountPerNumber(0);
        }
    }



    return (
        <div>
            <div>
                <output id="display">{actualValue}</output>
            </div>
            <div>
                <Button text="AC" eventButton={handlerClearButton} id="clear" />
                <Button text="/" eventButton={() => handlerOperatorsButtons("/")} id="divide" />
                <Button text="*" eventButton={() => handlerOperatorsButtons("*")} id="multiply" />
            </div>
            <div>
                <Button text="7" eventButton={() => handlerDigitsButtons(7)} id="seven" />
                <Button text="8" eventButton={() => handlerDigitsButtons(8)} id="eight" />
                <Button text="9" eventButton={() => handlerDigitsButtons(9)} id="nine" />
                <Button text="-" eventButton={() => handlerOperatorsButtons("-")} id="subtract" />
            </div>
            <div>
                <Button text="4" eventButton={() => handlerDigitsButtons(4)} id="four" />
                <Button text="5" eventButton={() => handlerDigitsButtons(5)} id="five" />
                <Button text="6" eventButton={() => handlerDigitsButtons(6)} id="six" />
                <Button text="+" eventButton={() => handlerOperatorsButtons("+")} id="add" />
            </div>
            <div>
                <div>
                    <Button text="1" eventButton={() => handlerDigitsButtons(1)} id="one" />
                    <Button text="2" eventButton={() => handlerDigitsButtons(2)} id="two" />
                    <Button text="3" eventButton={() => handlerDigitsButtons(3)} id="three" />
                </div>
                <div>
                    <Button text="0" eventButton={() => handlerDigitsButtons(0)} id="zero" />
                    <Button text="." eventButton={() => handlerDotButton(".")} id="decimal" />
                </div>
                <Button text="=" eventButton={() => handlerOperatorsButtons("=")} id="equals" />
            </div>
        </div>
    );
};
