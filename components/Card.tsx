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
      <div className=" w-2/3 hover:bg-tertiary p-2 space-y-1 rounded sm:w-1/4">
        <p className=" text-sm">{title}</p>
        <p className=" text-sm text-link">{description}</p>
      </div>
    </a>
  );
}
