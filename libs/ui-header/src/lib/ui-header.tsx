export interface UiHeaderProps {
  message: string;
}

export function UiHeader(props: UiHeaderProps) {
  console.log(props.message);
  return (
    <div>
      <h1>{props.message}</h1>
    </div>
  );
}

export default UiHeader;
