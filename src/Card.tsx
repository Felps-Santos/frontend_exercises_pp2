interface CardProps {
  title: string;
  description: string;
}

function Card({ title, description }: CardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <h2 className="font-bold">{title}</h2>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

export default Card;
