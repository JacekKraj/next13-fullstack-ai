﻿const createURL = (path: string) => window.location.origin + path;

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL("/api/journal"), { method: "POST" }),
  );

  console.log(res);

  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
};
