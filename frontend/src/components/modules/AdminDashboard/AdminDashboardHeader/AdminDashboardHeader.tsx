import React from 'react'

type AdminDashboardHeaderProps = {
    children : React.ReactNode
}

function AdminDashboardHeader({children  } : AdminDashboardHeaderProps) {
  return (
     <div className='flex items-center justify-between h-[114px] bg-gradient-to-l from-neutral-tertiary to-secondary px-7'>
                {children}
            </div>
  )
}

export default AdminDashboardHeader