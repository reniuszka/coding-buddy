import styled from "styled-components";

export const Wrapper: any = styled.li`
  display: flex;
  align-items: center;
  color: #2e151b;
  gap: 2rem;
  position: relative;
  margin: 0.5rem 0;
  /* background-color: pink; */

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #376f70;
    /* background-color: #1b3333; */
  }
`;

// type PropValue = ThemedStyledProps<
//   DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
//   any
// >;

export const Score: any = styled.div<{ value: number }>`
  width: 2rem;
  height: 2rem;
  background-color: #da7b93;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 50%;
  font-weight: bold;
  background: ${(props) => {
    if (props.value > 4) return "#369765";
    if (props.value > 3) return "#f1711c";
    if (props.value > 2) return "#842029";
    return "grey";
  }};
`;
/* background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
    return theme.colors.grey;
  }}; */

export const StyledInfo: any = styled.div`
  /* padding: 0.5rem; */
  padding: 25px 20px;
  /* background-color: green; */
  p {
    margin: 0;
    color: #2e151b;
  }

  p:first-child {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  p:last-child {
  }
`;
/* font-size: ${({ theme }) => theme.fontSize.m}; */
/* font-size: ${({ theme }) => theme.fontSize.l}; */
