import "./ChangeButton.css";

interface ChangeButtonProps {
  changeSelects: () => void;
}

const ChangeButton: React.FC<ChangeButtonProps> = ({ changeSelects }) => {
  return (
    <button className="exchange-btn" onClick={changeSelects} type="button">
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M7.96967 12.5303C8.26256 12.8232 8.73744 12.8232 9.03033 12.5303C9.32322 12.2374 9.32322 11.7626 9.03033 11.4697L7.96967 12.5303ZM5.53033 7.96967C5.23744 7.67678 4.76256 7.67678 4.46967 7.96967C4.17678 8.26256 4.17678 8.73744 4.46967 9.03033L5.53033 7.96967ZM5 7.75C4.58579 7.75 4.25 8.08579 4.25 8.5C4.25 8.91421 4.58579 9.25 5 9.25V7.75ZM19 9.25C19.4142 9.25 19.75 8.91421 19.75 8.5C19.75 8.08579 19.4142 7.75 19 7.75V9.25ZM4.46967 7.96967C4.17678 8.26256 4.17678 8.73744 4.46967 9.03033C4.76256 9.32322 5.23744 9.32322 5.53033 9.03033L4.46967 7.96967ZM9.03033 5.53033C9.32322 5.23744 9.32322 4.76256 9.03033 4.46967C8.73744 4.17678 8.26256 4.17678 7.96967 4.46967L9.03033 5.53033ZM16.0303 11.4697C15.7374 11.1768 15.2626 11.1768 14.9697 11.4697C14.6768 11.7626 14.6768 12.2374 14.9697 12.5303L16.0303 11.4697ZM18.4697 16.0303C18.7626 16.3232 19.2374 16.3232 19.5303 16.0303C19.8232 15.7374 19.8232 15.2626 19.5303 14.9697L18.4697 16.0303ZM19 16.25C19.4142 16.25 19.75 15.9142 19.75 15.5C19.75 15.0858 19.4142 14.75 19 14.75V16.25ZM5 14.75C4.58579 14.75 4.25 15.0858 4.25 15.5C4.25 15.9142 4.58579 16.25 5 16.25V14.75ZM19.5303 16.0303C19.8232 15.7374 19.8232 15.2626 19.5303 14.9697C19.2374 14.6768 18.7626 14.6768 18.4697 14.9697L19.5303 16.0303ZM14.9697 18.4697C14.6768 18.7626 14.6768 19.2374 14.9697 19.5303C15.2626 19.8232 15.7374 19.8232 16.0303 19.5303L14.9697 18.4697ZM9.03033 11.4697L5.53033 7.96967L4.46967 9.03033L7.96967 12.5303L9.03033 11.4697ZM5 9.25H19V7.75H5V9.25ZM5.53033 9.03033L9.03033 5.53033L7.96967 4.46967L4.46967 7.96967L5.53033 9.03033ZM14.9697 12.5303L18.4697 16.0303L19.5303 14.9697L16.0303 11.4697L14.9697 12.5303ZM19 14.75H5V16.25H19V14.75ZM18.4697 14.9697L14.9697 18.4697L16.0303 19.5303L19.5303 16.0303L18.4697 14.9697Z"
            fill="#ffffff"
          ></path>{" "}
        </g>
      </svg>
    </button>
  );
};

export default ChangeButton;
