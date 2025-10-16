import { useQuery } from "@tanstack/react-query";
import React from "react";
import { axiosInstance } from "../utils/axios";

function useUsers(page?: number, limit: number = 6) {
  return useQuery({
    queryKey: ["Users", page],
    queryFn: async () => {
      const response = await axiosInstance.get("/api/admin/users", {
        params: {
          page,
          limit,
        },
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA1NDc1MjcsImV4cCI6MTc2MzEzOTUyN30.XBahbtVYe1p_Uclm1IMdyu3nqNQRqCgvSaRc7h-jZeM",
        },
      });
      return response.data;
    },
  });
}

export default useUsers;
