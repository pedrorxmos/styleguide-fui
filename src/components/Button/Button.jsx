import './Button.scss';

export default function Button({ el, text, type, href }) {

  const typeClass = type ? `btn-${type}` : '';

  return (
    <>
      {
        (el === 'btn' || el === '' || el === undefined  || type === null) &&
        <button className={`btn ${typeClass}`}>{text}</button>
      }
      {
        el === 'link' &&
        <a className={`btn ${typeClass}`} href={href}>{text}</a>
      }
    </>
  )
}