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
<<<<<<< HEAD
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA2MTM3NzUsImV4cCI6MTc2MzIwNTc3NX0.CPnR2tSNUBYlQtl5ht--UU6Pq-6pvw3y8yr0SR7Js2Q",
=======
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2MDYwMjU3MiwiZXhwIjoxNzYzMTk0NTcyfQ.cUOYmwNszystjjRaAek5Ef9024y99EbsFAxt72gyEww",
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
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
          title : (Math.floor(Math.random() * 1000000)).toString() ,
          message,
        },
        {
          headers: {
            Authorization:
<<<<<<< HEAD
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA2MTM3NzUsImV4cCI6MTc2MzIwNTc3NX0.CPnR2tSNUBYlQtl5ht--UU6Pq-6pvw3y8yr0SR7Js2Q",
=======
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2MDYwMjU3MiwiZXhwIjoxNzYzMTk0NTcyfQ.cUOYmwNszystjjRaAek5Ef9024y99EbsFAxt72gyEww",
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
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
<<<<<<< HEAD
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA2MTM3NzUsImV4cCI6MTc2MzIwNTc3NX0.CPnR2tSNUBYlQtl5ht--UU6Pq-6pvw3y8yr0SR7Js2Q
=======
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2MDYwMjU3MiwiZXhwIjoxNzYzMTk0NTcyfQ.cUOYmwNszystjjRaAek5Ef9024y99EbsFAxt72gyEww
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
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
            (campaign: any) => campaign.id !== campaignId
          ),
        };
      });
    },
  });
}

export { useCampaigns, usePostCampaign, useDeleteCampaign };
