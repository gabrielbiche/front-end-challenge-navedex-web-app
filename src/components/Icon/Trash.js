import Svg from './Svg';

const Trash = ({ ...props }) => {
  return (
    <Svg width={14} height={18} {...props}>
      <path 
        d='M1 18H13V4H1V18ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z' 
        fill='#212121' 
      />
    </Svg>
  );
};

export default Trash;
