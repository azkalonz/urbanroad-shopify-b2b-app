import type { GadgetSettings } from "gadget-server";

export const settings: GadgetSettings = {
  type: "gadget/settings/v1",
  frameworkVersion: "v1.1.0",
  plugins: {
    connections: {
      shopify: {
        apiVersion: "2024-07",
        enabledModels: [
          "shopifyCollect",
          "shopifyCollection",
          "shopifyCompany",
          "shopifyCompanyAddress",
          "shopifyCompanyContact",
          "shopifyCompanyContactRole",
          "shopifyCompanyContactRoleAssignment",
          "shopifyCompanyLocation",
          "shopifyCustomer",
          "shopifyCustomerAddress",
          "shopifyCustomerMergeable",
          "shopifyProduct",
          "shopifyProductImage",
          "shopifyProductOption",
          "shopifyProductVariant",
        ],
        type: "partner",
        scopes: [
          "read_products",
          "read_customers",
          "read_customer_merge",
          "write_products",
        ],
      },
    },
  },
};
