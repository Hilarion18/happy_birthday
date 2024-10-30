export type UserTypeData = {
    id: number,
    first_name: string;
    last_name: string;
    birthday: string;
    country: string;
    timezone: string;
    email: string;
    message: string;
  }

export type UserListTypeData = [
  UserTypeData
]