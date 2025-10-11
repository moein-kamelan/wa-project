import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { axiosInstance } from '../utils/axios'

function useUsers(page?: number , limit: number = 6) {
  return useQuery({
    queryKey: ['Users' , page],
    queryFn: async () => {
     const response = await axiosInstance.get("/api/admin/users", {
        params: {
          page,
          limit,
        },
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1OTczMzA5MCwiZXhwIjoxNzYyMzI1MDkwfQ.K7UOKvIDtJI3QhN_wdg-rl2BTAWOyeoYv3DXcqIHofw"
        }
    })
        return response.data
    },
  })
}

export default useUsers