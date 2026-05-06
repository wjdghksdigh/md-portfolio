'use client';

import styled from '@emotion/styled';
import { useState } from 'react';
import LoadingSpinner from '@/app/design/loading';

export default function Chapter4({ setPage }: { setPage: (page: number) => void }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <LoadingSpinner />}
      <Container $loaded={loaded}>
      <Content>
        <ContentLeft>
          <h3>
            포토샵, 일러스트레이터 없이도
            <br /> AI로 시즌 컨셉 이미지와 무드보드를 제작합니다.
          </h3>
          <p>
            - 시즌 컨셉 무드보드 제작
            <br /> - 신규 상품 컨셉 시각화
            <br /> - 바이어 미팅용 룩북 이미지
            <br /> -시즌 캠페인 포스터 초안
            <br /> - 컬러 팔레트 및 스타일링 레퍼런스 생성
          </p>
          <ContentRightBtm>
            <BtnWrapper onClick={() => setPage(5)}>
              <span>chapter5</span>
            </BtnWrapper>
          </ContentRightBtm>
        </ContentLeft>
        <ContentRight>
          <ChatTitle>
            <h2>실제 사용 예시</h2>
          </ChatTitle>
          <ChatWrapper>
            <ChatContent>
              포토나 일러없이 ai로 이미지나 포스터정도를 만들수있다는 이미지를 만들어줘
            </ChatContent>
          </ChatWrapper>
          <ImgWrapper src="/img/ch/ai-3.png" alt="chatgpt" onLoad={() => setLoaded(true)} />
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
  flex-direction: row;
  gap: 24px;

  ${({ theme }) => theme.breakpoint.mobile} {
    flex-direction: column;
  }
`;

const ContentLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  h1 {
    ${({ theme }) => theme.applyTypography(theme.typography.Display_48_Bold)};
    color: ${({ theme }) => theme.color.ACCENT.Down_red};
  }

  h3 {
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

const ContentRight = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;

  p {
    margin-top: 8px;
    ${({ theme }) => theme.applyTypography(theme.typography.Body_18_Regular)};
    color: ${({ theme }) => theme.color.NEUTRAL.Grey_60};
    text-align: flex-start;
  }
`;

const ChatTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h2 {
    ${({ theme }) => theme.applyTypography(theme.typography.Title_20_SemiBold)};
    color: ${({ theme }) => theme.color.NEUTRAL.Basic};
  }
`;

const ChatWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ChatContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.NEUTRAL.Grey_10};
`;

const ImgWrapper = styled.img`
  width: 400px;
  height: 300px;
  object-fit: contain;
  border-radius: 16px;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.NEUTRAL.Grey_10};

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
  margin-top: 24px;

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
