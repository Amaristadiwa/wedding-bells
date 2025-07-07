export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="p-6">
      <h1 className="text-2xl text-pink-600 font-bold">Welcome, {user?.name} </h1>
      <p>Email: {user?.email}</p>
    </div>
  );
}