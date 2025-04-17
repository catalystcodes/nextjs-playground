import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next.js Playground",
    template: "%s | Next.js Playground",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <header
          style={{
            backgroundColor: "blue",
            fontSize: "20px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "red",
            fontSize: "15px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
