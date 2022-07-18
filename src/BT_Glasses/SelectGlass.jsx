import React from 'react'

const SelectGlass = ({info,onSelect}) => {
  const changeGlass = (info) => {
    onSelect(info)
  }
  return (
    <div className="chose-glass p-5 bg-light d-flex flex-wrap">
      {info.map((info) => {
        return(
          <div
          key={info.id}
          onClick={() => changeGlass(info)}
          className="col-2 p-3"
        >
          <div className='border'>
            <img
              src={info.url}
              alt=""
              width="100%"
              height="50px"
            />
          </div>
        </div>
        )
      })}
  </div>
  )
}

export default SelectGlass