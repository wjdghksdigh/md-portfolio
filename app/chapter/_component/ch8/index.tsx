'use client';

import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
// components
import ButtonComponent from '@/app/design/button';

export default function Chapter8({ setPage }: { setPage: (page: number) => void }) {
  const router = useRouter();
  return (
    <Container>
      <Content1>
        <ImgWrapper src="/img/ch/fashion_scene.svg" alt="icon" />
        <div className="col">
          <h3>
            AI뿐만 아니라 다양한 분야에서 끊임없이 배우고 기여하는 직원이 되겠습니다. 감사합니다.
          </h3>
          <ButtonComponent.RoundWhiteButton_SS
            text="처음으로"
            onClick={() => router.push('/')}
            style={{ width: 'fit-content' }}
          />
        </div>
      </Content1>
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
  flex-direction: column;
  gap: 24px;

  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  h3 {
    ${({ theme }) => theme.applyTypography(theme.typography.Body_18_SemiBold)}
    color: ${({ theme }) => theme.color.NEUTRAL.Grey_60};
  }
`;

const ImgWrapper = styled.img`
  width: 500px;
  height: 300px;
  object-fit: contain;
`;
