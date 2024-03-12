import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createPostInput, updatePostInput } from "@deepshaswat/medium-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || ""; // adding an empty string so that authHeader is always a string irrespective of what is sent
  try {
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "Your are not logged in",
      });
    }
  } catch (e) {
    c.status(403);
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = createPostInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "invalid Inputs",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: c.get("userId"),
      },
    });

    return c.json({
      id: blog.id,
    });
  } catch (e) {
    c.status(411);
    return c.text("Blog Creation failed");
  }
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const { success } = updatePostInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "invalid Inputs",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
        authorId: c.get("userId"),
      },
    });

    return c.json({
      id: blog.id,
    });
  } catch (e) {
    c.status(411);
    return c.text("Blog Creation failed");
  }
});

//ToDo: pagination is required
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({
      blogs,
    });
  } catch (e) {
    c.status(411);
    return c.text("Error fetching the blog post");
  }
});

blogRouter.get("/:id", async (c) => {
  const param = await c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: param,
      },
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({
      blog,
    });
  } catch (e) {
    c.status(411);
    return c.text("Error fetching the blog post");
  }
});
