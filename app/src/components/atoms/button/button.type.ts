export type ButtonPropsType = {
  text: string;
  className?: string;
  onClick?: () => void;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
