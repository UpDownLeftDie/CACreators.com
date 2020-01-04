const CharityBanner = props => {
  const { charity } = props;
  if (!charity) return null;
  const { url, image } = charity;
  if (!url) return null;

  return (
    <>
      <a href={url} target="_blank">
        <img src={image} />
        <span>Extra Life Team</span>
      </a>
      <style jsx>
        {`
          a {
            width: 100%;
            height: 80px;
            top: -40px;
            position: absolute;
            text-align: center;
            background: #ffffff;
            color: #1d5b7d;
            border-radius: 20px 20px 0 0;
            transition: all 150ms, transform 150ms cubic-bezier(0, 0, 0.2, 1);
            text-decoration: none;
          }
          a:hover {
            top: -60px;
          }
          img {
            position: absolute;
            width: auto;
            height: calc(100% - 40px);
            left: 10px;
            top: 10px;
          }
          span {
            font-size: 20px;
            line-height: 60px;
          }
          @media (max-width: 900px) {
            a {
              top: -60px;
            }
          }
        `}
      </style>
    </>
  );
};
export default CharityBanner;
