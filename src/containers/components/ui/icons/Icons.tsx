import './icons.scss';

interface IconProps {
  color?: string;
  width?: string;
  height?: string;
}

export const Pencil: React.FC<IconProps> = ({ color = 'white', width = '13', height = '13' }) => {
  return (
    <div className="icon">
      <svg style={{ margin: '4px' }} width={height} height={width} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.0164 5L12.2281 3.78832L12.2281 3.78829L12.2282 3.78821C12.3439 3.67249 12.4018 3.61461 12.4473 3.56237C13.1023 2.80963 13.1023 1.68918 12.4473 0.936442C12.4018 0.884183 12.3439 0.82629 12.2281 0.71051L12.2281 0.710488C12.1123 0.594694 12.0544 0.536797 12.0021 0.491314C11.2494 -0.163771 10.129 -0.163771 9.37621 0.491314C9.32397 0.536781 9.26609 0.594655 9.15038 0.710369L9.1503 0.71044L9.15026 0.710489L7.92064 1.94011C8.65346 3.2168 9.72226 4.27733 11.0164 5ZM6.46596 3.39479L1.5426 8.31814C1.11754 8.7432 0.905011 8.95573 0.765276 9.21683C0.625541 9.47793 0.566596 9.77265 0.448706 10.3621L0.0638519 12.2864C-0.00267026 12.619 -0.0359313 12.7853 0.0586767 12.8799C0.153285 12.9745 0.31959 12.9412 0.6522 12.8747L2.57647 12.4899L2.57648 12.4899C3.16592 12.372 3.46065 12.313 3.72175 12.1733C3.98284 12.0336 4.19537 11.821 4.62043 11.396L9.55795 6.45845C8.31503 5.67093 7.26083 4.62382 6.46596 3.39479Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export const Plus: React.FC<IconProps> = ({ color = 'white', width = '14', height = '14' }) => {
  return (
    <div className="icon">
      <svg width={width} height={height} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="0.5" width="2" height="12" fill="white" />
        <rect x="12" y="5.5" width="2" height="12" transform="rotate(90 12 5.5)" fill={color} />
      </svg>
    </div>
  );
};

export const Trash: React.FC<IconProps> = ({ color = 'white', width = '15', height = '16' }) => {
  return (
    <div className="icon">
      <svg width={width} height={height} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 3.5H0V6C0.920475 6 1.66667 6.74619 1.66667 7.66667V10.1667C1.66667 12.8333 1.66667 14.1666 2.45483 15.0268C2.5138 15.0911 2.57555 15.1529 2.6399 15.2118C3.50003 16 4.83335 16 7.5 16C10.1666 16 11.5 16 12.3601 15.2118C12.4245 15.1529 12.4862 15.0911 12.5452 15.0268C13.3333 14.1666 13.3333 12.8333 13.3333 10.1667V7.66667C13.3333 6.74619 14.0795 6 15 6V3.5ZM6.41667 7.66667C6.41667 7.11438 5.96895 6.66667 5.41667 6.66667C4.86438 6.66667 4.41667 7.11438 4.41667 7.66667V11.8333C4.41667 12.3856 4.86438 12.8333 5.41667 12.8333C5.96895 12.8333 6.41667 12.3856 6.41667 11.8333V7.66667ZM10.5833 7.66667C10.5833 7.11438 10.1356 6.66667 9.58333 6.66667C9.03105 6.66667 8.58333 7.11438 8.58333 7.66667V11.8333C8.58333 12.3856 9.03105 12.8333 9.58333 12.8333C10.1356 12.8333 10.5833 12.3856 10.5833 11.8333V7.66667Z"
          fill={color}
        />
        <path
          d="M5.89008 1.30883C5.98504 1.22023 6.19428 1.14194 6.48536 1.0861C6.77643 1.03027 7.13307 1 7.49996 1C7.86685 1 8.22349 1.03027 8.51456 1.0861C8.80564 1.14194 9.01488 1.22023 9.10984 1.30883"
          stroke="#CCD2E3"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export const Close: React.FC<IconProps> = ({ color = '#F4F7FB', width = '30', height = '30' }) => {
  return (
    <div className="icon">
      <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="10.6066" transform="rotate(45 15 15)" fill={color} />
        <rect x="18.125" y="10.625" width="1.76777" height="10.6066" transform="rotate(45 18.125 10.625)" fill="#CCD2E3" />
        <rect x="19.375" y="18.125" width="1.76777" height="10.6066" transform="rotate(135 19.375 18.125)" fill="#CCD2E3" />
      </svg>
    </div>
  );
};
