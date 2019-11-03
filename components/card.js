import React, { Fragment } from "react";
import moment from "moment";
import SocialIcons from "../components/social-icons";
import LoadingIcon from "../components/loading-icon";

const Card = ({ group, loading }) => {
  let backgroundImage = "";
  let socialIcons = null;
  if (!loading) {
    if (group.path) {
      backgroundImage = `background-image: url('/static/${group.path}');`;
    }
    if (group.links && group.name) {
      socialIcons = <SocialIcons links={group.links} groupName={group.name} />;
    }
  }

  let nextEvent = {
    title: "TBA",
    date: "Click here for updates",
    url: group.url
  };

  if (Object.keys(group.nextEvent).length) {
    const { url, start_date, title } = group.nextEvent;

    nextEvent = {
      ...nextEvent,
      title,
      date: moment(start_date).format("MMM Do YYYY"),
      url
    };
  }

  let cardInfo = (
    <Fragment>
      <span className="loadingIcon">
        <LoadingIcon />
      </span>
      <style jsx>{`
        .loadingIcon {
          position: absolute;
          font-size: 100px;
          top: 50%;
          right: 50%;
          transform: translate(50%, -50%);
        }
      `}</style>
    </Fragment>
  );
  if (!loading) {
    cardInfo = (
      <Fragment>
        <h4>Next Event</h4>
        <h3>{group.name}</h3>
        <h5 className="event-title">{nextEvent.title}</h5>
        <span className="event-date">{nextEvent.date}</span>
        <style jsx>{`
          h4 {
            font-weight: 700;
            font-size: 20px;
            margin: 12px 0 0;
          }
          h3 {
            margin: 0;
            color: #fff;
            font-size: 22px;
            font-weight: 700;
            position: absolute;
            bottom: 10px;
          }
          .event-date {
            font-size: 18px;
            color: #fff;
            font-weight: 400;
            text-decoration: overline;
            margin-top: 8px;
            display: block;
          }
          .event-title {
            font-weight: 700;
            font-size: 2em;
            margin: 12px 0 0;
            overflow: hidden;
            max-height: 180px;
            line-height: 35px;
          }
          @media (max-width: 840px) {
            h4 {
              font-size: 28px;
            }
            h3 {
              font-size: 30px;
            }
            .event-title {
              max-height: 145px;
            }
          }
        `}</style>
      </Fragment>
    );
  }

  return (
    <span className="card-container">
      <a href={nextEvent.url} name={group.name}>
        <div className="card">{cardInfo}</div>
      </a>
      {socialIcons}
      <style jsx>{`
        a:link {
          text-decoration: none;
        }
        .card {
          width: 200px;
          height: 300px;
          padding: 18px;
          color: #fff;
          text-align: left;
          text-decoration: none;
          background: ${loading ? "#3d2769" : "#555"};
          background-blend-mode: overlay;
          ${backgroundImage}
          background-size: cover;
          background-position: center;
          transition: all 150ms, transform 200ms;
          filter: drop-shadow(0 5px 3px rgba(0, 0, 0, 0.4));
          border-radius: 20px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
          word-break: break-word;
        }
        .card:hover {
          transform: scale(1.06);
          filter: drop-shadow(0 8px 6px rgba(0, 0, 0, 0.3));
        }

        @media (max-width: 840px) {
          .card-container {
            width: 80%;
          }
          .card {
            width: auto;
            margin-bottom: 15px;
          }
          .card p {
            font-size: 26px;
          }
        }
      `}</style>
    </span>
  );
};

export default Card;
