import type { GadgetPermissions } from "gadget-server";

/**
 * This metadata describes the access control configuration available in your application.
 * Grants that are not defined here are set to false by default.
 *
 * View and edit your roles and permissions in the Gadget editor at https://urbanroad.gadget.app/edit/settings/permissions
 */
export const permissions: GadgetPermissions = {
  type: "gadget/permissions/v1",
  roles: {
    "shopify-app-users": {
      storageKey: "Role-Shopify-App",
      models: {
        shopifyCollect: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCollect.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyCollection: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCollection.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyCompany: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCompany.gelly",
          },
        },
        shopifyCompanyAddress: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCompanyAddress.gelly",
          },
        },
        shopifyCompanyContact: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCompanyContact.gelly",
          },
        },
        shopifyCompanyContactRole: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCompanyContactRole.gelly",
          },
        },
        shopifyCompanyContactRoleAssignment: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCompanyContactRoleAssignment.gelly",
          },
        },
        shopifyCompanyLocation: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCompanyLocation.gelly",
          },
        },
        shopifyCustomer: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCustomer.gelly",
          },
        },
        shopifyCustomerAddress: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCustomerAddress.gelly",
          },
        },
        shopifyCustomerMergeable: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyCustomerMergeable.gelly",
          },
        },
        shopifyGdprRequest: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyGdprRequest.gelly",
          },
          actions: {
            create: true,
            update: true,
          },
        },
        shopifyProduct: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyProduct.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyProductImage: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyProductImage.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyProductOption: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyProductOption.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyProductVariant: {
          read: {
            filter:
              "accessControl/filters/shopify/shopifyProductVariant.gelly",
          },
          actions: {
            create: true,
            delete: true,
            update: true,
          },
        },
        shopifyShop: {
          read: {
            filter: "accessControl/filters/shopify/shopifyShop.gelly",
          },
          actions: {
            install: true,
            reinstall: true,
            uninstall: true,
            update: true,
          },
        },
        shopifySync: {
          read: {
            filter: "accessControl/filters/shopify/shopifySync.gelly",
          },
          actions: {
            abort: true,
            complete: true,
            error: true,
            run: true,
          },
        },
      },
      actions: {
        scheduledShopifySync: true,
      },
    },
    unauthenticated: {
      storageKey: "unauthenticated",
    },
  },
};
