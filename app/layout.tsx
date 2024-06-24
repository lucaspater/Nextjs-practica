import { monserrat } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialased`}>
        {children}
        <footer className='py-10 flex justify-center items-center'>
        layout footer 👌👌
      </footer>
      </body>
    </html>
  );
}
