// Server component that fetches data during SSG
async function getData() {
  const res = await fetch("https://api.github.com/users/vercel", {
    next: { revalidate: 3600 },
  });
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Turbopack Fetch Error Reproduction</h1>
      <p className="text-lg">GitHub User: {data.login}</p>
      <p className="text-sm text-gray-500">Followers: {data.followers}</p>
    </main>
  );
}
