'use client';

import styled from '@emotion/styled';
import { useState } from 'react';
// components
import ButtonComponent from '@/app/design/button';

export default function Chapter1({ setPage }: { setPage: (page: number) => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  return (
    <Container>
      <>
        {step === 1 && (
          <Content1>
            <ImgWrapper src="/img/ch/jh-icon.png" alt="icon" />
            <div className="col">
              <h3>저는 성실한 개발자였습니다.</h3>
              <ButtonComponent.RoundWhiteButton_SS
                text="확인해보기"
                onClick={() => setStep(2)}
                style={{ width: 'fit-content' }}
              />
            </div>
          </Content1>
        )}

        {step === 2 && (
          <Content2>
            <ImgWrapper2 src="/img/ch/github.png" alt="dev" />
            <p>
              저는 꾸준히 성장하는 개발자였습니다. 4년을 공부하고 2년을 개발자로 일하며, 다양한
              프로젝트에 참여하고 기술 스택을 확장해왔습니다. 하지만 어느 순간, 커리어에 대한 고민이
              시작되었습니다. 개발자로서의 성장과 함께, 진정으로 원하는 것이 무엇인지에 대한 질문이
              떠올랐습니다.
            </p>
            <ButtonComponent.RoundWhiteButton_SS
              text="NEXT"
              onClick={() => setStep(3)}
              style={{ width: 'fit-content' }}
            />
          </Content2>
        )}

        {step === 3 && (
          <Content3>
            <Content3Left>
              <p>
                개발자로서의 경험은 저에게 많은 것을 가르쳐주었지만,
                <br /> 하고 싶은 일에 대한 열정과 성취감을 가지고 싶었고,
                <br /> 늘 상품 판매에 대한 관심이 있었습니다.
                <br />
                <br /> 그 중에서도 패션분야를 가장 관심이 많았기에
                <br /> 패션MD로의 전향을 결심하게 되었습니다.
                <br />
                <br /> 개발자로서의 사용자 이해도, AI 기반 경험과 패션에 대한 열정을 바탕으로,
                <br />
                새로운 도전에 나서고자 합니다.
              </p>
              <Content3LeftBtm>
                <BtnWrapper onClick={() => setPage(2)}>
                  <span>chapter2</span>
                </BtnWrapper>
              </Content3LeftBtm>
            </Content3Left>
            <Content3Right>
              <ImgWrapper3 src="/img/ch/fashion_scene.png" alt="md" />
            </Content3Right>
          </Content3>
        )}
      </>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Content1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 24px;

  .col {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  h3 {
    ${({ theme }) => theme.applyTypography(theme.typography.Body_18_SemiBold)}
    color: ${({ theme }) => theme.color.NEUTRAL.Grey_60};
  }
`;

const Content2 = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;

  p {
    ${({ theme }) => theme.applyTypography(theme.typography.Body_18_Regular)}
    color: ${({ theme }) => theme.color.NEUTRAL.Grey_60};
  }
`;

const ImgWrapper = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL.Line};
  border-radius: 999px;
`;

const ImgWrapper2 = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  border: 1px solid ${({ theme }) => theme.color.NEUTRAL.Line};
  border-radius: 8px;
`;

const Content3 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 24px;

  ${({ theme }) => theme.breakpoint.mobile} {
    flex-direction: column-reverse;
  }

  p {
    ${({ theme }) => theme.applyTypography(theme.typography.Body_18_Regular)}
    color: ${({ theme }) => theme.color.NEUTRAL.Grey_60};
  }
`;

const Content3Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  p {
    ${({ theme }) => theme.applyTypography(theme.typography.Body_18_Regular)}
    color: ${({ theme }) => theme.color.NEUTRAL.Grey_60};
  }
`;

const Content3Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgWrapper3 = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
  border-radius: 8px;

  ${({ theme }) => theme.breakpoint.mobile} {
    height: 300px;
  }
`;

const Content3LeftBtm = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
