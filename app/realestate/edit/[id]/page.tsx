export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return <h3>Editing property {id}</h3>;
}
