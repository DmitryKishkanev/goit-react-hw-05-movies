import styled from '@emotion/styled';

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px;

  box-shadow: 0px 6px 10px -2px rgba(0, 0, 0, 0.2);
`;

const ReviewsSection = styled.ul`
  padding: 0;
  margin: 0;
`;

const ReviewsSectionItem = styled.li`
  list-style-type: none;
`;

const ReviewsSectionButton = styled.button`
  margin-left: auto;

   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.07);
`;

export {
  ReviewsContainer,
  ReviewsSection,
  ReviewsSectionItem,
  ReviewsSectionButton,
};
