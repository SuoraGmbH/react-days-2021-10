interface Props {
  name: string;
  opinion: string;
}

export function MessageView({ opinion, name }: Props): JSX.Element {
  return (
    <article>
      {opinion}
      <footer>{name.toUpperCase()}</footer>
    </article>
  );
}
