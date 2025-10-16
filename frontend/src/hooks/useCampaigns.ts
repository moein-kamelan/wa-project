import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React from "react";
import { axiosInstance } from "../utils/axios";
import qs from "qs";
function useCampaigns(
  page: any = 1,
  limit: any = 6,
  mainStatus?: string,
  title?: string,
  startDate?: string
) {
  return useQuery({
    queryKey: ["campaigns", page],
    queryFn: async () => {
      const response = await axiosInstance.get(`/api/campaigns`, {
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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2MDYwMjU3MiwiZXhwIjoxNzYzMTk0NTcyfQ.cUOYmwNszystjjRaAek5Ef9024y99EbsFAxt72gyEww",
        },
      });

      return response.data;
    },
    placeholderData: (prevData) => prevData,
  });
}

function usePostCampaign() {
  return useMutation({
    mutationFn: async (message) => {
      const response = await axiosInstance.post(
        "/api/campaigns",
        {
          message,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2MDYwMjU3MiwiZXhwIjoxNzYzMTk0NTcyfQ.cUOYmwNszystjjRaAek5Ef9024y99EbsFAxt72gyEww",
          },
        }
      );
      return response.data;
    },
  });
}

function useDeleteCampaign(page: any) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (campaignId: string) => {
      const response = await axiosInstance.delete(
        `/api/campaigns/${campaignId}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2MDYwMjU3MiwiZXhwIjoxNzYzMTk0NTcyfQ.cUOYmwNszystjjRaAek5Ef9024y99EbsFAxt72gyEww
`,
          },
        }
      );
      return response.data;
    },
    onSuccess: (response, campaignId) => {
      queryClient.setQueryData(["campaigns", page], (prev: any) => {
        console.log("prev:", prev);
        return {
          ...prev,
          campaigns: prev.campaigns.filter(
            (campaign: any) => campaign._id !== campaignId
          ),
        };
      });
    },
  });
}

export { useCampaigns, usePostCampaign, useDeleteCampaign };
