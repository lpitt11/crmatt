export function Badge({
  children,
  tone = "blue"
}: {
  children: React.ReactNode;
  tone?: "blue" | "green" | "red" | "yellow";
}) {
  const styles = {
    blue: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    green: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    red: "bg-red-500/10 text-red-300 border-red-500/20",
    yellow: "bg-amber-500/10 text-amber-300 border-amber-500/20"
  };

  return <span className={`rounded-full border px-2.5 py-1 text-xs ${styles[tone]}`}>{children}</span>;
}
