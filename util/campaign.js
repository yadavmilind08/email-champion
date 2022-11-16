import axios from "axios";

export async function getAllCampaigns() {
  const response = await axios.get("http://localhost:3000/campaigns");
  return response;
}
