'use client';

import styled from '@emotion/styled';
import { useState } from 'react';
import Image from 'next/image';
import { Jost } from '@/app/styles/font';
import { useRouter } from 'next/navigation';
// components
import ViewButton from '@/app/design/button/view';
import LoadingSpinner from '@/app/design/loading';

export default function MainPage() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = () => {
    setLeaving(true);
    setTimeout(() => router.push('/info'), 500);
  };

  return (
    <>
      {!imageLoaded && <LoadingSpinner />}
      <Container $leaving={leaving} $loaded={imageLoaded}>
      <BgImage src="/img/main/main-bg.svg" alt="" fill priority onLoad={() => setImageLoaded(true)} />
      <Content>
        <TitleWrapper>
          <MainTitle>PORTFOLIO</MainTitle>
          <SubTitle>Kim Jeong Hwan</SubTitle>
        </TitleWrapper>
        <BtnWrapper>
          <ViewButton onClick={handleClick} borderColor="black" color="black" label="INFO" />
        </BtnWrapper>
      </Content>
    </Container>
    </>
  );
}

const Container = styled.div<{ $leaving: boolean; $loaded: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  transition: opacity 0.5s ease;
  opacity: ${({ $leaving, $loaded }) => ($leaving ? 0 : $loaded ? 1 : 0)};
  background-color: #0a0606;
  ${({ theme }) => theme.breakpoint.tablet} {
    overflow-x: auto;
  }
`;

const BgImage = styled(Image)`
  object-fit: cover;
  object-position: top left;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;

  ${({ theme }) => theme.breakpoint.tablet} {
    padding: 0 20px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  gap: 8px;

  ${({ theme }) => theme.breakpoint.mobile} {
    margin-top: 120px;
  }
`;

const MainTitle = styled.h1`
  font-family: ${Jost.bold.fontFamily};
  font-weight: ${Jost.bold.fontWeight};
  font-size: 80px;
  color: ${({ theme }) => theme.color.NEUTRAL.Basic};
  letter-spacing: 0.1em;

  ${({ theme }) => theme.breakpoint.mobile} {
    font-size: 50px;
  }
`;

const SubTitle = styled.h3`
  font-family: ${Jost.bold.fontFamily};
  font-weight: ${Jost.bold.fontWeight};
  font-size: 40px;
  color: ${({ theme }) => theme.color.NEUTRAL.Basic};
  /* ${({ theme }) => theme.breakpoint.tablet} {
   font-size: 30px;
  } */

  ${({ theme }) => theme.breakpoint.mobile} {
    font-size: 30px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 40px;
`;
