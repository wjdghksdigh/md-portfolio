'use client';

import styled from '@emotion/styled';

export default function Chapter3({ setPage }: { setPage: (page: number) => void }) {
  return (
    <Container>
      <Content>
        <ContentItems>
          <ContentItem>
            <h1>01.</h1>
            <h3>AI로 이미지, 포스터 제작</h3>
            <p>포토샵, 일러스트 없이 간단한 이미지와 포스터를 제작할 수 있습니다.</p>
          </ContentItem>
          <ContentItem>
            <h1>02.</h1>
            <h3>발주/재고 자동화</h3>
            <p>AI를 활용한 시스템 설계</p>
          </ContentItem>
          <ContentItem>
            <h1>03.</h1>
            <h3>AI 활용 이벤트 · 프로모션 기획 제안</h3>
            <p>AI 기반 리뷰·검색 데이터 분석, 테마 중심의 포르모션 기획전 제안</p>
          </ContentItem>
          <ContentItem>
            <h1>04.</h1>
            <h3>트렌드 리포트</h3>
            <p>시즌 키 트렌드 키워드 추출 및 SNS 버즈량 기반 트렌드 분석</p>
          </ContentItem>
        </ContentItems>
        <ContentBtm>
          <BtnWrapper onClick={() => setPage(4)}>
            <span>chapter 4</span>
          </BtnWrapper>
        </ContentBtm>
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
  align-items: center;
  flex-direction: column;
  gap: 24px;
  margin-top: 70px;

  ${({ theme }) => theme.breakpoint.mobile} {
    flex-direction: column;
    margin-top: 0px;
  }
`;

const ContentItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 24px;

  ${({ theme }) => theme.breakpoint.mobile} {
    flex-direction: column;
  }
`;

const ContentItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  h1 {
    ${({ theme }) => theme.applyTypography(theme.typography.Display_48_Bold)};
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

const ContentBtm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  ${({ theme }) => theme.breakpoint.mobile} {
    margin-top: 40px;
  }
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
