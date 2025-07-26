export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`w-full py-4 lg:py-8 ${className}`}>{children}</section>
  );
}
