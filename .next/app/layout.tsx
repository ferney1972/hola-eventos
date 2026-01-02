export const metadata = {
  title: 'Hola Eventos',
  description: 'Organización y producción de eventos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}