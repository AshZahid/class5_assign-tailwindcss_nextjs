import "./globals.css";

import Header from "./Components/header";
import Footer from "./Components/footer"; 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
