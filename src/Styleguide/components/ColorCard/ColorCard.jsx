import CopyIcon from '../../../../public/icons/content-copy';
import './ColorCard.scss';

export default function ColorCard({color, hex, description}) {
  return (
    <>
      <div className="color-card">
        {/* <div className={`color-block ${color}`} style={{'--block-color': `#${hex}`}}></div> */}

        <div className={`color-block bg-${color}`}></div>

        <div className="card__info">
          <div className="card__description">
            <div className="card__title">
              <span>{color}</span>
              <CopyIcon fill="#333333" />
            </div>

            <p className='description'>{description}</p>
          </div>

          <code>#{hex}</code>
        </div>
      </div>
    </>
  )
}