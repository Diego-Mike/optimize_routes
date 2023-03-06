import Fastify, { FastifyReply, FastifyRequest } from "fastify";

const fastify = Fastify({ logger: true });

fastify.post("/", async (req: FastifyRequest, rep: FastifyReply) => {
  return {
    status: "successful",
    error: false,
    data: {
      route: req.body,
      optimization: [{ lat: "8132u8213ssd.123m1.1", lng: "jajn831.13.31" }],
    },
  };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3001 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
