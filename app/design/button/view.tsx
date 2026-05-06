'use client';

import styled from '@emotion/styled';
import { Jost } from '@/app/styles/font';

interface ViewButtonProps {
  onClick?: () => void;
  label?: string;
  borderColor?: string;
  color?: string;
}

export default function ViewButton({
  onClick,
  label = 'VIEW',
  borderColor = 'rgba(255, 255, 255, 0.6)',
  color = 'rgba(255, 255, 255, 0.85)',
}: ViewButtonProps) {
  return (
    <Button onClick={onClick} $borderColor={borderColor} $color={color}>
      <span>{label}</span>
    </Button>
  );
}

const Button = styled.button<{ $borderColor: string; $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-radius: 999px;
  padding: 18px 52px;
  cursor: pointer;
  letter-spacing: 0.3em;
  font-family: ${Jost.bold.fontFamily};
  font-weight: ${Jost.bold.fontWeight};
  font-size: 13px;
  font-weight: 400;
  color: ${({ $color }) => $color};
  background: transparent;
  transition: all 0.4s ease;

  &:hover {
    border-color: #ff1744;
    color: #ff1744;
    box-shadow: 0 0 0 1px #ff1744;
  }
`;

const Arrow = styled.span`
  display: inline-flex;
  align-items: center;
`;
