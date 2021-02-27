import React, { useState } from 'react'

function useToggleReturn(val1, val2) {
  const [ val, setVal ] = useState(val1)

  const togglePopVal = () => {
    if (val === val1) {
      setVal(val2)
      return val
    } else {
      setVal(val1)
      return val
    }
  }

  return togglePopVal

}
export default function TicTacToe() {
  const togglePopVal = useToggleReturn('X', 'O')
  return (
    <div>
      TicTacToe
      <NoHeightLineBreak/>
      <Box nextMove={togglePopVal}/>
      <Box nextMove={togglePopVal}/>
      <Box nextMove={togglePopVal}/>
      <NoHeightLineBreak/>
      <NoHeightLineBreak/>
      <Box nextMove={togglePopVal}/>
      <Box nextMove={togglePopVal}/>
      <Box nextMove={togglePopVal}/>
      <NoHeightLineBreak/>
      <NoHeightLineBreak/>
      <Box nextMove={togglePopVal}/>
      <Box nextMove={togglePopVal}/>
      <Box nextMove={togglePopVal}/>
    </div>
  )
}
function NoHeightLineBreak(props) {
  return (
    <br style={{
      margin: "0px 0",
      "line-height": "0px",
      display: "block", /* makes it have a width */
      content: "", /* clears default height */
      "margin-top": 0, /* change this to whatever height you want it */
    }}
    />
  )
}

function Box(props) {
    const [ text, setText ] = useState();
    return (
      <div onClick={() => setText(props.nextMove) } style={{
          width: "300px",
          height: "100px",
          border: "15px solid black",
          padding: "50px",
          margin: "0px",
          float: "left",
          display: "block",
        }}>
        {props.children}
        {text}
      </div>
    )
}
