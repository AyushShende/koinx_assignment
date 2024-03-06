import Button from '../button';

const NAV_LINKS = ['crypto taxes', 'free tools', 'resource center'];

export default function Menu() {
  return (
    <menu className="flex flex-col sm:flex-row sm:items-center gap-6">
      {NAV_LINKS.map((link) => (
        <li className="capitalize font-medium cursor-pointer" key={link}>
          {link}
        </li>
      ))}
      <Button variant="primary">Get Started</Button>
    </menu>
  );
}
