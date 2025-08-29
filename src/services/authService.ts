import axios from "axios";
import type { LoginPayload, LoginResponse } from "@/types/Auth";

const API_URL = "https://fakestoreapi.com";

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const { data } = await axios.post<LoginResponse>(`${API_URL}/auth/login`, payload);
  return data;
}