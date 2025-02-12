import Users from '@/components/Users'

async function fetchUser() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function HomePage() {
  const user = await fetchUser()
  return (
    <Users user={user} />
  )
}

export default HomePage