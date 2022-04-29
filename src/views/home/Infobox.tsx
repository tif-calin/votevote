import React from 'react';
import styled from 'styled-components';
import ActionText from '../../components/ActionText';
import ExternalLink from '../../components/ExternalLink';
import useLocalStorage from '../../hooks/useLocalStorage';

const Container = styled.div<{
  show?: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: var(--padding);

  ${({ show }) => !show && `
    display: unset;
    order: 1;
    background: none;
    padding: 0;

    & *:not(.action-text) {
      display: none;
    }

    & .action-text {
      float: right;
      padding: 0;
      margin: 0;
    }
  `}

  & .close-button {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1rem;
    opacity: 0.5;
    padding: var(--padding) var(--padding) 0.125rem 0.125rem;
    cursor: pointer;

    transition: opacity 0.1s, color 0.1s;
    &:hover {
      color: var(--oc-pink-3);
      opacity: 1;
    }
  }

  & p, span {
    font-size: 0.8rem;
    line-height: 1.25;
  }

  & h2:not(:first-of-type) {
    margin-top: 0.75rem;
  }

  & h3 {
    margin-top: 0.5rem;
    font-weight: 600;
  }

  & a {
    font-weight: 500;
    color: var(--oc-pink-3);
    text-decoration: underline;
    text-decoration-color: rgba(var(--oc-pink-5-rgb), 0);

    transition: color 0.1s, text-decoration-color 0.1s;
    &:hover {
      color: var(--oc-pink-9);
      text-decoration-color: var(--oc-pink-9);
    }
  }
`;

const Infobox = () => {
  const [showInfo, setShowInfo] = useLocalStorage('votevote_showinfo', true);
  const [showMore, setShowMore] = React.useState(false);
  const toggleShowInfo = React.useCallback(() => setShowInfo(b => !b), [setShowInfo]);
  const toggleShowMore = React.useCallback(() => setShowMore(b => !b), []);

  return (
    <Container className={showInfo ? 'island' : undefined} show={showInfo}>
      <h2>What exactly is this?</h2>
      <span className="symbol close-button" onClick={toggleShowInfo}>&#x2716;</span>
      <p>
        This is an educational toy to explore just how different the outcome of an election can be depending on which of the many seemingly "fair" choices of voting method you decide to use.
      </p>
      {showMore && (
        <>
          <h3>Voters and candidates</h3>
          <p>
            On the left side you can add "candidates" and "voters", each represented by a color. How much a voter likes a candidate is determined by how close they are to that candidate (originally just RGB distance but now a hybrid between RGB and HSL). 
          </p>
          <h3>Voting systems</h3>
          <p>
            On the right side you can see the results of that election simulated across dozens of different voting systems. Make sure to read the "explanation" box to learn about each system!
          </p>
          <h2>Where can I learn more?</h2>
          <p>
            This project is heavily inspired by Nicky Case&apos;s <ExternalLink href="https://ncase.me/ballot/">To Build A Better Ballot</ExternalLink>. A really great place to explore voting theory and explore voting system properties is <ExternalLink href="https://electowiki.org/">electowiki.org</ExternalLink>. If you&apos;re interested in actually utilizing these systems, I highly recommend checking out the delightful <ExternalLink href="https://votyvote.com/">votyvote.com</ExternalLink> (the similar name is pure coincidence). If you&apos;re interested in a project that is heavily informed by the study of voting systems, I&apos;d check out the open-source project <ExternalLink href="https://sandstorm.pik-potsdam.de/assets/landing-page/">Vodle</ExternalLink>. You can find a list of implementations of other voting systems on this <ExternalLink href="https://electowiki.org/wiki/Voting_links">this useful ElectoWiki page</ExternalLink> (and perhaps, someday here on VoteVote or my other project <ExternalLink href="http://bookbookbook.club/">BookBook</ExternalLink>).
          </p>
        </>
      )}
      <ActionText
        mt="1rem"
        label={`Show ${showInfo
          ? showMore ? 'less' : 'more'
          : 'explanation'
        }...`}
        onClick={showInfo ? toggleShowMore : toggleShowInfo}
      />
    </Container>
  );
};

export default Infobox;
