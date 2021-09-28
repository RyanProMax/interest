import { useRouter } from 'next/router';
import Image from 'next/image';

function Card({ name, imgSrc, path }) {
  const router = useRouter();

  return (
    <div
      className='interest-card'
      onClick={() => {
        router.push(path);
      }}
    >
      <Image src={imgSrc} className='interest-card__image' alt={name} width={320} height={320} objectFit='cover' />
      <span className='interest-card__name'>{name}</span>
    </div>
  );
}

export default Card;
