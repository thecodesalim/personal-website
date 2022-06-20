export default function Item({ name, detail, link }) {
  return (
    <a target="_blank" href={link} rel="noreferrer">
      <li className="pb-4">
        <p className="text-secondary mb-3 font-light underline">{name}</p>
        <p className="text-tertiary text-sm w-60">{detail}</p>
      </li>
    </a>
  );
}
