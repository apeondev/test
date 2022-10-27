import { Button } from "ui";
import prisma from "database";

export default function Web({ account, webkey }: {
  account: any,
  webkey: any
}) {
  return (
    <div>
      {
        account ? (
          <div>
            <h1>Account</h1>
            {/* account array */}
            {
              account.map((item: any) => (
                <div key={item.id}>
                  <h2>{item.name}</h2>
                </div>
              ))
            }
          </div>
        ) : (
          <div>
            <h1>Account</h1>
            <p>Not found</p>
          </div>
        )
      }
      <h1>{webkey}</h1>
      <Button />
    </div>
  );
}

// get server side props
export async function getServerSideProps() {
  const webKey = process.env.WEB_KEY;
  console.log(webKey);
  await prisma.account.create({
    data: {
      name: "hey",
    },
  });
  const account = await prisma.account.findMany();
  console.log(account);
  return {
    props: {
      account: JSON.parse(JSON.stringify(account)),
      webkey: "webkey",
    },
  };
}

