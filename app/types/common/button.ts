export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  color?: string;
  className?: string;
  height?: number;
}
