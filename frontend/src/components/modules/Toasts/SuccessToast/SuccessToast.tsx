function SuccessToast({message}:any) {
  return (
    <div className='bg-[#7BDB8B] text-semantic-error   font-Yekan  rounded-[6px]   pl-4 pr-1.5 h-20 flex items-center gap-2 !w-fit min-w-[365px] text-justify'>
      <svg className="shrink-0" width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M29.3891 3.5H14.5581C8.11596 3.5 4.27547 7.2975 4.27547 13.6675V28.315C4.27547 34.7025 8.11596 38.5 14.5581 38.5H29.3714C35.8135 38.5 39.654 34.7025 39.654 28.3325V13.6675C39.6717 7.2975 35.8312 3.5 29.3891 3.5Z" fill="#075E54"/>
<path d="M18.733 30.45C18.2018 30.45 17.6971 30.2391 17.3253 29.8699L9.80866 22.4075C9.03841 21.6428 9.03841 20.3771 9.80866 19.6124C10.5789 18.8477 11.8538 18.8477 12.6241 19.6124L18.733 25.6773L32.385 12.1236C33.1553 11.3589 34.4302 11.3589 35.2005 12.1236C35.9707 12.8883 35.9707 14.154 35.2005 14.9187L20.1407 29.8699C19.7688 30.2391 19.2642 30.45 18.733 30.45Z" fill="#075E54"/>
</svg>



{message}

    </div>
  )
}

export default SuccessToast