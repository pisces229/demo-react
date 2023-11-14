This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## nextjs app router

### summary

1. 利用 server component + caching 機制代替 ssr/isr
2. server component 不會像 ssr 一樣直接給 html ，而是根據各個 server component 給資料
3. server component 是 react feature not next feature 只是非常相關

簡單的比較 ssr and server component
![Alt text](readme/ssr.png)
![Alt text](readme/rsc.png)

### [Routing](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions)

資料夾路徑來決定 url 路徑，layout 會直接套用到所有子資料夾

用括號的資料夾(folderName)，可以略過路徑，裡面可以放 layout

在資料夾前加底線\_folderName 是 private folder 裡面的都不會參與 routing

src/app/(folder)/test/page.ts => https://xxx.xxx/test

用中括號的資料夾\[folder] 是 Dynamic Routes 舉例

src/app/blog/[slug]/page.js => https://xxx.xxx/blog/a

以下可以取得 slug == a

```ts
// src/app/blog/[slug]/page.js
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
```

api route 就直接全部都放在 src/app/api 裡面，同樣也是根據資料夾來決定 url，命名不是 page.ts 而是 route.ts

### caching

| Mechanism           | What                       | Where  | Purpose                                         | Duration                        |
| ------------------- | -------------------------- | ------ | ----------------------------------------------- | ------------------------------- |
| Request Memoization | Return values of functions | Server | Re-use data in a React Component tree           | Per-request lifecycle           |
| Data Cache          | Data                       | Server | Store data across user requests and deployments | Persistent (can be revalidated) |
| Full Route Cache    | HTML and RSC payload       | Server | Reduce rendering cost and improve performance   | Persistent (can be revalidated) |
| Router Cache        | RSC Payload                | Client | Reduce server requests on navigation            | User session or time-based      |

![Alt text](readme/cache-2.png)

#### Request Memoization

![Alt text](readme/cache.png)

#### Data Cache

![Alt text](readme/cache-1.png)
Don't cache
fetch(`https://...`, { cache: 'no-store' })

#### Full Route Cache

#### Router Cache

## prisma

[prisma](https://www.prisma.io/docs)

[marketplace](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)

schema.prisma:

```
datasource db {
  provider = "sqlserver"
  url      = env("DATABASE_URL")
}
```

.env:

```
DATABASE_URL="sqlserver://localhost:1433;database=nccmain;user=sa;password=1qaz@WSX;trustServerCertificate=true;connectionLimit=10"
```

### mechanism

![Alt text](readme/prisma.png)
![Alt text](readme/prisma-1.png)
![Alt text](readme/prisma-2.png)

### command

// 從 db 拉 schema，有的設定不會更新
npx prisma db pull
// 完全根據 db 結構覆蓋程式的 schema
npx prisma db pull --force

#### init

mkdir -p prisma/migrations/0_init

// 以下兩條指令在 windows 要用 cmd 執行 powershell 不行，如果是 db first 不重要
npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql

npx prisma migrate resolve --applied 0_init

npm install @prisma/client

npx prisma generate

#### update

db first 就這兩個重複執行就可

```

# once datasource
npx prisma db pull --force
npx prisma generate

# multiple datasource
npx prisma db pull --schema=./prisma/app1.schema.prisma --force
npx prisma db pull --schema=./prisma/app2.schema.prisma --force
npx prisma generate --schema=./prisma/app1.schema.prisma
npx prisma generate --schema=./prisma/app2.schema.prisma

```
