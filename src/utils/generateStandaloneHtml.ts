import { RECEIPT_DATA } from '../data/receiptData';
import { FSSAI_LOGO_BASE64, KERALA_EMBLEM_BASE64, RECEIPT_QR_BASE64 } from '../assetsData';

export function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FSSAI FoSCoS Receipt - ${RECEIPT_DATA.companyName} (${RECEIPT_DATA.referenceNo})</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #f3f4f6;
      color: #000000;
      display: flex;
      justify-content: center;
      padding: 24px;
      -webkit-font-smoothing: antialiased;
    }
    .document-page {
      background: #ffffff;
      width: 100%;
      max-width: 820px;
      min-height: 1160px;
      border: 1.5px solid #000000;
      padding: 36px 38px 28px 38px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      position: relative;
    }
    .header-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 8px;
    }
    .header-logo-left {
      width: 110px;
      vertical-align: middle;
      text-align: left;
    }
    .header-logo-left img {
      max-width: 95px;
      height: auto;
      display: block;
    }
    .header-center {
      text-align: center;
      vertical-align: middle;
      padding: 0 10px;
    }
    .header-title-1 {
      font-size: 16px;
      font-weight: 700;
      line-height: 1.35;
      color: #000000;
    }
    .header-title-2 {
      font-size: 14.5px;
      font-weight: 700;
      line-height: 1.35;
      color: #000000;
    }
    .header-title-3 {
      font-size: 13.5px;
      font-weight: 600;
      line-height: 1.35;
      color: #000000;
    }
    .header-title-4 {
      font-size: 13.5px;
      font-weight: 700;
      line-height: 1.35;
      color: #000000;
    }
    .header-link {
      font-size: 14px;
      font-weight: 700;
      color: #000080;
      text-decoration: underline;
      display: inline-block;
      margin-top: 2px;
    }
    .header-logo-right {
      width: 110px;
      vertical-align: middle;
      text-align: right;
    }
    .header-logo-right img {
      max-width: 85px;
      height: auto;
      display: inline-block;
    }
    .teal-banner {
      background-color: #5f9ea0;
      color: #ffffff;
      text-align: center;
      font-size: 14px;
      font-weight: 700;
      padding: 5px 0;
      margin: 18px 0 20px 0;
      letter-spacing: 0.3px;
    }
    .details-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
      line-height: 1.5;
    }
    .details-table td {
      vertical-align: top;
      padding: 6px 0;
    }
    .col-left-label {
      width: 195px;
      font-weight: 700;
      color: #000000;
    }
    .col-left-value {
      width: 250px;
      color: #000000;
      padding-right: 15px;
    }
    .col-right-label {
      width: 155px;
      font-weight: 700;
      color: #000000;
    }
    .col-right-value {
      color: #000000;
    }
    .qr-container {
      text-align: left;
      padding-top: 4px;
    }
    .qr-container img {
      width: 125px;
      height: 125px;
      display: block;
    }
    .notes-section {
      margin-top: 22px;
      font-size: 12.5px;
      line-height: 1.45;
      color: #000000;
    }
    .notes-title {
      font-weight: 700;
      margin-bottom: 8px;
    }
    .note-item {
      display: flex;
      margin-bottom: 12px;
      text-align: justify;
    }
    .note-num {
      width: 20px;
      flex-shrink: 0;
    }
    .note-text {
      flex: 1;
    }
    .note-link {
      color: #000080;
      text-decoration: underline;
    }
    .page-footer {
      text-align: center;
      font-size: 13px;
      margin-top: 36px;
      padding-bottom: 10px;
      color: #000000;
    }
    @media print {
      body {
        background: transparent;
        padding: 0;
      }
      .document-page {
        box-shadow: none;
        border: 1.5px solid #000000;
        max-width: 100%;
        margin: 0;
        padding: 24px 28px;
      }
    }
  </style>
</head>
<body>
  <div class="document-page">
    <table class="header-table">
      <tr>
        <td class="header-logo-left">
          <img src="${FSSAI_LOGO_BASE64}" alt="FSSAI Logo" />
        </td>
        <td class="header-center">
          <div class="header-title-1">${RECEIPT_DATA.authority.state}</div>
          <div class="header-title-2">${RECEIPT_DATA.authority.commissionerate}</div>
          <div class="header-title-3">${RECEIPT_DATA.authority.body}</div>
          <div class="header-title-4">${RECEIPT_DATA.authority.system}</div>
          <div><a href="${RECEIPT_DATA.authority.url}" target="_blank" rel="noopener noreferrer" class="header-link">${RECEIPT_DATA.authority.url}</a></div>
        </td>
        <td class="header-logo-right">
          <img src="${KERALA_EMBLEM_BASE64}" alt="Government of Kerala Emblem" />
        </td>
      </tr>
    </table>

    <div class="teal-banner">Receipt</div>

    <table class="details-table">
      <tr>
        <td class="col-left-label">Reference No:</td>
        <td class="col-left-value"><strong>${RECEIPT_DATA.referenceNo}</strong></td>
        <td class="col-right-label">Date:</td>
        <td class="col-right-value">${RECEIPT_DATA.date}</td>
      </tr>
      <tr>
        <td class="col-left-label">Name of Company/<br>Organization:</td>
        <td class="col-left-value">${RECEIPT_DATA.companyName}</td>
        <td class="col-right-label">Category of License:</td>
        <td class="col-right-value">
          ${RECEIPT_DATA.categoryOfLicense[0]}<br>
          ${RECEIPT_DATA.categoryOfLicense[1]}
        </td>
      </tr>
      <tr>
        <td class="col-left-label">Premises Address:</td>
        <td class="col-left-value">
          ${RECEIPT_DATA.premisesAddress[0]}<br>
          ${RECEIPT_DATA.premisesAddress[1]}<br>
          ${RECEIPT_DATA.premisesAddress[2]}
        </td>
        <td colspan="2" rowspan="3">
          <div class="qr-container">
            <img src="${RECEIPT_QR_BASE64}" alt="Receipt QR Code" />
          </div>
        </td>
      </tr>
      <tr>
        <td class="col-left-label">Kind of Business:</td>
        <td class="col-left-value">${RECEIPT_DATA.kindOfBusiness}</td>
      </tr>
      <tr>
        <td class="col-left-label">Mode of Payment:</td>
        <td class="col-left-value">${RECEIPT_DATA.modeOfPayment}</td>
      </tr>
      <tr>
        <td class="col-left-label">Registration Fee</td>
        <td class="col-left-value" colspan="3">${RECEIPT_DATA.registrationFee}</td>
      </tr>
      <tr>
        <td class="col-left-label">Total Fee Paid:</td>
        <td class="col-left-value" colspan="3">${RECEIPT_DATA.totalFeePaid}</td>
      </tr>
      <tr>
        <td class="col-left-label">Transaction No.:</td>
        <td class="col-left-value" colspan="3">${RECEIPT_DATA.transactionNo}</td>
      </tr>
      <tr>
        <td class="col-left-label">RazorPay ID:</td>
        <td class="col-left-value" colspan="3">${RECEIPT_DATA.razorPayId}</td>
      </tr>
    </table>

    <div class="notes-section">
      <div class="notes-title">Note:</div>
      <div class="note-item">
        <div class="note-num">1.</div>
        <div class="note-text">
          FSSAI doesn't contact applicants over telephone for License/ Registration. Queries relating to License/Registration are only raised online. License related complaints may be reported at helpdesk - <strong>1800110100</strong> and <strong>foscos-notification@fssai.gov.in</strong>.
        </div>
      </div>
      <div class="note-item">
        <div class="note-num">2.</div>
        <div class="note-text">
          In case you receive queries by authorities on your application, You are required to respond within 30 days to avoid rejection of your application by login into FSSAI's Food Safety Compliance System (<a href="https://foscos.fssai.gov.in" class="note-link" target="_blank">https://foscos.fssai.gov.in</a>) with your user id and password or call us at <strong>1800112100</strong> for any clarification.
        </div>
      </div>
      <div class="note-item">
        <div class="note-num">3.</div>
        <div class="note-text">
          You must keep a copy of Form A (application) for any kind of communication with the authorities till obtaining Registration Certificate.
        </div>
      </div>
      <div class="note-item">
        <div class="note-num">4.</div>
        <div class="note-text">
          GST applicability on this transaction is on reverse charge basis
        </div>
      </div>
    </div>

    <div class="page-footer">
      ${RECEIPT_DATA.pageInfo}
    </div>
  </div>
</body>
</html>`;
}
