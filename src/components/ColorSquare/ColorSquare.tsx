interface ColorSquareProps {
  colorClass: string;
  label: string;
}

export const ColorSquare = ({ colorClass, label }: ColorSquareProps) => {
  return (
    <div className="space-y-2">
      <div
        className={`h-20 w-20 ${colorClass} border-terminal-text-primary rounded border-2`}
      ></div>
      <p className="text-terminal-text-muted text-xs">{label}</p>
    </div>
  );
};
