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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA2MTM3NzUsImV4cCI6MTc2MzIwNTc3NX0.CPnR2tSNUBYlQtl5ht--UU6Pq-6pvw3y8yr0SR7Js2Q",
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA2MTM3NzUsImV4cCI6MTc2MzIwNTc3NX0.CPnR2tSNUBYlQtl5ht--UU6Pq-6pvw3y8yr0SR7Js2Q",
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
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA2MTM3NzUsImV4cCI6MTc2MzIwNTc3NX0.CPnR2tSNUBYlQtl5ht--UU6Pq-6pvw3y8yr0SR7Js2Q
`,
          },
        }
      );
      return response.data;
    },
    onSuccess: (response, campaignId) => {

      queryClient.invalidateQueries({ queryKey: ["campaigns" , page] });
    },
  });
}

function usePutCampaignTitle(page : any) {
  const queryClient = useQueryClient();
  return useMutation({ 
    mutationFn: async ({ campaignId, title }: { campaignId: string; title: string }) => {
      const response = await axiosInstance.put(
        `/api/campaigns/${campaignId}/title`,
        {
          title,
        },
        {
          headers: {
             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA2MTM3NzUsImV4cCI6MTc2MzIwNTc3NX0.CPnR2tSNUBYlQtl5ht--UU6Pq-6pvw3y8yr0SR7Js2Q
`}
          }
        );
      return response.data;
    },
    onSuccess: (response, campaignId, title) => {
      queryClient.invalidateQueries({ queryKey: ["campaigns" , page] });
    },
   });
  }

export { useCampaigns, usePostCampaign, useDeleteCampaign , usePutCampaignTitle };
