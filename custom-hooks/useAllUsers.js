import { useQuery } from "react-query";
import { getData } from "../lib/apiMethods";
import { apiEndpoints } from "../lib/apiEndpoints";

const getUsers = async () => {
  return await getData(apiEndpoints.allUsers);
};

export default function useAllUsers() {
  return useQuery("getUsers", getUsers);
}
