import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { ButtonProps } from '@/app/types/common/button';

// 공통 컴포넌트 - 라운드 프라이머리 버튼
const RoundPrimaryButton_L = ({ text, disabled, onClick, style }: ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledPrimaryButton_L
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      roundMode
    >
      <div
        style={{
          ...theme.typography.Body_18_SemiBold,
        }}
      >
        {text}
      </div>
    </StyledPrimaryButton_L>
  );
};

// 공통 컴포넌트 - 라운드 프라이머리 버튼 (Small)
const RoundPrimaryButton_S = ({ text, disabled, onClick, style }: ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledPrimaryButton_S
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      roundMode
    >
      <div
        style={{
          ...theme.typography.Body_16_Bold,
        }}
      >
        {text}
      </div>
    </StyledPrimaryButton_S>
  );
};

// 공통 컴포넌트 - 라운드 프라이머리 버튼 (2-Small)
const RoundPrimaryButton_SS = ({ text, disabled, onClick, style }: ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledPrimaryButton_SS
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      roundMode
    >
      <div
        style={{
          ...theme.typography.Body_16_Bold,
        }}
      >
        {text}
      </div>
    </StyledPrimaryButton_SS>
  );
};

// 공통 컴포넌트 - 서브 버튼
const RoundSubButton_L = ({
  text,
  disabled,
  onClick,
  style,
  showIcon = false,
}: ButtonProps & { showIcon?: boolean }) => {
  const theme = useTheme();

  return (
    <StyledSubButton_L disabled={disabled} onClick={onClick} style={style} theme={theme} roundMode>
      <div
        style={{
          ...theme.typography.Body_18_SemiBold,
        }}
      >
        {text}
      </div>
      {showIcon && <Icon>arrow_forward</Icon>}
    </StyledSubButton_L>
  );
};

// 공통 컴포넌트 - 서브 버튼 (Small)
const RoundSubButton_S = ({
  text,
  disabled,
  onClick,
  style,
  showIcon = false,
}: ButtonProps & { showIcon?: boolean }) => {
  const theme = useTheme();

  return (
    <StyledSubButton_S disabled={disabled} onClick={onClick} style={style} theme={theme} roundMode>
      <div
        style={{
          ...theme.typography.Body_16_Bold,
        }}
      >
        {text}
      </div>
      {showIcon && <Icon>arrow_forward</Icon>}
    </StyledSubButton_S>
  );
};

// 공통 컴포넌트 - 서브 버튼 (2-Small)
const RoundSubButton_SS = ({
  text,
  disabled,
  onClick,
  style,
  showIcon = false,
}: ButtonProps & { showIcon?: boolean }) => {
  const theme = useTheme();

  return (
    <StyledSubButton_SS disabled={disabled} onClick={onClick} style={style} theme={theme} roundMode>
      <div
        style={{
          ...theme.typography.Body_16_Bold,
        }}
      >
        {text}
      </div>
      {showIcon && <Icon>arrow_forward</Icon>}
    </StyledSubButton_SS>
  );
};

// 공통 컴포넌트 - 라운드 화이트 버튼
const RoundWhiteButton_L = ({
  text,
  disabled,
  onClick,
  style,
  showIcon = false,
}: ButtonProps & { showIcon?: boolean }) => {
  const theme = useTheme();

  return (
    <StyledWhiteButton_L
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      roundMode
    >
      <div
        style={{
          ...theme.typography.Body_18_SemiBold,
        }}
      >
        {text}
      </div>
      {showIcon && <Icon>arrow_forward</Icon>}
    </StyledWhiteButton_L>
  );
};

// 공통 컴포넌트 - 라운드 화이트 버튼 (Small)
const RoundWhiteButton_S = ({
  text,
  disabled,
  onClick,
  style,
  showIcon = false,
}: ButtonProps & { showIcon?: boolean }) => {
  const theme = useTheme();

  return (
    <StyledWhiteButton_S
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      roundMode
    >
      <div
        style={{
          ...theme.typography.Body_16_Bold,
        }}
      >
        {text}
      </div>
      {showIcon && <Icon>arrow_forward</Icon>}
    </StyledWhiteButton_S>
  );
};

// 공통 컴포넌트 - 라운드 화이트 버튼 (2-Small)
const RoundWhiteButton_SS = ({
  text,
  disabled,
  onClick,
  style,
  showIcon = false,
}: ButtonProps & { showIcon?: boolean }) => {
  const theme = useTheme();

  return (
    <StyledWhiteButton_SS
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      roundMode
    >
      <div
        style={{
          ...theme.typography.Body_16_Bold,
        }}
      >
        {text}
      </div>
      {showIcon && <Icon>arrow_forward</Icon>}
    </StyledWhiteButton_SS>
  );
};

// 공통 컴포넌트 - 프라이머리 버튼
const DefaultPrimaryButton = ({
  text,
  disabled,
  onClick,
  style,
  type,
  color,
  height = 36,
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledPrimaryButton_Default
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      type={type}
      color={color}
      height={height}
    >
      <div
        style={{
          ...theme.typography.Body_18_SemiBold,
        }}
      >
        {text}
      </div>
    </StyledPrimaryButton_Default>
  );
};

// 공통 컴포넌트 - 프라이머리 버튼
const DefaultWhiteButton = ({ text, disabled, onClick, style, type, color }: ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledWhiteButton_Default
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      type={type}
      color={color}
    >
      <div
        style={{
          ...theme.typography.Body_18_SemiBold,
        }}
      >
        {text}
      </div>
    </StyledWhiteButton_Default>
  );
};

// 공통 컴포넌트 - 스퀘어 프라이머리 버튼 (Large)
const PrimaryButton_L = ({ text, disabled, onClick, style, type, color }: ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledPrimaryButton_L
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      type={type}
      color={color}
    >
      <div
        style={{
          ...theme.typography.Body_18_SemiBold,
        }}
      >
        {text}
      </div>
    </StyledPrimaryButton_L>
  );
};

// 공통 컴포넌트 - 스퀘어 프라이머리 버튼 (Small)
const PrimaryButton_S = ({ text, disabled, onClick, type, style }: ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledPrimaryButton_S
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      type={type}
    >
      {text}
    </StyledPrimaryButton_S>
  );
};

// 공통 컴포넌트 - 스퀘어 프라이머리 버튼 (2- Small)
const PrimaryButton_SS = ({ text, disabled, onClick, type, style }: ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledPrimaryButton_SS
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      type={type}
    >
      {text}
    </StyledPrimaryButton_SS>
  );
};

// 공통 컴포넌트 - 입력문에 상호작용 버튼
const PrimaryButton_Form = ({ text, disabled, onClick, style, type, className }: ButtonProps) => {
  const theme = useTheme();

  return (
    <FormButton
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      type={type}
      className={className}
    >
      <div
        style={{
          ...theme.typography.Body_16_Bold,
        }}
      >
        {text}
      </div>
    </FormButton>
  );
};

// 공통 컴포넌트 - 스퀘어 화이트 버튼 (Large)
const WhiteButton_L = ({
  text,
  disabled,
  onClick,
  style,
  type,
  showIcon = false,
}: ButtonProps & { showIcon?: boolean }) => {
  const theme = useTheme();

  return (
    <StyledWhiteButton_L
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      type={type}
    >
      {text}
      {showIcon && <Icon>arrow_forward</Icon>}
    </StyledWhiteButton_L>
  );
};

// 공통 컴포넌트 - 스퀘어 화이트 버튼 (Small)
const WhiteButton_S = ({
  text,
  disabled,
  onClick,
  style,
  type,
  showIcon = false,
}: ButtonProps & { showIcon?: boolean }) => {
  const theme = useTheme();

  return (
    <StyledWhiteButton_S
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      type={type}
    >
      {text}
      {showIcon && <Icon>arrow_forward</Icon>}
    </StyledWhiteButton_S>
  );
};

// 공통 컴포넌트 - 스퀘어 화이트 버튼 (2-Small)
const WhiteButton_SS = ({
  text,
  disabled,
  onClick,
  style,
  type,
  showIcon = false,
}: ButtonProps & { showIcon?: boolean }) => {
  const theme = useTheme();

  return (
    <StyledWhiteButton_SS
      disabled={disabled}
      onClick={onClick}
      style={style}
      theme={theme}
      type={type}
    >
      {text}
      {showIcon && <Icon>arrow_forward</Icon>}
    </StyledWhiteButton_SS>
  );
};

// 공통 컴포넌트 - 스퀘어 서브 버튼 (Large)
const SubButton_L = ({
  text,
  disabled,
  onClick,
  style,
  showIcon = false,
}: ButtonProps & { showIcon?: boolean }) => {
  const theme = useTheme();

  return (
    <StyledSubButton_L disabled={disabled} onClick={onClick} style={style} theme={theme}>
      <div
        style={{
          ...theme.typography.Body_16_Bold,
        }}
      >
        {text}
      </div>
      {showIcon && <Icon>arrow_forward</Icon>}
    </StyledSubButton_L>
  );
};

// 공통 컴포넌트 - 스퀘어 서브 버튼 (Small)
const SubButton_S = ({
  text,
  disabled,
  onClick,
  style,
  showIcon = false,
}: ButtonProps & { showIcon?: boolean }) => {
  const theme = useTheme();

  return (
    <StyledSubButton_S disabled={disabled} onClick={onClick} style={style} theme={theme}>
      <div
        style={{
          ...theme.typography.Body_16_Bold,
        }}
      >
        {text}
      </div>
      {showIcon && <Icon>arrow_forward</Icon>}
    </StyledSubButton_S>
  );
};

// 공통 컴포넌트 - 스퀘어 서브 버튼 (2-Small)
const SubButton_SS = ({
  text,
  disabled,
  onClick,
  style,
  showIcon = false,
}: ButtonProps & { showIcon?: boolean }) => {
  const theme = useTheme();

  return (
    <StyledSubButton_SS disabled={disabled} onClick={onClick} style={style} theme={theme}>
      <div
        style={{
          ...theme.typography.Body_16_Bold,
        }}
      >
        {text}
      </div>
      {showIcon && <Icon>arrow_forward</Icon>}
    </StyledSubButton_SS>
  );
};

// 공통 컴포넌트 - 버튼 컴포넌트
const ButtonComponent = {
  DefaultPrimaryButton,
  DefaultWhiteButton,
  RoundPrimaryButton_L,
  RoundPrimaryButton_S,
  RoundPrimaryButton_SS,
  RoundSubButton_L,
  RoundSubButton_S,
  RoundSubButton_SS,
  RoundWhiteButton_L,
  RoundWhiteButton_S,
  RoundWhiteButton_SS,
  PrimaryButton_L,
  PrimaryButton_S,
  PrimaryButton_SS,
  PrimaryButton_Form,
  WhiteButton_L,
  WhiteButton_S,
  WhiteButton_SS,
  SubButton_L,
  SubButton_S,
  SubButton_SS,
};

export default ButtonComponent;

// ==================== button component ====================

const StyledPrimaryButton_Default = styled.button<{
  roundMode?: boolean;
  disabled?: boolean;
  color?: string;
  height?: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  height: ${({ height }) => height}px;
  padding: 0px 24px;
  border-radius: ${({ roundMode }) => (roundMode ? '100px' : '8px')};
  user-select: none;
  background: ${({ theme, disabled, color }) =>
    disabled ? theme.color.NEUTRAL.Grey_40 : color ? color : theme.color.BRAND.Purple_100};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.NEUTRAL.White};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;

  &:hover {
    ${(props) =>
      !props.disabled &&
      `
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), ${props.theme.color.BRAND.Purple_100};
      color: ${props.theme.color.NEUTRAL.White};
    `}
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileValue}) {
    height: 44px;
  }
`;

const StyledWhiteButton_Default = styled.button<{ disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  height: 36px;
  padding: 0px 24px;
  border-radius: 8px;
  user-select: none;
  background: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL.Grey_40 : theme.color.NEUTRAL.White};
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL.Line};
  color: ${({ theme }) => theme.color.NEUTRAL.Basic};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition:
    background 0.1s ease,
    border 0.1s ease;

  &:hover {
    ${(props) =>
      !props.disabled &&
      ` 
      color: ${props.theme.color.BRAND.Purple_100};
    //   border: 1px solid ${props.theme.color.BRAND.Purple_100};
    `}
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const FormButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  max-width: 120px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL.Grey_10 : theme.color.NEUTRAL.White};
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL.Line};
  color: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL.Grey_60 : theme.color.NEUTRAL.Basic};
  ${({ theme }) => theme.applyTypography(theme.typography.Body_16_Bold)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileValue}) {
    max-width: none;
  }
`;

const StyledPrimaryButton_L = styled.button<{
  roundMode?: boolean;
  disabled?: boolean;
  color?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  padding: 0px 24px;
  border-radius: ${({ roundMode }) => (roundMode ? '100px' : '8px')};
  user-select: none;
  background: ${({ theme, disabled, color }) =>
    disabled ? theme.color.NEUTRAL.Grey_40 : color ? color : theme.color.BRAND.LOGO};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.NEUTRAL.White};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;

  &:hover {
    ${(props) =>
      !props.disabled &&
      `
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), ${props.theme.color.BRAND.LOGO};
      color: ${props.theme.color.NEUTRAL.White};
    `}
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledPrimaryButton_S = styled.button<{ roundMode?: boolean; disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding: 0px 22px;
  border-radius: ${({ roundMode }) => (roundMode ? '100px' : '8px')};
  user-select: none;
  background: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL.Grey_40 : theme.color.BRAND.Purple_100};
  ${({ theme }) => theme.applyTypography(theme.typography.Body_16_Bold)};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.NEUTRAL.White};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition:
    background 0.1s ease,
    border 0.1s ease;

  &:hover {
    ${(props) =>
      !props.disabled &&
      `
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), ${props.theme.color.BRAND.Purple_100};
      color: ${props.theme.color.NEUTRAL.White};
      border: 1px solid ${props.theme.color.BRAND.Purple_100};
    `}
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletValue}) {
    font-size: 14px;
    padding: 0 16px;
  }
`;

const StyledPrimaryButton_SS = styled.button<{ roundMode?: boolean; disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: 0px 16px;
  border-radius: ${({ roundMode }) => (roundMode ? '100px' : '8px')};
  user-select: none;
  background: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL.Grey_40 : theme.color.BRAND.Purple_100};
  ${({ theme }) => theme.applyTypography(theme.typography.Body_16_Bold)};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.NEUTRAL.White};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition:
    background 0.1s ease,
    border 0.1s ease;

  &:hover {
    ${(props) =>
      !props.disabled &&
      `
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), ${props.theme.color.BRAND.Purple_100};
      color: ${props.theme.color.NEUTRAL.White};
      border: 1px solid ${props.theme.color.BRAND.Purple_100};
    `}
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletValue}) {
    font-size: 14px;
  }
`;

const StyledSubButton_L = styled.button<{ roundMode?: boolean; disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 52px;
  padding: 0px 24px;
  border-radius: ${({ roundMode }) => (roundMode ? '100px' : '8px')};
  user-select: none;
  background: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL.Grey_40 : theme.color.BRAND.Secondary_100};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.NEUTRAL.White};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition:
    background 0.1s ease,
    border 0.1s ease;

  &:hover {
    ${(props) =>
      !props.disabled &&
      `
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), ${props.theme.color.BRAND.Secondary_100};   
      color: ${props.theme.color.NEUTRAL.White};
      border: 1px solid ${props.theme.color.BRAND.Secondary_100};
    `}
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledSubButton_S = styled.button<{ roundMode?: boolean; disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding: 0px 20px;
  border-radius: ${({ roundMode }) => (roundMode ? '100px' : '8px')};
  user-select: none;
  background: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL.Grey_40 : theme.color.BRAND.Secondary_100};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.NEUTRAL.White};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition:
    background 0.1s ease,
    border 0.1s ease;

  &:hover {
    ${(props) =>
      !props.disabled &&
      `
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), ${props.theme.color.BRAND.Secondary_100};   
      color: ${props.theme.color.NEUTRAL.White};
      border: 1px solid ${props.theme.color.BRAND.Secondary_100};
    `}
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledSubButton_SS = styled.button<{ roundMode?: boolean; disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: 0px 20px;
  border-radius: ${({ roundMode }) => (roundMode ? '100px' : '8px')};
  user-select: none;
  background: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL.Grey_40 : theme.color.BRAND.Secondary_100};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.NEUTRAL.White};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition:
    background 0.1s ease,
    border 0.1s ease;

  &:hover {
    ${(props) =>
      !props.disabled &&
      `
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), ${props.theme.color.BRAND.Secondary_100};   
      color: ${props.theme.color.NEUTRAL.White};
      border: 1px solid ${props.theme.color.BRAND.Secondary_100};
    `}
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledWhiteButton_L = styled.button<{ disabled?: boolean; roundMode?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 52px;
  padding: 0px 24px;
  border-radius: ${({ roundMode }) => (roundMode ? '100px' : '8px')};
  user-select: none;
  background: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL.Grey_40 : theme.color.NEUTRAL.White};
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL.Line};
  color: ${({ theme }) => theme.color.NEUTRAL.Basic};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition:
    background 0.1s ease,
    border 0.1s ease;

  &:hover {
    ${(props) =>
      !props.disabled &&
      ` 
      color: ${props.theme.color.BRAND.Purple_100};
    //   border: 1px solid ${props.theme.color.BRAND.Purple_100};
    `}
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledWhiteButton_S = styled.button<{ roundMode?: boolean; disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding: 0px 20px;
  border-radius: ${({ roundMode }) => (roundMode ? '100px' : '8px')};
  user-select: none;
  background: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL.Grey_40 : theme.color.NEUTRAL.White};
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL.Line};
  color: ${({ theme }) => theme.color.NEUTRAL.Basic};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  ${({ theme }) => theme.applyTypography(theme.typography.Body_16_Bold)};
  transition:
    background 0.1s ease,
    border 0.1s ease;

  &:hover {
    ${(props) =>
      !props.disabled &&
      `
      color: ${props.theme.color.BRAND.Purple_100};
      //   border: 1px solid ${props.theme.color.BRAND.Purple_100};
    `}
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletValue}) {
    font-size: 14px;
  }
`;

const StyledWhiteButton_SS = styled.button<{ roundMode?: boolean; disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: 0px 20px;
  border-radius: ${({ roundMode }) => (roundMode ? '100px' : '8px')};
  user-select: none;
  background: ${({ theme, disabled }) =>
    disabled ? theme.color.NEUTRAL.Grey_40 : theme.color.NEUTRAL.White};
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL.Line};
  color: ${({ theme }) => theme.color.NEUTRAL.Basic};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  ${({ theme }) => theme.applyTypography(theme.typography.Body_16_Bold)};
  transition:
    background 0.1s ease,
    border 0.1s ease;

  &:hover {
    ${(props) =>
      !props.disabled &&
      `
      color: ${props.theme.color.ACCENT.Down_red};
      border: 1px solid ${props.theme.color.ACCENT.Down_red};
    `}
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletValue}) {
    font-size: 14px;
  }
`;

const Icon = styled.span`
  font-family: 'Material Symbols Rounded';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 20;
`;
