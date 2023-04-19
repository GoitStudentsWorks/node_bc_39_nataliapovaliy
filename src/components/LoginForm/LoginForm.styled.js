import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--auth-background-color);
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 484px;
  margin-bottom: 24px;
  background-color: #fff;
  border-radius: 8px;
  @media (min-width: 576px) {
  }
`;

export const LoginFormTitle = styled.h1`
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: var(--accent-color);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  margin-bottom: 40px;
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: var(--secondary-text-color);
`;

export const LoginInput = styled.input`
  background-color: #ffffff;
  outline: none;
  border: 1px solid rgba(220, 227, 229, 0.6);
  border-radius: 8px;
  margin-bottom: 18px;
  padding: 0.875rem;
  width: 100%;
  &::placeholder {
    font-family: var(--main-font);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #dce3e5;
  }
`;

export const LoginParaghraph = styled.p`
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 8px;
  color: var(--title-text-main-color);
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.8125rem;
  padding: 14px;
  margin-top: 30px;
  background: var(--accent-background-color);
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  border: none;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const LinkToRegister = styled.h2`
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  border-bottom: 1px solid var(--accent-color);
  color: var(--accent-color);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const ErrorMessage = styled.span`
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: red;
`;
