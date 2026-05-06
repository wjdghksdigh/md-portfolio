'use client';

import styled from '@emotion/styled';
import { useState } from 'react';
import LoadingSpinner from '@/app/design/loading';

export default function Chapter2({ setPage }: { setPage: (page: number) => void }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <LoadingSpinner />}
      <Container $loaded={loaded}>
      <Content>
        <ContentLeft>
          <ImgWrapper src="/img/ch/ai-2.png" alt="md" onLoad={() => setLoaded(true)} />
        </ContentLeft>
        <ContentRight>
          <h2>감각은 사람이, 데이터는 AI</h2>
          <p>
            트렌드는 숫자만으로 읽히지 않습니다.
            <br /> 하지만 숫자 없이는 놓치는 것들이 있습니다.
            <br /> <br /> 저는 AI로 시장 데이터를 분석하고, 소비자 반응을 읽고,
            <br /> 다음 시즌의 흐름을 예측합니다.
            <br /> 그리고 그 위에 사람만이 가질 수 있는 감각과 맥락을 얹어
            <br /> 하나의 기획으로 완성합니다.
            <br /> <br /> 빠르게 변하는 패션 시장에서 데이터는 나침반이고, 감각은 목적지입니다.
          </p>
          <ContentRightBtm>
            <BtnWrapper onClick={() => setPage(3)}>
              <span>chapter3</span>
            </BtnWrapper>
          </ContentRightBtm>
        </ContentRight>
      </Content>
    </Container>
    </>
  );
}

const Container = styled.div<{ $loaded: boolean }>`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 24px;

  ${({ theme }) => theme.breakpoint.mobile} {
    flex-direction: column;
  }
`;

const ContentLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const ContentRight = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
  gap: 8px;

  h2 {
    ${({ theme }) => theme.applyTypography(theme.typography.Title_20_SemiBold)};
    color: ${({ theme }) => theme.color.ACCENT.Down_red};
  }

  p {
    margin-top: 8px;
    ${({ theme }) => theme.applyTypography(theme.typography.Body_18_Regular)};
    color: ${({ theme }) => theme.color.NEUTRAL.Grey_60};
    text-align: flex-start;
  }
`;

const ImgWrapper = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
  border-radius: 8px;

  ${({ theme }) => theme.breakpoint.mobile} {
    height: 300px;
  }
`;

const ContentRightBtm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.ACCENT.Down_red};
  padding-bottom: 4px;
  cursor: pointer;

  span {
    ${({ theme }) => theme.applyTypography(theme.typography.Body_18_Regular)}
    color: ${({ theme }) => theme.color.ACCENT.Down_red};

    :hover {
      color: ${({ theme }) => theme.color.NEUTRAL.Basic};
    }
  }

  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.NEUTRAL.Basic};
  }
`;
