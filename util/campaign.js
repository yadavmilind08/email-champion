import axios from "axios";

export async function getAllCampaigns() {
  const response = await axios.get("http://localhost:3000/campaigns");
  return response;
}

export async function addCampaign(newCampaign) {
  const response = await axios.post(
    "http://localhost:3000/campaigns",
    newCampaign
  );
  return response;
}
