import './globals.css'

export const metadata = {
  title: 'Next App Task',
  description: 'Next.js task by Julia Faqir',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
