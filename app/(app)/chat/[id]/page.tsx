export default async function IndvidualThreadPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return <section>thread id is {id}</section>;
}
