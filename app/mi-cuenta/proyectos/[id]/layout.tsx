// This layout overrides the root layout for the project feedback page.
// It renders children directly without the site header/footer so the
// full-screen design review UI has no chrome interference.
export default function ProjectFeedbackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
