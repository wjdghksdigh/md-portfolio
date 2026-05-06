'use client';

import styled from '@emotion/styled';

export default function Chapter6({ setPage }: { setPage: (page: number) => void }) {
  return (
    <Container>
      <Content>
        <ContentLeft>
          <div className="col">
            <h2>01. AI Trend Analysis</h2>
            <p>SNS · 검색량 기반 트렌드 분석</p>
          </div>
          <div className="col">
            <h2>02. Promotion Planning</h2>
            <p>고객 관심사 기반 이벤트 기획</p>
          </div>
          <div className="col">
            <h2>03. Personalized Marketing</h2>
            <p>구매 패턴 기반 맞춤 제안</p>
          </div>
          <div className="col">
            <h2>04. Data-driven Insight</h2>
            <p>데이터 기반 프로모션 전략 제안</p>
          </div>
          <ContentRightBtm>
            <BtnWrapper onClick={() => setPage(3)}>
              <span>chapter3</span>
            </BtnWrapper>
          </ContentRightBtm>
        </ContentLeft>
        <ContentRight>
          <ImgWrapper src="/img/ch/ai-6.png" alt="md" />
        </ContentRight>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  max-width: 900px;
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
  /* align-items: center;
  justify-content: center; */
  gap: 20px;

  .col {
    display: flex;
    flex-direction: column;
  }

  h2 {
    ${({ theme }) => theme.applyTypography(theme.typography.Title_20_SemiBold)};
    color: ${({ theme }) => theme.color.NEUTRAL.Basic};
  }

  p {
    margin-top: 4px;
    ${({ theme }) => theme.applyTypography(theme.typography.Body_18_Regular)};
    color: ${({ theme }) => theme.color.NEUTRAL.Grey_60};
    text-align: flex-start;
  }
`;

const ContentRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

const ImgWrapper = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
  border-radius: 8px;

  ${({ theme }) => theme.breakpoint.mobile} {
    height: auto;
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
