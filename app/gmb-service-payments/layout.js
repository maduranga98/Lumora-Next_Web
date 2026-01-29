// app/gmb-service-payments/layout.js
import { metadata as gmbPaymentMetadata } from "./metadata";

export const metadata = gmbPaymentMetadata;

export default function GMBServicePaymentsLayout({ children }) {
  return <>{children}</>;
}
