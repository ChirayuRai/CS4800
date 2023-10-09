import { useState } from 'react'

function App() {
  const [input, setInput] = useState("")

  function evaulateExpression(equation) {
    // TODO: Add a validate equation function
    const eqArr = equation.split(" ");
    var res = 0;
    res = parseInt(eqArr[0])
    for (let i = 1; i < eqArr.length; i += 2) {
      const operator = eqArr[i]
      const otherNumber = parseInt(eqArr[i + 1])
      switch (operator) {
        case "+":
          res += otherNumber
          break;
        case "-":
          res = res - otherNumber
          break;
        case "*":
          res = res * otherNumber
          break;
        case "/":
          res = res / otherNumber
          break;
      }
    }
    setInput(String(res));
  }

  const buttonList = [
    {
      label: "1",
      value: 1,
      onClick: () => { setInput(`${input}1`) },
      isEquals: false,
      isNum: true,
    },
    {
      label: "2",
      value: 2,
      onClick: () => { setInput(`${input}2`) },
      isEquals: false,
      isNum: true,
    },
    {
      label: "3",
      value: 3,
      onClick: () => { setInput(`${input}3`) },
      isEquals: false,
      isNum: true,
    },
    {
      label: "+",
      onClick: () => { setInput(`${input} + `) },
      isEquals: false,
      isNum: false,
    },
    {
      label: "4",
      value: 4,
      onClick: () => { setInput(`${input}4`) },
      isEquals: false,
      isNum: true,
    },
    {
      label: "5",
      value: 5,
      onClick: () => { setInput(`${input}5`) },
      isEquals: false,
      isNum: true,
    },
    {
      label: "6",
      value: 6,
      onClick: () => { setInput(`${input}6`) },
      isEquals: false,
      isNum: true,
    },
    {
      label: "-",
      onClick: () => { setInput(`${input} - `) },
      isEquals: false,
      isNum: false,
    },
    {
      label: "7",
      value: 7,
      onClick: () => { setInput(`${input}7`) },
      isEquals: false,
      isNum: true,
    },
    {
      label: "8",
      value: 8,
      onClick: () => { setInput(`${input}8`) },
      isEquals: false,
      isNum: true,
    },
    {
      label: "9",
      value: 9,
      onClick: () => { setInput(`${input}9`) },
      isEquals: false,
      isNum: true,
    },
    {
      label: "*",
      onClick: () => { setInput(`${input} * `) },
      isEquals: false,
      isNum: false,
    },
    {
      label: "0",
      value: 0,
      onClick: () => { setInput(`${input}0`) },
      isEquals: false,
      isNum: true,
    },
    {
      label: ".",
      onClick: () => { setInput(`${input}.`) },
      isEquals: false,
      isNum: true,
    },
    {
      label: "=",
      onClick: () => { evaulateExpression(input) },
      isEquals: true,
      isNum: false,
    },
    {
      label: "/",
      onClick: () => { setInput(`${input} / `) },
      isEquals: false,
      isNum: false,
    },
  ]

  return (
    <div className='w-screen h-screen bg-zinc-500 flex flex-col justify-center'>
      <h1
      className='text-black font-bold text-8xl m-auto'
      >Calculator</h1>
      <div className='w-1/2 h-2/5 max-w-sm bg-zinc-800 rounded m-auto border'>
        <div className='flex flex-col'>
          <div className='w-5/6 h-1/2 bg-slate-100 mx-auto mt-8 p-2 '>
            {input ? input : "Enter some numbers!"}
          </div>
          <div className='grid grid-cols-4 grid-rows-4 m-3 max-w-sm'>
            {buttonList.map((btn) => {
              return <button
                className={`w-20 h-20 rounded-full my-1 ${btn.isNum ? "bg-purple-300" : btn.isEquals ? "bg-red-300" : "bg-purple-600"}`}
                onClick={btn.onClick}
              >
                {btn.label}
              </button>
            })}
          </div>
          <button className='5/6 h-20 rounded-full bg-purple-600 my-1 mx-3' onClick={() => { setInput("") }}>CE</button>
        </div>
      </div>
    </div>
  )
}

export default App
