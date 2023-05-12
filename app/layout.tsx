import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata = {
  title: "Movie App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
