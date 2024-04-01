type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function Greet({
  name,
  messageCount = 0,
  isLoggedIn,
}: GreetProps) {
  return (
    <div>
      {isLoggedIn
        ? ` Hello, ${name}!You have ${messageCount} unread message.`
        : "Hello, Guest!"}
    </div>
  );
}
