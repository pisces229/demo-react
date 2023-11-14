import prisma from "@/backend/client/app-prisma-client";

const doQuery = async (row: bigint) => {
  const result = await prisma.$queryRaw<{
    id: string;
    name: string;
    birthday: Date;
    age: number;
    deadline: Date;
  }[]>`
    SELECT *
    FROM app
    -- WHERE row = ${row}
  `;
  console.log(result);
  return result;
};

const doFindMany = async () => {
  const result = await prisma.app.findMany();
  console.log(result);
  return result;
};

const doFind = async (row: bigint) => {
  const result = await prisma.app.findFirst({
    select: { name: true },
    where: {
      row: row,
    },
  });
  console.log(result);
  return result;
};

const doCreate = async () => {
  const result = await prisma.app.create({
    data: {
      id: "1",
      name: "A",
      birthday: new Date(),
      age: 111,
      deadline: new Date(),
    },
  });
  console.log(result);
  return result;
};

const doUpdate = async (row: bigint) => {
  const result = await prisma.app.updateMany({
    data: {
      id: "2",
      name: "B",
      birthday: new Date(),
      age: 222,
      deadline: new Date(),
    },
    where: {
      row: row,
    },
  });
  console.log(result);
  return result;
};

const doDelete = async (row: bigint) => {
  const result = await prisma.app.deleteMany({
    where: {
      row: row,
    },
  });
  console.log(result);
  return result;
};

export { doCreate, doDelete, doFind, doFindMany, doQuery, doUpdate };
