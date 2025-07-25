interface HeaderProps {
  children: React.ReactNode;
  subtitle?: string;
  gradientBg?: boolean;
}

export default function Header({ children, subtitle, gradientBg }: HeaderProps) {
  return (
    <header className={`text-[#333333] ${gradientBg ? "bg-gradient-to-b from-[#E6E6E6] to-[#ffffff]" : ""}`}>
      <div className="pt-28 max-w-7xl mx-auto sm:pt-32">
        <h1 className="text-4xl font-semibold text-center max-w-md mx-auto sm:text-5xl">
          {children}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl mx-auto text-center">{subtitle}</p>
        ) : ""}
      </div>
    </header>
  );
}