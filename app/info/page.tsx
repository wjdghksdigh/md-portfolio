'use client';

import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
// components
import ViewButton from '../design/button/view';

export default function InfoPage() {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <Info1>
          <MyImage src="/img/info/portfolio_my.jpeg" alt="My Image" />
          <MySelf>
            <p>
              안녕하세요.
              <br />
              AI를 활용해 데이터를 분석하고,
              <br /> 사람의 감각으로 시장을 읽는 김정환입니다.{' '}
            </p>
          </MySelf>
          <SelfWrapper>
            <Line />
            <Text>ABOUT</Text>
          </SelfWrapper>
          <DescWrapper>
            <div className="column">
              <DescRowWrapper>
                <h3>김정환</h3>
                <p>Kim Jeong Hwan</p>
              </DescRowWrapper>
              <DescRowWrapper>
                <p>1996.12.02</p>
              </DescRowWrapper>
              <DescRowWrapper>
                <p>경기도 광주시 거주</p>
              </DescRowWrapper>
            </div>
            <div className="column">
              <DescRowWrapper>
                <h3>H.P</h3>
                <p>010.2641.9113</p>
              </DescRowWrapper>
              <DescRowWrapper>
                <h3>Mall</h3>
                <p>wjdghksdigh12@gmail.com</p>
              </DescRowWrapper>
              <DescRowWrapper>
                <h3>Insta</h3>
                <p>je0nghwan.k</p>
              </DescRowWrapper>
            </div>
          </DescWrapper>
        </Info1>
        <Info2>
          <Info2Inner>
            <SelfWrapper>
              <Line />
              <Text>EDUCATION</Text>
            </SelfWrapper>
            <DescWrapper>
              <div className="column">
                <DescRowWrapper>
                  <h3>2024.02</h3>
                  <p>동양미래대학교(컴퓨터소프트웨어 공학과) 졸업</p>
                </DescRowWrapper>
                <DescRowWrapper>
                  <h3>2023.11</h3>
                  <p>코드스테이츠 이수</p>
                </DescRowWrapper>
                <DescRowWrapper>
                  <h3>2015.02</h3>
                  <p>신도림 고등학교 졸업</p>
                </DescRowWrapper>
              </div>
            </DescWrapper>
          </Info2Inner>
          <Info2Inner>
            <SelfWrapper>
              <Line />
              <Text>EXPIRENCE</Text>
            </SelfWrapper>
            <DescWrapper>
              <div className="column">
                <DescRowWrapper>
                  <h3>2026.04</h3>
                  <p>퍼플아카데미 시스템개발부(2년)</p>
                </DescRowWrapper>
                <DescRowWrapper>
                  <h3>2019.12</h3>
                  <p>자라리테일코리아(1년 9개월)</p>
                </DescRowWrapper>
              </div>
            </DescWrapper>
          </Info2Inner>
          <Info2Inner>
            <SelfWrapper>
              <Line />
              <Text>TASK SKILL</Text>
            </SelfWrapper>
            <DescWrapper>
              <div className="column">
                <DescRowWrapper>
                  <p>FIGMA, MS OFFICE,SLACK,JIRA, AI TOOL </p>
                </DescRowWrapper>
              </div>
            </DescWrapper>
          </Info2Inner>
          <Info2Inner>
            <ViewButton
              label="View More"
              borderColor="black"
              color="black"
              onClick={() => router.push('/info')}
            />
          </Info2Inner>
        </Info2>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  gap: 24px;

  ${({ theme }) => theme.breakpoint.tablet} {
    padding: 0 20px;
    flex-direction: column;
  }
`;

const Info1 = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MyImage = styled.img`
  width: 250px;
  height: 350px;
  object-fit: contain;
`;

const MySelf = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 210px;
  position: absolute;
  left: 100px;
  bottom: 100px;
  border-radius: 999px;

  p {
    ${({ theme }) => theme.applyTypography(theme.typography.Body_16_Medium)}
    color: ${({ theme }) => theme.color.NEUTRAL.Grey_60};
  }
`;

const Info2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
`;

const Info2Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const SelfWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  /* border: 1px solid #E63950; */
`;

const Line = styled.div`
  width: 2px;
  align-items: center;
  height: 100%;
  min-height: 30px;
  background: #c52a0c;
  flex-shrink: 0;
  margin-top: 4px;
`;

const Text = styled.p`
  margin: 0;
  ${({ theme }) => theme.applyTypography(theme.typography.Body_16_Medium)}
  color: ${({ theme }) => theme.color.NEUTRAL.Grey_90};
  line-height: 1.8;
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 20px;

  .column {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
  }
`;

const DescRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 8px;

  h3 {
    ${({ theme }) => theme.applyTypography(theme.typography.Body_16_Medium)}
    color: ${({ theme }) => theme.color.NEUTRAL.Basic};
  }

  p {
    ${({ theme }) => theme.applyTypography(theme.typography.Body_16_Regular)}
    color: ${({ theme }) => theme.color.NEUTRAL.Grey_60};
  }
`;
