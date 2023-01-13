import { ResponseResolver, MockedRequest, restContext } from "msw"

const get: ResponseResolver<MockedRequest, typeof restContext> = (
  _req,
  res,
  ctx
) => {
  return res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        name: "foo",
      },
      {
        id: 2,
        name: "bar",
      },
    ])
  )
}

export default { get }
