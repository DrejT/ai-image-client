import { redirect,createCookieSessionStorage } from "@remix-run/node";

// create a new session during login 

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export async function createUserSession(
  username: string,
  redirectTo: string
) {
  const session = await storage.getSession();
  session.set("username", username);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

// use cookies stored in session storage

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}


export async function getUsername(request: Request) {
  const session = await getUserSession(request);
  const username = session.get("username");
  if (!username || typeof username !== "string") {
    return null;
  }
  return username;
}

export async function requireUsername(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const username = session.get("username");
  if (!username || typeof username !== "string") {
    const searchParams = new URLSearchParams([
      ["redirectTo", redirectTo],
    ]);
    throw redirect(`/login?${searchParams}`);
  }
  console.log(username)
  return username;
}

// using logout function to log out a user 
// this function destroys session

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}
