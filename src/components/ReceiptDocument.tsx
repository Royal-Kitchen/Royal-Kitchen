import React from 'react';
import { RECEIPT_DATA } from '../data/receiptData';
import { FoodSafetyBadge } from './FoodSafetyBadge';

export const ReceiptDocument: React.FC = () => {
  return (
    <div
      id="receipt-document-content"
      className="bg-white text-black border-[1.5px] border-black p-6 sm:p-10 shadow-2xl relative select-text w-full max-w-[794px] min-h-[1123px] box-border"
      style={{
        fontFamily: "'Noto Sans', Arial, sans-serif",
      }}
    >
      {/* Food Safety Badge on right top side corner */}
      <div className="absolute -top-3.5 -right-3.5 sm:-top-5 sm:-right-5 z-20 pointer-events-auto">
        <FoodSafetyBadge />
      </div>

      {/* Header Section */}
      <div className="flex items-center justify-between pb-2">
        {/* FSSAI Logo */}
        <div className="w-[100px] flex-shrink-0 flex items-center justify-start">
          <img
            src="/assets/fssai_logo.png"
            alt="FSSAI Logo"
            className="w-[92px] h-auto object-contain block"
            loading="eager"
          />
        </div>

        {/* Central Titles */}
        <div className="flex-1 text-center px-1 sm:px-3">
          <h1 className="text-[16.5px] font-bold text-black tracking-tight leading-snug">
            {RECEIPT_DATA.authority.state}
          </h1>
          <h2 className="text-[14.5px] font-bold text-black tracking-tight leading-snug">
            {RECEIPT_DATA.authority.commissionerate}
          </h2>
          <h3 className="text-[13.5px] font-semibold text-black tracking-tight leading-snug">
            {RECEIPT_DATA.authority.body}
          </h3>
          <h4 className="text-[13.5px] font-bold text-black tracking-tight leading-snug">
            {RECEIPT_DATA.authority.system}
          </h4>
          <div className="mt-0.5">
            <a
              href={RECEIPT_DATA.authority.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-bold text-[#000080] underline hover:text-blue-800"
            >
              {RECEIPT_DATA.authority.url}
            </a>
          </div>
        </div>

        {/* Kerala Government Emblem */}
        <div className="w-[100px] flex-shrink-0 flex items-center justify-end">
          <img
            src="/assets/kerala_emblem.png"
            alt="Government of Kerala Emblem"
            className="w-[86px] h-auto object-contain block"
            loading="eager"
          />
        </div>
      </div>

      {/* Teal Banner Bar */}
      <div className="bg-[#5f9ea0] text-white text-center font-bold text-[14.5px] py-1 my-5 tracking-wide">
        Receipt
      </div>

      {/* Main Details Section */}
      <div className="text-[13px] leading-relaxed relative">
        <div className="grid grid-cols-12 gap-y-3.5">
          {/* Reference No & Date */}
          <div className="col-span-7 flex items-baseline">
            <span className="w-[185px] font-bold text-black flex-shrink-0">
              Reference No:
            </span>
            <span className="font-semibold text-black">
              {RECEIPT_DATA.referenceNo}
            </span>
          </div>

          <div className="col-span-5 flex items-baseline pl-2">
            <span className="w-[75px] font-bold text-black flex-shrink-0">
              Date:
            </span>
            <span className="text-black">
              {RECEIPT_DATA.date}
            </span>
          </div>

          {/* Name of Company/ Organization & Category of License */}
          <div className="col-span-7 flex items-start">
            <span className="w-[185px] font-bold text-black flex-shrink-0 leading-tight">
              Name of Company/<br />
              Organization:
            </span>
            <span className="text-black pt-0.5">
              {RECEIPT_DATA.companyName}
            </span>
          </div>

          <div className="col-span-5 flex items-start pl-2">
            <span className="w-[145px] font-bold text-black flex-shrink-0">
              Category of License:
            </span>
            <div className="text-black">
              <div>{RECEIPT_DATA.categoryOfLicense[0]}</div>
              <div>{RECEIPT_DATA.categoryOfLicense[1]}</div>
            </div>
          </div>

          {/* Premises Address & QR Code */}
          <div className="col-span-7 flex items-start">
            <span className="w-[185px] font-bold text-black flex-shrink-0">
              Premises Address:
            </span>
            <div className="text-black leading-snug flex-1">
              {RECEIPT_DATA.premisesAddress.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>
          </div>

          {/* QR Code Container (Right side) */}
          <div className="col-span-5 pl-2 relative">
            <div className="flex flex-col items-start pt-1">
              <img
                src="/assets/receipt_qr.png"
                alt="Receipt QR Code"
                className="w-[130px] h-[130px] object-contain block"
              />
            </div>
          </div>

          {/* Kind of Business */}
          <div className="col-span-7 flex items-start -mt-2 sm:-mt-4">
            <span className="w-[185px] font-bold text-black flex-shrink-0">
              Kind of Business:
            </span>
            <span className="text-black">
              {RECEIPT_DATA.kindOfBusiness}
            </span>
          </div>
          <div className="col-span-5"></div>

          {/* Mode of Payment */}
          <div className="col-span-7 flex items-baseline">
            <span className="w-[185px] font-bold text-black flex-shrink-0">
              Mode of Payment:
            </span>
            <span className="text-black">
              {RECEIPT_DATA.modeOfPayment}
            </span>
          </div>
          <div className="col-span-5"></div>

          {/* Registration Fee */}
          <div className="col-span-12 flex items-baseline">
            <span className="w-[185px] font-bold text-black flex-shrink-0">
              Registration Fee
            </span>
            <span className="text-black">
              {RECEIPT_DATA.registrationFee}
            </span>
          </div>

          {/* Total Fee Paid */}
          <div className="col-span-12 flex items-baseline">
            <span className="w-[185px] font-bold text-black flex-shrink-0">
              Total Fee Paid:
            </span>
            <span className="font-semibold text-black">
              {RECEIPT_DATA.totalFeePaid}
            </span>
          </div>

          {/* Transaction No */}
          <div className="col-span-12 flex items-baseline">
            <span className="w-[185px] font-bold text-black flex-shrink-0">
              Transaction No.:
            </span>
            <span className="text-black">
              {RECEIPT_DATA.transactionNo}
            </span>
          </div>

          {/* RazorPay ID */}
          <div className="col-span-12 flex items-baseline">
            <span className="w-[185px] font-bold text-black flex-shrink-0">
              RazorPay ID:
            </span>
            <span className="text-black font-mono text-[12.5px]">
              {RECEIPT_DATA.razorPayId}
            </span>
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="mt-8 pt-2 text-[12.5px] leading-snug text-black">
        <div className="font-bold text-black mb-2">Note:</div>
        <ol className="space-y-3 pl-1">
          <li className="flex items-start text-justify">
            <span className="w-5 flex-shrink-0">1.</span>
            <div className="flex-1">
              FSSAI doesn't contact applicants over telephone for License/ Registration. Queries relating to License/Registration are only raised online. License related complaints may be reported at helpdesk -{' '}
              <span className="font-semibold">1800110100</span> and{' '}
              <a
                href="mailto:foscos-notification@fssai.gov.in"
                className="font-semibold text-[#000080] hover:underline"
              >
                foscos-notification@fssai.gov.in
              </a>
              .
            </div>
          </li>
          <li className="flex items-start text-justify">
            <span className="w-5 flex-shrink-0">2.</span>
            <div className="flex-1">
              In case you receive queries by authorities on your application, You are required to respond within 30 days to avoid rejection of your application by login into FSSAI's Food Safety Compliance System (
              <a
                href="https://foscos.fssai.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000080] underline hover:text-blue-800"
              >
                https://foscos.fssai.gov.in
              </a>
              ) with your user id and password or call us at{' '}
              <span className="font-semibold">1800112100</span> for any clarification.
            </div>
          </li>
          <li className="flex items-start text-justify">
            <span className="w-5 flex-shrink-0">3.</span>
            <div className="flex-1">
              You must keep a copy of Form A (application) for any kind of communication with the authorities till obtaining Registration Certificate.
            </div>
          </li>
          <li className="flex items-start text-justify">
            <span className="w-5 flex-shrink-0">4.</span>
            <div className="flex-1">
              GST applicability on this transaction is on reverse charge basis
            </div>
          </li>
        </ol>
      </div>

      {/* Footer Page info */}
      <div className="mt-12 text-center text-[13px] text-black">
        {RECEIPT_DATA.pageInfo}
      </div>
    </div>
  );
};
