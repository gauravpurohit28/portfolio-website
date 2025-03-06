import "./globals.css";

export const metadata = {
  title: "Gaurav Purohit - Portfolio",
  description: "Personal portfolio website of Gaurav Purohit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
