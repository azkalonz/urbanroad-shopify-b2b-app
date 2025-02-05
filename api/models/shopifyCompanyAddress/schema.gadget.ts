import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "shopifyCompanyAddress" model, go to https://urbanroad.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-Shopify-CompanyAddress",
  fields: {},
  shopify: {
    fields: [
      "address1",
      "address2",
      "city",
      "companyBillingLocation",
      "companyName",
      "companyShippingLocation",
      "country",
      "countryCode",
      "formattedAddress",
      "formattedArea",
      "phone",
      "province",
      "recipient",
      "shop",
      "zipCode",
      "zoneCode",
    ],
  },
};
