import './ColorCard.scss';

export default function ColorCard({color}) {
  return (
    <>
      <span className={`color-card ${color}`} data-color={color}>
      </span>
    </>
  )
}