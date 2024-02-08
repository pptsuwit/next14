import httpService from "@/utils/axios";

const path = "/user";

class userServices {
  public getProfile(): Promise<IResponseData<IUser>> {
    return httpService.get("/profile");
  }

  public gets(
    page: IPage = {
      currentPage: 1,
      recordPerPage: 10,
    }
  ): Promise<IResponseData<IUserResponse>> {
    return httpService.get(
      `${path}?page=${page?.currentPage}&pageSize=${page?.recordPerPage}`
    );
  }
  public getById(id: string): Promise<IResponse<IUserResponse>> {
    return httpService.get(`${path}/${id}`);
  }
  public create(data: IUserData): Promise<IResponseData<IUser>> {
    return httpService.post(`${path}`, data);
  }
  public update(data: IUserData): Promise<IResponseData<IUser>> {
    return httpService.put(`${path}`, data);
  }
  public delete(id: string): Promise<void> {
    return httpService.delete(`${path}/${id}`);
  }
}

export const service = new userServices();
