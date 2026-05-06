'use client';

import styled from '@emotion/styled';

export default function Chapter7({ setPage }: { setPage: (page: number) => void }) {
  return (
    <Container>
      <Content>
        <ContentTop>
          <h2>WGSN 같은 유료 서비스 없이도, SNS · 검색 데이터 · 런웨이 이미지를 AI로 분석해</h2>
          <h3>시즌 키 트렌드 키워드와 버즈량 기반 인사이트를 직접 도출합니다.</h3>
          <ContentRightBtm>
            <BtnWrapper onClick={() => setPage(8)}>
              <span>chapter 8</span>
            </BtnWrapper>
          </ContentRightBtm>
        </ContentTop>
        <ContentBtm>
          <ImgWrapper src="/img/ch/ai-5.png" alt="trend" />
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

const ContentBtm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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

const ImgWrapper = styled.img`
  width: 900px;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;

  ${({ theme }) => theme.breakpoint.mobile} {
    width: 100%;
    height: auto;
  }
`;

const ContentRightBtm = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.ACCENT.Down_red};
  padding-bottom: 4px;
  cursor: pointer;
  margin-top: 8px;

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
