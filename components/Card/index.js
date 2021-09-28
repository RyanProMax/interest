import { useRouter } from 'next/router';

function Card({ name, imgSrc, path }) {
  const router = useRouter();

  return (
    <div
      className='interest-card'
      onClick={() => {
        router.push(path);
      }}
    >
      <div className='interest-card__image-wrapper'>
        <img src={imgSrc} className='interest-card__image' alt={name} />
      </div>
      <span className='interest-card__name'>{name}</span>
    </div>
  );
}

export default Card;
