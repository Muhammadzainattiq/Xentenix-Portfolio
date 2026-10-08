"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { BOOKING_URL } from "../site";

const calLink = new URL(BOOKING_URL).pathname.slice(1);
const namespace = "free-ai-audit";

// Cal.com's embed page stays hidden until its script completes a handshake, so a plain iframe renders blank.
export function BookingEmbed() {
  useEffect(() => {
    getCalApi({ namespace }).then((cal) => {
      cal("ui", { theme: "light", layout: "month_view", hideEventTypeDetails: false });
    });
  }, []);

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      config={{ layout: "month_view", theme: "light" }}
      className="xn-booking__cal"
    />
  );
}
