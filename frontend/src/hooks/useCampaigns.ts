import { useQuery } from "@tanstack/react-query";
import React from "react";
import { axiosInstance } from "../utils/axios";
import qs from "qs";
function useCampaigns(page: any = 1, limit: any = 6 , mainStatus?: string, title?: string, startDate?: string) {

  
  return useQuery({
    queryKey: ["campaigns", page],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/api/campaigns`,
        {
            params: {
            page,
            limit,
            status: mainStatus,
            title,
            startDate,
          },
          paramsSerializer: function (params) {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
          
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1OTczMzA5MCwiZXhwIjoxNzYyMzI1MDkwfQ.K7UOKvIDtJI3QhN_wdg-rl2BTAWOyeoYv3DXcqIHofw",
          },
        }
      );

      return response.data;
    },
  });
}

export default useCampaigns;
