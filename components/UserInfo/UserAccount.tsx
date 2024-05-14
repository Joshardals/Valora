export default function UserAccount() {
  const token = localStorage.getItem("token");
  return <div>{token}</div>;
}
