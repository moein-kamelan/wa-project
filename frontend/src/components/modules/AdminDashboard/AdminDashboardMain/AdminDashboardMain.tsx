import React from 'react'

function AdminDashboardMain({children} : {children : React.ReactNode}) {
  return (
    <div className="bg-neutral-tertiary grow px-10.5 pb-[54px] relative  flex flex-col  overflow-hidden">
       <img src="../../../../../public/images/admin-dashboard/ellipse.png" alt="elipse" className="fixed bottom-0 left-0  overflow-hidden" />

       {children}

       
      </div>
  )
}

export default AdminDashboardMain