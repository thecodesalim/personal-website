export default function Card({
  link,
  title,
  description,
}: {
  link: string;
  title: string;
  description: string;
}) {
  return (
    <a href={`${link}`}>
      <div className=" w-1/4 hover:bg-tertiary p-2 space-y-1 rounded">
        <p className=" text-sm">{title}</p>
        <p className=" text-sm text-link">{description}</p>
      </div>
    </a>
  );
}
