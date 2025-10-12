import React from 'react'

type PopoverProps = {
  setOpenModalId : (value : string | null) => void
  modalId : string
}

function Popover({setOpenModalId , modalId} : PopoverProps) {
  return (
    <div className='absolute bg-secondary py-1.5 rounded-[6px] text-white text-xs flex flex-col w-[80px] right-full top-0 z-50'>
        <button className='hover:bg-white/20 h-7.5' onClick={() => setOpenModalId(modalId)}>مشاهده جزئیات</button>
        <button className='hover:bg-white/20 h-7.5'>دانلود گزارش</button>
        <button className='hover:bg-white/20 h-7.5'>حذف کمپین</button>

    </div>
  )
}

export default Popover