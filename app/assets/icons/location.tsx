interface LocationIconProps {
  color?: string;
  size?: string | number;
}

export const LocationIcon = ({ color = "#888888", size = "1em" }: LocationIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM12 7.25q-1.515 0-2.658 1.046Q8.2 9.342 8.2 11.143q0 1.444 1.137 2.848t2.123 2.28q.12.106.262.159t.278.053t.273-.053t.268-.159q1.005-.875 2.132-2.28t1.127-2.848q0-1.8-1.142-2.847T12 7.25m-.003 4.962q-.445 0-.75-.308q-.305-.307-.305-.753q0-.445.308-.75t.753-.305t.75.308t.305.753t-.308.75t-.753.305"
      ></path>
    </svg>
  );
};