import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './Header.css';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id='home'>
      <div className="gpt3__header-content">
        
        <h1 className='gradient__text'>
          Let&apos;s Build Someting amazing with GPT-3 OpenAI
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta vel debitis minus dolor dicta quis ratione reiciendis laudantium, ut deserunt, sint excepturi aut repellat? A ea sed incidunt autem molestiae.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt='people' />
          <p>1600 people requested access to visit in last 24 hours</p>
        </div>

        <div className="gpt3__header-image">
          <img src={ai} alt='ai' />
        </div>

      </div>
    </div>
  )
}

export default Header