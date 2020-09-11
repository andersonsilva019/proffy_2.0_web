import styled, { css } from 'styled-components';

interface IContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  disabledCursorPointer: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  height: 7.2rem;

  > input {
    flex: 1;
    background: transparent;
    padding: 2rem;
    border: 0;
    ::placeholder {
      color: var(--color-text-complement);
    }
  }

  button {
    border: 0;
    background: 0;
    cursor: pointer;
    svg {
      flex-shrink: 0;
      margin-right: 16px;
    }
  }

  ${props =>
    props.isFocused &&
    css`
      div {
        position: absolute;
        left: 0;
        background: var(--color-primary);
        width: 2px;
        height: 48px;
        transition: background 0.2s;
      }
    `}

  ${props =>
    props.disabledCursorPointer &&
    css`
      button {
        cursor: unset;
      }
    `}
`;
