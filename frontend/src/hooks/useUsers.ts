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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA2MTM3NzUsImV4cCI6MTc2MzIwNTc3NX0.CPnR2tSNUBYlQtl5ht--UU6Pq-6pvw3y8yr0SR7Js2Q",
        },
      });
      return response.data;
    },
    placeholderData: (prevData) => prevData,
  });
}

export default useUsers;
