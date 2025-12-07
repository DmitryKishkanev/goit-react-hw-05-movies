import styled from '@emotion/styled';

const SearchForm = styled.form`
  display: flex;
  gap: 15px;
  width: 400px;
  padding: 20px 6px;
  margin-bottom: 50px;
  margin-left: auto;

  box-shadow: 0px 6px 4px -2px rgba(0, 0, 0, 0.1);
`;

const SearchFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 270px;
  margin-left: auto;
`;

const SearchFormSpan = styled.span`
  margin-bottom: 5px;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: black;
`;

const SearchFormInput = styled.input`
  width: 100%;
  padding: 6px;

  border-radius: 4px;
  background-color: white;

  outline: none;
  cursor: pointer;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: black;
`;

const SearchFormButton = styled.button`
  align-self: flex-end;
  height: auto;
  padding: 9px 20px;

  background-color: rgb(33, 150, 243);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  font-weight: 500;
  font-size: 18px;
  line-height: 1.19;
  letter-spacing: 0.03em;

  &:hover,
  &:focus {
    transform: scale(1.07);
  }
`;

export {
  SearchForm,
  SearchFormLabel,
  SearchFormSpan,
  SearchFormInput,
  SearchFormButton,
};
