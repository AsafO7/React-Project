import { useReducer } from "react"
// import { evaluate } from 'mathjs'

// const ACTIONS =  {
//     ADD_DIGIT: "add-digit",
//     CLEAR: "clear",
//     DELETE_DIGIT: "delete-digit",
//     CHOOSE_OP: "choose-op",
//     RESULT: "result"
// }

// // checks if c is an operand
// function checkIfOperand(c: string) {
//     if(c === "+" || 
//         c === "-" || 
//         c === "*" ||
//         c === "/") {
//             return true
//         }
//     return false
// }

// // counts the number of operands in str
// function countOperands(str: string) {
//     let count = 0
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === "+" || 
//         str[i] === "-" || 
//         str[i] === "*" ||
//         str[i] === "/") {
//             count++;
//         }
//     }
//     return count
// }

// // count the number of occurences of c in str
// function countChar(str: string, c: string) {
//     let count = 0
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === c) {
//             count++;
//         }
//     }
//     return count
// }

// // checks if an operand appeared before a dot, so we won't have a case of a number between 2 dots.
// function checkIfOperandBeforeSecondDot(str: string) {
//     for(let i = str.length - 1; i >= 0; i--) {
//         if(str[i] === ".") return false
//         if(checkIfOperand(str[i])) return true
//     }
//     return true
// }

// type reducerProps = {
//     state: {currOp: string, prevOp: string},
//     action: {type: string, payload?: string}
// }

// function reducer(props: reducerProps): Object {
//     switch(props.action.type) {
//         case ACTIONS.ADD_DIGIT:
//             // no multiple zeros on the left side of a number
//             if(props.action.payload === "0" && props.state.currOp === "0") { return props.state }

//             // making sure there are no dots at illigle places.
//             if(props.action.payload === "." && (!props.state.currOp || props.state.currOp.charAt(props.state.currOp.length - 1) === "."
//             || checkIfOperand(props.state.currOp.charAt(props.state.currOp.length - 1)) ||
//             countChar(props.state.currOp, ".") === countOperands(props.state.currOp) + 1 ||
//             !checkIfOperandBeforeSecondDot(props.state.currOp))) {
//                return props.state
//             }
            
//             return { 
//                 ...props.state,
//                 currOp: `${props.state.currOp || ""}${props.action.payload}`
//             }
//         case ACTIONS.CHOOSE_OP:
//             if(!props.state.currOp) return { ...props.state } // expressions don't start with an operator.
//             // no dots before an operand
//             if(props.state.currOp.charAt(props.state.currOp.length - 1) === ".") { return props.state }
//             // no multiple operators in a row.
//             if(checkIfOperand(props.state.currOp.charAt(props.state.currOp.length - 1))) {
//                 return { ...props.state }
//             }
//             if(props.action.payload === "/") {
//                 let operand = "÷"
//                 return {
//                     ...props.state,
//                     currOp: `${props.state.currOp || ""}${operand}`
//                 }
//             }
//             return {
//                 ...props.state,
//                 currOp: `${props.state.currOp || ""}${props.action.payload}`
//             }
//         case ACTIONS.RESULT:
//             let result = ""
//             if(props.state.currOp) {
//                 if(!checkIfOperand(props.state.currOp.charAt(props.state.currOp.length - 1))) {
//                     let total = props.state.currOp.replaceAll("÷", "/")
//                     result = `${evaluate(total)}`
//                 }
//                 else {
//                     return props.state 
//                 }
//             }
//             return {
//                 ...props.state,
//                 prevOp: props.state.currOp,
//                 currOp: result
//             }
//         case ACTIONS.CLEAR:
//             return {}
//         case ACTIONS.DELETE_DIGIT:
//             if(!props.state.currOp) return props.state 
//             return {
//                 ...props.state,
//                 currOp: props.state.currOp.substring(0, props.state.currOp.length - 1)
//             }
//         default: return ""
//     }
// }

// export const Calculator: React.FC = () => {
//     const [{currOp, prevOp}, dispatch = (action: Object) => void{}] = useReducer(reducer, {})
//     return (
//         // <main className="calculator">
//         <div className="calculator-grid">
//             <div className="screen">
//                 <div className="prev-op">{prevOp} </div>
//                 <div className="curr-op">{currOp}</div>
//             </div>
//             <button className="AC" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
//             <button className="DEL" onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
//             <button className="divide" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OP, payload: "/"})}>÷</button>
//             <button className="one" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "1"})}>1</button>
//             <button className="two" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "2"})}>2</button>
//             <button className="three"onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "3"})}>3</button>
//             <button className="multi" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OP, payload: "*"})}>*</button>
//             <button className="four" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "4"})}>4</button>
//             <button className="five" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "5"})}>5</button>
//             <button className="six" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "6"})}>6</button>
//             <button className="add" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OP, payload: "+"})}>+</button>
//             <button className="seven" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "7"})}>7</button>
//             <button className="eight" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "8"})}>8</button>
//             <button className="nine" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "9"})}>9</button>
//             <button className="sub" onClick={() => dispatch({ type: ACTIONS.CHOOSE_OP, payload: "-"})}>-</button>
//             <button className="dot" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "."})}>.</button>
//             <button className="zero" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "0"})}>0</button>
//             <button className="result" onClick={() => dispatch({ type: ACTIONS.RESULT})}>=</button>
//         </div>
//         // {/* </main> */}
//     )
// }