// app/google-my-business/layout.js
import { metadata as gmbMetadata } from "./metadata";

export const metadata = gmbMetadata;

export default function GoogleMyBusinessLayout({ children }) {
  return <>{children}</>;
}
