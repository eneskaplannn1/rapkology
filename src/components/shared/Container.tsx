export default function Container({
  children,
  size = "main",
  className = "",
  style,
}: {
  children: React.ReactNode;
  size?: "main" | "wide" | "narrow" | "content";
  className?: string;
  style?: React.CSSProperties;
}) {
  const sizes: { [key: string]: string } = {
    main: "w-[88.96vw] ",
  };

  return (
    <div
      className={`${sizes[size]}  mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
