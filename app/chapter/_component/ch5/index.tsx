'use client';

import styled from '@emotion/styled';

export default function Chapter5({ setPage }: { setPage: (page: number) => void }) {
  return (
    <Container>
      <Content>
        <ContentTop>
          <h2>
            AI만으로 발주/재고 자동화를 완전히 구현하는 것은 현실적으로 불가능하나 <br />
            판매 · 재고 · 납기 데이터를 수집하고 AI로 분석하면,
          </h2>
          <h3>실질적인 자동화 시스템을 설계가 가능, 제안할 수 있습니다.</h3>
        </ContentTop>
        <ContentItems>
          <ContentItem>
            <h1>INPUT</h1>
            <h3>데이터 수집</h3>
            <div className="desc">
              <p>· 시즌별, 카테고리별 데이터 수집</p>
              <p>· 공급업체 납기 이력</p>
              <p>· 사용자 요구사항 정의</p>
            </div>
          </ContentItem>
          <ContentItem>
            <h1>PROCESS</h1>
            <h3>AI 활용, 시스템 설계</h3>
            <div className="desc">
              <p>· 수요 예측 모델링</p>
              <p>· 발주 수량 최적화</p>
              <p>· 품절 임박 알림 설계</p>
              <p>· 마진율 자동 계산</p>
            </div>
          </ContentItem>
          <ContentItem>
            <h1>OUTPUT</h1>
            <h3>관리자 페이지 제작 후 실행</h3>
            <div className="desc">
              <p>· 발주서 자동 생성</p>
              <p>· 재고 대시보드 실시간 반영</p>
              <p>· 시즌 오프 전략 제안</p>
              <p>· 현 데이터로 또 다른 AI 리포트 발행 가능</p>
            </div>
          </ContentItem>
        </ContentItems>
        <ContentRightBtm>
          <BtnWrapper onClick={() => setPage(6)}>
            <span>chapter 6</span>
          </BtnWrapper>
        </ContentRightBtm>
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
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContentTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    ${({ theme }) => theme.applyTypography(theme.typography.Body_18_Medium)};
    color: ${({ theme }) => theme.color.NEUTRAL.Grey_60};
  }

  h3 {
    ${({ theme }) => theme.applyTypography(theme.typography.Body_18_SemiBold)};
    color: ${({ theme }) => theme.color.ACCENT.Down_red};
  }
`;

const ContentItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 24px ${({ theme }) => theme.breakpoint.mobile} {
    flex-direction: column;
  }
`;

const ContentItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  .desc {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 8px;
  }

  h1 {
    ${({ theme }) => theme.applyTypography(theme.typography.Heading_36_Bold)};
    color: ${({ theme }) => theme.color.ACCENT.Down_red};
  }

  h3 {
    margin-top: 20px;
    ${({ theme }) => theme.applyTypography(theme.typography.Title_20_SemiBold)};
    color: ${({ theme }) => theme.color.NEUTRAL.Basic};
  }

  p {
    margin-top: 8px;
    ${({ theme }) => theme.applyTypography(theme.typography.Body_18_Regular)};
    color: ${({ theme }) => theme.color.NEUTRAL.Grey_60};
    text-align: center;
  }
`;

const ContentRightBtm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
