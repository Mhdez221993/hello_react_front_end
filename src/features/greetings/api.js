const fetchGreeting = async () => {
  const response = await fetch('http://localhost:3000/api/greetings')
  return response.json()
}

export default fetchGreeting
