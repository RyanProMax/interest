import { useRouter } from 'next/router';
import classnames from 'classnames';

function Card({ name, imgSrc, path, isMobile }) {
  const router = useRouter();

  return (
    <div
      className='interest-card'
      onClick={() => {
        router.push(path);
      }}
    >
      <div
        className={classnames('interest-card__image-wrapper', {
          'interest-card__image-wrapper--mobile': isMobile
        })}
      >
        <img src={imgSrc} className='interest-card__image' alt={name} />
      </div>
      <span className='interest-card__name'>{name}</span>
    </div>
  );
}

export default Card;
