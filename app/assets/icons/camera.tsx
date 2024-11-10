interface CameraIconProps {
  color?: string;
  size?: string | number;
}

export const CameraIcon = ({ color = "#888888", size = "1em" }: CameraIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20zm12 12a5 5 0 1 0 0-10a5 5 0 0 0 0 10M4 7v2h3V7zm0-5h6v2H4z"
      ></path>
    </svg>
  );
};
