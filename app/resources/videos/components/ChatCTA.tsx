import Button from "~/resources/common/components/Button";

export default function ChatCTA() {
  return (
    <div className="mx-auto my-10 flex h-[136px] w-11/12 max-w-[950px] items-center justify-between rounded-[20px] bg-light-blue px-24">
      <h3 className="max-w-[280px] text-4xl font-semibold">
        Ainda ficou alguma dúvida?
      </h3>
      <Button>Suporte via chat</Button>
    </div>
  );
}
