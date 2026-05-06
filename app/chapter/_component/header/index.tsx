'use client';

import styled from '@emotion/styled';
import ArrowLeftIcon from '@/app/design/icons/ArrowLeftIcon';
import ArrowRightIcon from '@/app/design/icons/ArrowRightIcon';

export default function ChapterHeader({
  title,
  page,
  setPage,
}: {
  title: string;
  page: number;
  setPage: (page: number) => void;
}) {
  return (
    <Container>
      <ArrowLeftIcon
        onClick={() => {
          if (page === 1) return;
          setPage(page - 1);
        }}
        $disabled={page === 1}
      />
      <h3>{title}</h3>
      <ArrowRightIcon
        onClick={() => {
          if (page === 8) return;
          setPage(page + 1);
        }}
        $disabled={page === 8}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.NEUTRAL.Line};

  h3 {
    ${({ theme }) => theme.applyTypography(theme.typography.Heading_36_SemiBold)}
    color: ${({ theme }) => theme.color.ACCENT.Down_red};

    ${({ theme }) => theme.breakpoint.mobile} {
      ${({ theme }) => theme.applyTypography(theme.typography.Title_20_SemiBold)}
    }
  }
`;
