import './globals.css';
import Navbar from '@/components/Navbar/page';


export const metadata = {
  title: "Saint Valentin pour Renée",
  description: "Un site spécial pour ma copine Renée à l'occasion de la Saint Valentin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
