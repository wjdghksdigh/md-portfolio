'use client';

import styled from '@emotion/styled';
import { useState } from 'react';
// components
import ChapterHeader from './_component/header';
import Chapter1 from './_component/ch1';
import Chapter2 from './_component/ch2';
import Chapter3 from './_component/ch3';
import Chapter4 from './_component/ch4';
import Chapter5 from './_component/ch5';
import Chapter6 from './_component/ch6';
import Chapter7 from './_component/ch7';
import Chapter8 from './_component/ch8';

const PAGE_TITLES: Record<number, string> = {
  1: '개발에서 기획/MD로, 그 이유',
  2: 'AI-DRIVEN CURATION',
  3: 'HOW I WORK WITH AI',
  4: '01. AI로 이미지, 포스터 제작',
  5: '02. 발주/재고 자동화',
  6: '03. AI활용 이벤트, 프로모션 기획',
  7: '04. 트렌드 리포트',
  8: 'THANK YOU!',
};
export default function ChapterPage() {
  const [page, setPage] = useState(1);
  return (
    <Container>
      <Content>
        <ChapterHeader title={PAGE_TITLES[page] ?? ''} page={page} setPage={setPage} />
        <Inner>
          {page === 1 && <Chapter1 setPage={setPage} />}
          {page === 2 && <Chapter2 setPage={setPage} />}
          {page === 3 && <Chapter3 setPage={setPage} />}
          {page === 4 && <Chapter4 setPage={setPage} />}
          {page === 5 && <Chapter5 setPage={setPage} />}
          {page === 6 && <Chapter6 setPage={setPage} />}
          {page === 7 && <Chapter7 setPage={setPage} />}
          {page === 8 && <Chapter8 setPage={setPage} />}
        </Inner>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.breakpoint.tablet} {
    padding: 0 20px;
  }

  ${({ theme }) => theme.breakpoint.mobile} {
    margin-top: 20px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  ${({ theme }) => theme.breakpoint.mobile} {
    padding: 20px 0;
  }
`;
