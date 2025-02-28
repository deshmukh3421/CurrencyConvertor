import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
  const amountInputId = useId()
  return (
    <div className={`flex bg-white text-sm rounded-lg p-3 ${className}`}>
        <div className='w-1/2'>
            <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>
                {label}
            </label>
            <input
                id={amountInputId}
                type="number"
                placeholder='Amount'
                className="outline-none w-full bg-transparent py-1.5"
                disabled={amountDisable}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                value={amount}
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectCurrency}
                disabled={currencyDisable}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} 
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox
