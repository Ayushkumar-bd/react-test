import { useEffect, useRef } from "react";
import { ChatWidget } from "@bangdb/web-sdk";

export function Chat() {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;

    new ChatWidget({
      config: {
        apikey: "1878161309929593128",
        backendURL: "vector.bangdb.com:18080",
        resourceURL: "vector.bangdb.com:18080",
        userid: "ayushkumar1234@yopmail.com",
        org: "R0QVJEGE2HH8",
        indexName: "myidx",
      },
    });

    return () => {
      document.getElementById("ai-chat-widget-root")?.remove();
      mountedRef.current = false;
    };
  }, []);

  // Widget mounts itself into document.body — nothing to render here
  return null;
}
