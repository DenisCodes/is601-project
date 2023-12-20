import type { Metadata } from 'next'
import GoogleAnalytics from './components/googleAnalytics';
import CookieBanner from './components/cookieBanner';
import { Providers } from "./providers";
import Navybar from './components/navbar';
import Footer from './components/footer';
import './globals.css'

export const metadata: Metadata = {
  title: 'Rustic Italian Trattoria',
  description: 'Bring a flavor of Italy to your house! Visit the site immediately by clicking here! You will not be sorry!',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-FX58PLBH7Y"/>
      <body>
        <Providers>
          <Navybar />
          {children}
          <CookieBanner/>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
