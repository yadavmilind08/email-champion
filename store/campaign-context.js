import { createContext, useState } from "react";

const campaignList = [
  {
    id: 1,
    name: "Energy bill May 2022",
    subject: "Pay Energy Bill for May 2022",
    status: "pending",
    template: {
      name: "EnergyBillTemplate",
    },
    template_vars: {
      corporation_name: "Green Energy Corporation",
      month: "May",
      Year: "2022",
      bill_amount: "2000",
    },
    contacts: [1, 3, 4],
    userId: 1,
  },
  {
    id: 2,
    name: "Certificate distribution October 2022",
    subject: "Certificate distribution in October 2022 TownHall",
    status: "pending",
    template_vars: {
      hours: "40",
      issuer: "UIE studio india",
      course_name: "Nodejs Reskilling",
    },
    template: {
      name: "CertificateTemplate",
    },
    contacts: [1, 4],
    userId: 1,
  },
  {
    name: "Musical event October 2022",
    subject: "Musical event in October 2022 TownHall",
    status: "pending",
    template_vars: {
      venue: "Pune",
      event_time: "11:30",
      event_date: "12/12/2022",
      band_name: "Rockstar",
    },
    template: {
      name: "MusicalEventTemplate",
    },
    contacts: [1, 4],
    userId: 1,
    id: 3,
  },
];

export const CampaignContext = createContext({
  campaigns: [],
  saveCampaigns: () => {},
  addCampaign: () => {},
  editCampaign: () => {},
  deleteCampaign: () => {},
});

function CampaignContextProvider({ children }) {
  const [campaigns, setCampaigns] = useState([]);

  function saveCampaigns(list) {
    setCampaigns(list);
  }

  function addCampaign(newCampaign) {
    setCampaigns([...campaigns, { ...newCampaign, id: campaigns.length + 1 }]);
  }

  function editCampaign(newCampaign) {
    const newCampaignList = [...campaigns];
    const index = newCampaignList.findIndex((x) => x.id === newCampaign.id);
    newCampaignList[index] = newCampaign;
    setCampaigns([...newCampaignList]);
  }

  function deleteCampaign(newCampaign) {
    const newCampaignList = [...campaigns];
    const index = newCampaignList.findIndex((x) => x.id === newCampaign.id);
    newCampaignList.splice(index, 1);
    setCampaigns([...newCampaignList]);
  }

  const value = {
    campaigns: campaigns,
    saveCampaigns: saveCampaigns,
    addCampaign: addCampaign,
    editCampaign: editCampaign,
    deleteCampaign: deleteCampaign,
  };

  return (
    <CampaignContext.Provider value={value}>
      {children}
    </CampaignContext.Provider>
  );
}

export default CampaignContextProvider;
