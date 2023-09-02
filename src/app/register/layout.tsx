import Header from "@/components/Header/Header"

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header showBackButton />
      {children}
    </>
  )
}