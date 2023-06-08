interface IGenerateLeadModal {
    name: string;
    email: string;
    message: string;
  }

  interface ILeadData {
    id: number;
    name: string;
    email: string;
    message: string;
}

  interface IApiResponse {
    count: number;
    next: string;
    per_page: number;
    previous: string;
    results: ILeadData[]
}



export type { IGenerateLeadModal, IApiResponse, ILeadData }