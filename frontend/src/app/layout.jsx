import "./globals.css"
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-linear-to-br from-slate-950 via-purple-900 to-slate-900 text-white">{children}</body>
    </html>
  );
}
