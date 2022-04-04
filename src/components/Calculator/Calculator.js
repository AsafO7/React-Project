import { useReducer } from "react"
import { evaluate } from 'mathjs'

const ACTIONS =  {
    ADD_DIGIT: "add-digit",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    CHOOSE_OP: "choose-op",
    RESULT: "result"
}

// checks if c is an operand
function checkIfOperand(c) {
    if(c === "+" || 
        c === "-" || 
        c === "*" ||
        c === "/" ||
        c === "÷" ||
        c === "×" ||
        c === "−") {
            return true
        }
    return false
}

// counts the number of operands in str
function countOperands(str) {
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "+" || 
        str[i] === "-" || 
        str[i] === "*" ||
        str[i] === "/" ||
        str[i] === "÷" ||
        str[i] === "×" ||
        str[i] === "−") {
            count++;
        }
    }
    return count
}

// count the number of occurences of c in str
function countChar(str, c) {
    let count = 0
    for(let i = 0; i < str.length; i++) {
        if(str[i] === c) {
            count++;
        }
    }
    return count
}

// checks if an operand appeared before a dot, so we won't have a case of a number between 2 dots.
function checkIfOperandBeforeSecondDot(str) {
    for(let i = str.length - 1; i >= 0; i--) {
        if(str[i] === ".") return false
        if(checkIfOperand(str[i])) return true
    }
    return true
}

let usedResult = false

function reducer(state, {type, payload}) {
    switch(type) {
        case ACTIONS.ADD_DIGIT:
            // no multiple zeros on the left side of a number
            if(payload === "0" && state.currOp === "0") { return state }

            // making sure there are no dots at illigle places.
            if(payload === "." && (!state.currOp || state.currOp.charAt(state.currOp.length - 1) === "."
            || checkIfOperand(state.currOp.charAt(state.currOp.length - 1)) ||
            countChar(state.currOp, ".") === countOperands(state.currOp) + 1 ||
            !checkIfOperandBeforeSecondDot(state.currOp))) {
               return state
            }

            if(usedResult) {
                usedResult = false
                return {
                    ...state,
                    // prevOp: "",
                    currOp: payload
                }
            }
            else {
                return { 
                    ...state,
                    currOp: `${state.currOp || ""}${payload}`
                }
            }
            
        case ACTIONS.CHOOSE_OP:
            if(!state.currOp && payload !== "-") return { ...state } // expressions don't start with an operator.
            // no dots before an operand
            // if() { return state }
            // no multiple operators in a row.
            if(state.currOp) {
                if((checkIfOperand(state.currOp.charAt(state.currOp.length - 1)) && payload !== "-")
                || state.currOp.charAt(state.currOp.length - 1) === ".") {
                    return { ...state }
                }
            }
            
            if(usedResult) { usedResult = false }
            let operand = ""
            switch(payload) {
                case "-":
                    operand = "−"
                    break
                case "*":
                    operand = "×"
                    break
                case "/":
                    operand = "÷"
                    break
                default:
                    operand = "+"
                    break
            }
            return {
                ...state,
                currOp: `${state.currOp || ""}${operand}`
            }
            // return {
            //     ...state,
            //     currOp: `${state.currOp || ""}${payload}`
            // }
        case ACTIONS.RESULT:
            let result = ""
            if(state.currOp) {
                if(!checkIfOperand(state.currOp.charAt(state.currOp.length - 1))
                && state.currOp.charAt(state.currOp.length - 1) !== ".") {
                    let total = state.currOp.replaceAll("÷", "/").replaceAll("×", "*").replaceAll("−", "-")
                    result = `${evaluate(total)}`
                }
                else {
                    return state 
                }
            }
            usedResult = true
            if(result === "Infinity" || result === "NaN") { result = "0" }
            console.log(result)
            return {
                ...state,
                prevOp: state.currOp,
                currOp: result
            }
        case ACTIONS.CLEAR:
            return {}
        case ACTIONS.DELETE_DIGIT:
            if(!state.currOp) return state 
            return {
                ...state,
                currOp: state.currOp.substring(0, state.currOp.length - 1)
            }
        default: return 2
    }
}

export const Calculator = () => {
    const [{currOp, prevOp}, dispatch] = useReducer(reducer, {})
    return (
        // <main className="calculator">
        <div className="calculator-grid">
            <div className="screen">
                <div className="prev-op">{prevOp} </div>
                <div className="curr-op">{currOp}</div>
            </div>
            <button className="AC" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
            <button className="DEL" onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
            <button className="divide" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OP, payload: "/"})}>÷</button>
            <button className="one" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "1"})}>1</button>
            <button className="two" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "2"})}>2</button>
            <button className="three"onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "3"})}>3</button>
            <button className="multi" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OP, payload: "*"})}>×</button>
            <button className="four" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "4"})}>4</button>
            <button className="five" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "5"})}>5</button>
            <button className="six" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "6"})}>6</button>
            <button className="add" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OP, payload: "+"})}>+</button>
            <button className="seven" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "7"})}>7</button>
            <button className="eight" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "8"})}>8</button>
            <button className="nine" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "9"})}>9</button>
            <button className="sub" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OP, payload: "-"})}>−</button>
            <button className="dot" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "."})}>.</button>
            <button className="zero" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "0"})}>0</button>
            <button className="result" onClick={() => dispatch({ type: ACTIONS.RESULT})}>=</button>
        </div>
        // {/* </main> */}
    )
}