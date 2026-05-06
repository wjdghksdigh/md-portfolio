// types/common/theme.ts

import '@emotion/react';
import { css } from '@emotion/react';

export interface TypographyStyle {
  fontFamily: string;
  fontSize: string;
  fontStyle: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}

interface FlexStyle {
  display: string;
  flexDirection: string;
  alignItems?: string;
  justifyContent?: string;
}

declare module '@emotion/react' {
  export interface Theme {
    fontSize: {
      base: string;
    };

    breakpoint: {
      mobile: string;
      mobileValue: string;
      tablet: string;
      tabletValue: string;
    };

    color: {
      NEUTRAL: {
        White: string;
        Basic: string;
        Line: string;
        Grey_90: string;
        Grey_80: string;
        Grey_70: string;
        Grey_60: string;
        Grey_50: string;
        Grey_40: string;
        Grey_30: string;
        Grey_20: string;
        Grey_10: string;
        Neutral_300: string;
        Neutral_800: string;
      };
      ACCENT: {
        Red_100: string;
        Blue_100: string;
      };
      KAKAO: {
        bg: string;
      };
      NAVER: {
        bg: string;
      };
      BRAND: {
        LOGO: string;
        Purple_100: string;
        Purple_70: string;
        Purple_50: string;
        Purple_30: string;
        Secondary_100: string;
        Secondary_10: string;
      };
      BG: {
        BG_Gray: string;
        BG_Cool: string;
      };
      UI: {
        P_Text: string;
        P_100: string;
        C_Text: string;
        C_100: string;
        Y_Text: string;
        Y_100: string;
        G_Text: string;
        G_100: string;
        R_100: string;
      };
    };

    typography: {
      Display_64_Bold: TypographyStyle;
      Display_64_Medium: TypographyStyle;
      Display_48_Bold: TypographyStyle;
      Heading_36_Bold: TypographyStyle;
      Heading_36_SemiBold: TypographyStyle;
      Heading_36_Medium: TypographyStyle;
      Heading_32_Bold: TypographyStyle;
      Heading_32_Medium: TypographyStyle;
      Heading_28_Bold: TypographyStyle;
      Heading_28_Medium: TypographyStyle;
      Title_24_Bold: TypographyStyle;
      Title_24_Medium: TypographyStyle;
      Title_20_Bold: TypographyStyle;
      Title_20_SemiBold: TypographyStyle;
      Title_20_Medium: TypographyStyle;
      Title_20_Regular: TypographyStyle;
      New_Body_M_Regular: TypographyStyle;
      Body_2_Bod: TypographyStyle;
      Body_18_Bold: TypographyStyle;
      Body_18_SemiBold: TypographyStyle;
      Body_18_Medium: TypographyStyle;
      Body_18_Regular: TypographyStyle;
      Body_16_Bold: TypographyStyle;
      Body_16_Medium: TypographyStyle;
      Body_16_Regular: TypographyStyle;
      Label_1_Medium: TypographyStyle;
      Label_14_SemiBold: TypographyStyle;
      Label_14_Medium: TypographyStyle;
      Label_14_Regular: TypographyStyle;
      Caption_12_SemiBold: TypographyStyle;
      Caption_12_Regular: TypographyStyle;
      Nanum_13_Bold: TypographyStyle;
    };

    applyTypography: (typographyStyle: TypographyStyle) => ReturnType<typeof css>;

    flex: {
      flexRow: FlexStyle;
      flexColumn: FlexStyle;
      flexRowCenter: FlexStyle;
      flexRowCenterCenter: FlexStyle;
      flexRowSpaceBetween: FlexStyle;
      flexColumnCenter: FlexStyle;
      flexColumnCenterCenter: FlexStyle;
      flexColumnSpaceBetween: FlexStyle;
    };

    my: {
      examList: {
        container: string;
        content: string;
        titleContainer: string;
        title: string;
        titleIcon: string;
      };
    };
  }
}
