export default function NewsNotFoundPage({params}) {
  return (
    <div id="error">
      <h1>Not found !</h1>
      <p>We could not find the requested article {params?.slug}!</p>
    </div>
  );
}
