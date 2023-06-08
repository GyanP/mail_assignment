import { axiosInstance } from "../../axiosInstance";
import { toast } from "react-toastify";
import { IApiResponse, IGenerateLeadModal } from "../../models";

const generateLeadApi = async (
  body: IGenerateLeadModal,
  successCallback?: (data: { message: string }) => void,
  errorCallback?: (error: any) => void
) => {
  try {
    let response: any = await axiosInstance.post("/mail_record/create/", body);
    const { data } = response;
    successCallback && successCallback(data)
    return data;
  } catch (error: any) {
    const { response } = error;
    const { data } = response;
    toast.error(data.message);
    errorCallback && errorCallback(data);
    return data;
  }
};

const getAllLeadsApi = async (
  page: number,
  successCallback?: (data: IApiResponse) => void,
  errorCallback?: (error: any) => void
) => {
  try {
    let response: any = await axiosInstance.get(`/mail_record/list/?page=${page}`);
    const { data } = response;
    successCallback && successCallback(data)
    return data;
  } catch (error: any) {
    const { response } = error;
    const { data } = response;
    errorCallback && errorCallback(data);
    return [];
  }
};


export { generateLeadApi, getAllLeadsApi };
