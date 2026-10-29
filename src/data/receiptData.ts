export interface ReceiptData {
  referenceNo: string;
  date: string;
  companyName: string;
  categoryOfLicense: string[];
  premisesAddress: string[];
  kindOfBusiness: string;
  modeOfPayment: string;
  registrationFee: string;
  totalFeePaid: string;
  transactionNo: string;
  razorPayId: string;
  authority: {
    state: string;
    commissionerate: string;
    body: string;
    system: string;
    url: string;
  };
  notes: string[];
  pageInfo: string;
}

export const RECEIPT_DATA: ReceiptData = {
  referenceNo: "30261012127612739",
  date: "12-10-2026",
  companyName: "Royal Kitchen",
  categoryOfLicense: [
    "Registration [Kerala]",
    "[New Registration]"
  ],
  premisesAddress: [
    "ALAMBIL HOUSE VADACODE P.O",
    "KANGARAPPADY, Thrikkakara Circle,",
    "Ernakulam, , Kerala, 682021"
  ],
  kindOfBusiness: "Manufacturer - General Manufacturing",
  modeOfPayment: "Razorpay",
  registrationFee: "Rs 100 (1 Year(s))",
  totalFeePaid: "Rs 100.00",
  transactionNo: "416089675245257",
  razorPayId: "pay_Tn16xiB90Vdc3D",
  authority: {
    state: "Government of Kerala",
    commissionerate: "Commisionerate of Food Safety",
    body: "Food Safety and Standards Authority of India",
    system: "Food Safety Compliance System (FoSCoS)",
    url: "https://foscos.fssai.gov.in"
  },
  notes: [
    "FSSAI doesn't contact applicants over telephone for License/ Registration. Queries relating to License/Registration are only raised online. License related complaints may be reported at helpdesk - 1800110100 and foscos-notification@fssai.gov.in.",
    "In case you receive queries by authorities on your application, You are required to respond within 30 days to avoid rejection of your application by login into FSSAI's Food Safety Compliance System (https://foscos.fssai.gov.in) with your user id and password or call us at 1800112100 for any clarification.",
    "You must keep a copy of Form A (application) for any kind of communication with the authorities till obtaining Registration Certificate.",
    "GST applicability on this transaction is on reverse charge basis"
  ],
  pageInfo: "Page 1 of 1"
};
