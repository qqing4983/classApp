/* Core */
import { NextResponse } from 'next/server'
const userList=[{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 1,
  "id": 2,
  "title": "quis ut nam facilis et officia qui",
  "completed": false
},
{
  "userId": 1,
  "id": 3,
  "title": "fugiat veniam minus",
  "completed": false
},
{
  "userId": 1,
  "id": 4,
  "title": "et porro tempora",
  "completed": true
},
{
  "userId": 1,
  "id": 5,
  "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
  "completed": false
},
{
  "userId": 1,
  "id": 6,
  "title": "qui ullam ratione quibusdam voluptatem quia omnis",
  "completed": false
},
{
  "userId": 1,
  "id": 7,
  "title": "illo expedita consequatur quia in",
  "completed": false
},
{
  "userId": 1,
  "id": 8,
  "title": "quo adipisci enim quam ut ab",
  "completed": true
},
{
  "userId": 1,
  "id": 9,
  "title": "molestiae perspiciatis ipsa",
  "completed": false
},
{
  "userId": 1,
  "id": 10,
  "title": "illo est ratione doloremque quia maiores aut",
  "completed": true
},]
export async function POST(req, res) {
  const body1 = await req.json()
  const { amount = 1 } = body1;
  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500))

  return NextResponse.json({ data: amount },)
}



 
// export async function GET() {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })
//   const data = await res.json()
 
//   return NextResponse.json({ data })
// }



 
// export async function POST() {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//     body: JSON.stringify({ time: new Date().toISOString() }),
//   })
 
//   const data = await res.json()
 
//   return NextResponse.json(data)
// }