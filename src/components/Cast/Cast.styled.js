import styled from '@emotion/styled';

const CastContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px;

  box-shadow: 0px 6px 10px -2px rgba(0, 0, 0, 0.2);
`;

const СastSection = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  margin: 0 0 20px;
`;

const СastSectionItem = styled.li`
  width: 150px;
  padding: 4px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  list-style-type: none;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

const СastSectionImg = styled.img`
  width: 100%;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const ActorName = styled.p`
  margin-top: 0;
  margin-bottom: 4px;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;
`;

const CharacterName = styled.p`
  margin: 0;

  font-weight: 700;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;
`;

const СastSectionButton = styled.button`
  margin-left: auto;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.07);
  }
`;

export {
  CastContainer,
  СastSection,
  СastSectionItem,
  СastSectionImg,
  ActorName,
  CharacterName,
  СastSectionButton,
};
