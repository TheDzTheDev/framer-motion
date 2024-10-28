import { createFileRoute } from '@tanstack/react-router';
import OrbitingIcons from '../components/orbit';

export const Route = createFileRoute("/contact")({
  component: Contact,
});

export default function Contact() {

  return (
    <>
      <OrbitingIcons />
    </>
  );
}

