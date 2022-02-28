import React from 'react';
import styled from 'styled-components';
import A from '../../components/A';

interface Props {};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--padding);
  align-items: stretch;

  box-shadow: var(--shadow-inset-medium), inset 0 0 2px hsl(var(--shadow-color));
  filter: lightness(0.5);
  backdrop-filter: invert(0.05);

  & *.island {
    border-radius: 0.25rem;
    background-color: var(--color-white);
    box-shadow: var(--shadow-elevation-medium), 0 0 3px hsl(var(--shadow-color));
  }

  & > section {
    padding: calc(2 * var(--padding));
    width: 100%;

    & > .release {
      padding: 0.5rem;
      backdrop-filter: invert(0.025);
      border-radius: 0.25rem;
      box-shadow: var(--shadow-inset-low), inset 0 0 2px hsl(var(--shadow-color));
    }

    & ul {
      line-height: 1.25;
      margin-bottom: 0.25rem;
      padding-left: calc(1.5 * var(--padding));
    }

    & a {
      font-weight: 500;
      color: var(--oc-pink-3);
      text-decoration: underline;
      text-decoration-color: rgba(var(--oc-pink-5-rgb), 0);

      transition: text-decoration-color 0.1s;

      &:hover {
        color: var(--oc-pink-9);
        text-decoration-color: var(--oc-pink-9);
      }
    }

    & h2 {
      width: 100%;
      text-align: center;
      margin: 0;
    }

    & h3 {
      margin-top: 0.5rem;
      width: 100%;

      & > span {
        font-size: 1rem;
        font-weight: 300;

        &::before { content: "("; }
        &::after { content: ")"; }
      }
    }
  }
`;

const ChangelogPage: React.FC<Props> = () => {
  return (
    <Container>
      <section className="island">
        <h2>Changelog</h2>
        <p>
          For more up to date information, please check out the changelog in the <A href="https://github.com/tif-calin/votevote/blob/main/CHANGELOG.md">GitHub repo</A>.
        </p>

        <h3>v0.1.2 <span>2022_02feb2?</span></h3>
        <div className="release">
          <h4>Added</h4>
          <h4>Improved</h4>
          <h4>Changed</h4>
        </div>

        <h3>v0.1.1 <span>2022_02feb18</span></h3>
        <div className="release">
          <h4>Added</h4>
          <ul>
            <li>1 new voting block and 3 new voting systems: contingency</li>
            <ul>
              <li>contingent vote</li>
              <li>supplementary vote</li>
              <li>Sri Lankan contingency</li>
            </ul>
            <li>reworked election system to better utilize cacheing for more efficient calculations</li>
            <li>voting systems now show winner(s) in text</li>
            <li>clicking on the round number will now pause the graph</li>
          </ul>
          <h4>Changed</h4>
          <ul>
            <li>round display time decreased from 2.5s to 1.9s</li>
            <li>can no longer add voters that have already been added</li>
          </ul>
          <h4>Fixed</h4>
          <ul>
            <li>navigating by direct url no longer results in 404</li>
            <li>too long x-tick labels won't show unless hovered over</li>
            <li>winners with negative scores now show thick borders</li>
            <li>crash on mobile devices due to unsupport .at() feature</li>
          </ul>
        </div>

        <h3>v0.1.0 <span>2022_02feb15</span></h3>
        <div className="release">
          <ul>
            <li>
              <span>7 voting methods split into two blocks</span>
              <ul>
                <li>plurality: fptp, veto, signed, vfa</li>
                <li>runoff: irv, coombs, fab_irv</li>
                <li>bootiful graphs</li>
              </ul>
            </li>
            <li>
              <span>1 dataset: xkcd's RGB colors</span>
              <ul>
                <li>source: <A href="https://xkcd.com/color/rgb/">xkcd color survey</A></li>
                <li>distance is calculated as an average between RGB and HSL distance with an activator function</li>
              </ul>
            </li>
            <li>
              <span>the homepage</span>
              <ul>
                <li>add, remove, and set candidates/voters</li>
                <li>save setup to localStorage</li>
                <li>results update live unless there's too many candidates</li>
              </ul>
            </li>
            <li>
              this changelog page
            </li>
          </ul>
        </div>

        
      </section>
    </Container>
  );
};

const MemoizedChangelogPage = React.memo(ChangelogPage);
export default ChangelogPage;
export { MemoizedChangelogPage };
