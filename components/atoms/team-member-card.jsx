import { string, number, bool, shape } from 'prop-types';
import ProgressBar from './progress-bar';
import Card from './card';
import ExtraLifeMemberButtons from './extralife-member-buttons';

const LinkWrapper = ({ children, links, streamIsLive, twitchUsername }) => {
  if (links?.page) {
    let href = links.page;
    if (streamIsLive && twitchUsername) {
      href = `https://www.twitch.tv/${twitchUsername}`;
    }
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
        <style jsx>
          {`
            display: grid;
            text-decoration: none;
            place-items: center;
            min-height: 200px;
            color: #444;
          `}
        </style>
      </a>
    );
  }
  return children;
};

const TeamMemberCard = ({
  avatarImageURL,
  displayName,
  fundraisingGoal,
  isTeamCaptain,
  links,
  streamIsLive,
  twitchUsername,
  sumDonations,
}) => {
  let ribbon = {};
  if (isTeamCaptain) {
    ribbon = {
      ...ribbon,
      text: 'Team Captain',
      color: '#e0bd00',
    };
  }
  if (streamIsLive) {
    ribbon = {
      ...ribbon,
      color: undefined,
      text: 'Live now!',
      leftSide: true,
    };
  }

  return (
    <Card ribbon={ribbon} isGlowing={streamIsLive}>
      <>
        <div className="teamMemberCard">
          <LinkWrapper
            links={links}
            streamIsLive={streamIsLive}
            twitchUsername={twitchUsername}
          >
            <img src={avatarImageURL} alt={`${displayName}'s profile`} />
            <div className="name">{displayName}</div>
            <ProgressBar
              progress={sumDonations || 0}
              goal={fundraisingGoal}
              height={20}
              isMoney
              displayProgress
              displayPercent={false}
            />
          </LinkWrapper>
          <ExtraLifeMemberButtons links={links} streamIsLive={streamIsLive} />
        </div>
        <style jsx>
          {`
            :global(.teamMemberCard) {
              width: 200px;
              box-sizing: border-box;
              color: #000;
            }
            img {
              border-radius: 50%;
              width: 100px;
              height: 100px;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
              margin: 0 10px 10px;
            }
            .name {
              font-size: 1.1rem;
              line-height: 1;
              text-align: center;
              font-weight: bold;
              align-self: baseline;
            }
          `}
        </style>
      </>
    </Card>
  );
};

TeamMemberCard.defaultProps = {
  isTeamCaptain: false,
  links: {},
  streamIsLive: false,
  sumDonations: 0,
  twitchUsername: null,
};

TeamMemberCard.propTypes = {
  avatarImageURL: string.isRequired,
  displayName: string.isRequired,
  fundraisingGoal: number.isRequired,
  sumDonations: number,
  isTeamCaptain: bool,
  links: shape({
    donate: string,
    page: string,
    stream: string,
  }),
  streamIsLive: bool,
  twitchUsername: string,
};

export default TeamMemberCard;
