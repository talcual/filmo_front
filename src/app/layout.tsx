
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import  "bootstrap/dist/css/bootstrap.min.css"
import "../assets/css/helper.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flix",
  description: "Flix next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="container-fluid px-0">

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container px-lg-5">
                  <a className="navbar-brand" href="/">Flix</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                          <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
                      </ul>
                  </div>
              </div>
          </nav>

          {children}


          
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>

        </div>
      </body>
    </html>
  );
}
