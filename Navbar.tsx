import Link from 'next/link';

export default function Navbar() {
  return (
    <div style={{ padding: 10, borderBottom: '1px solid var(--border)' }}>
      <Link href='/dashboard'>Dashboard</Link> |{' '}
      <Link href='/calendar'>Calendar</Link> |{' '}
      <Link href='/new-trade'>New Trade</Link>
    </div>
  );
}
