import { Footer, Navbar, WhatsAppButton } from "@website-templates/shared/components";
import siteConfig from "@/config/site";
import "./globals.css";

export const metadata = {
  title: `${siteConfig.businessName} | ${siteConfig.tagline}`,
  description: "Reusable industry template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar businessName={siteConfig.businessName} primaryColor={siteConfig.primaryColor} />
        <main>{children}</main>
        <Footer
          businessName={siteConfig.businessName}
          address={siteConfig.address}
          email={siteConfig.email}
          phone={siteConfig.phone}
        />
        <WhatsAppButton phone={siteConfig.phone} />
      </body>
    </html>
  );
}
