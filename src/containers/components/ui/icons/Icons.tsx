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
