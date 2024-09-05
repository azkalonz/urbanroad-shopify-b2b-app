import { useState } from "react";
import { AutoTable } from "@gadgetinc/react/auto/polaris";
import { Banner, BlockStack, Box, Card, Layout, Link, Page, Text } from "@shopify/polaris";
import { api } from "../api";

export default function () {
  const [contacts, setContacts] = useState([]);

  const findCompanyContact = async (id) => {
    const d = useFindBy(api.blogPost.findBySlug, "some-slug", { select: { id: true, title: true } });
    console.log("f", d);
  };

  return (
    <Page title="App">
      <Layout>
        <Layout.Section>
          <Banner tone="success">
            <Text variant="bodyMd" as="p">
              Successfully connected your Gadget app to Shopify
            </Text>
          </Banner>
        </Layout.Section>
        <Layout.Section>
          <Card>
            <img className="gadgetLogo" src="https://assets.gadget.dev/assets/icon.svg" />
            <BlockStack gap="200">
              <Text variant="headingMd" as="h1" alignment="center">
                Edit this page:{" "}
                <Link
                  url={`/edit/${window.gadgetConfig.env.GADGET_ENV}/files/web/routes/index.jsx`}
                  target="_blank"
                  removeUnderline
                >
                  web/routes/index.jsx
                </Link>
              </Text>
            </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card padding="0">
            {/* use Autocomponents to build UI quickly: https://docs.gadget.dev/guides/frontend/autocomponents  */}
            <AutoTable
              model={api.shopifyCompany}
              columns={[
                "contacts.edges.node.id",
                {
                  header: "Customer Email",
                  render: ({ record }) => {
                    return <div>Customer Email</div>; // Adjust the path as necessary
                  },
                },
              ]}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
