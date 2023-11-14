import { getCount } from '@/app/api/backend/count';
import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url)
//   const id = searchParams.get('id')
//   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
//     headers: {
//       'Content-Type': 'application/json',
//     //   'API-Key': process.env.DATA_API_KEY,
//     },
//   })
//   const product = await res.json()

//   return NextResponse.json({ product })
// }

export async function GET() {
  // var count: number = await new Promise((resolve) => {
  //     setTimeout(() => {
  //         resolve(randomInt(10));
  //     }, 3000);
  // });
  var count = await getCount();
  var res = JSON.stringify(count);
  return NextResponse.json({ res });
}
