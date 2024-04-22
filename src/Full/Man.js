import { ComparisonSlider } from 'react-comparison-slider';

const Comparison = () => {
  return (
    <div className="max-w-lg border border-black">
    <ComparisonSlider
      defaultValue={50}
      handleAfter={<div className="bg-black w-1 bottom-0 h-full"></div>}
      handleBefore={<div className="bg-black w-1 bottom-0 h-full"></div>}
      handle={({ isFocused }) => {
        return (
          <div
            className={([
              'rounded-full w-10 h-10 bg-black text-white flex items-center justify-center',
              { ring: isFocused },
            ])}
          >
            
          </div>
        );
      }}
      itemOne={
        <img className="w-full h-full object-cover" src='./Image/Women Wear/Kurtis/k1.jpg' />
      }
      itemTwo={
        <img className="w-full h-full object-cover" src='./Image/Women Wear/Kurtis/k2.jpg' />
      }
      aspectRatio={4 / 3}
    />
    <BiMoveHorizontal size={24} />
  </div>
  );
};

export default Comparison