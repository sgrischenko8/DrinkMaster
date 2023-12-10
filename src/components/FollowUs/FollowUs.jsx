import { FollowIconsList, FollowIconLink, IconSvg } from './FollowUs.styled';
import sprite from '../../images/sprite.svg';
const FollowUs = ({ theme }) => {
  const followList = [
    ['facebook', 'facebook.com/goITclub/'],
    ['instagram', 'instagram.com/goitclub/'],
    ['youtube', 'youtube.com/c/GoIT'],
  ];

  return (
    <FollowIconsList>
      {followList.map((el) => (
        <li key={el[0]}>
          <FollowIconLink
            href={`https://www.${el[1]}`}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <IconSvg theme={theme}>
              <use href={`${sprite}#${el[0]}`} />
            </IconSvg>
          </FollowIconLink>
        </li>
      ))}
    </FollowIconsList>
  );
};

export default FollowUs;
