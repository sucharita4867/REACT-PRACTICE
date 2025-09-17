export default function Firend({ friend }) {
  console.log(friend);
  const { name, email, phone, username } = friend;
  return (
    <div className="card">
      <h4>Name:{name}</h4>
      <p>Email:{email}</p>
      <p>Phone No:{phone}</p>
      <p>User Name:{username}</p>
    </div>
  );
}
