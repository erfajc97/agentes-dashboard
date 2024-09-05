import { Card } from "antd";

interface CardsDetailProps {
  titleCard: string;
  numberCard: string | number;
  percentage: string | number;
  time: string;
  icon: React.ReactNode;
  trendIcon: React.ReactNode;
  isTrendUp: boolean;
}
const CardsDetail: React.FC<CardsDetailProps> = ({
  titleCard,
  numberCard,
  percentage,
  time,
  icon,
  trendIcon,
  isTrendUp,
}) => {
  return (
    <Card
      style={{
        width: 300,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <p className="text-lg text-[#202224]">{titleCard}</p>
          <p className="text-4xl font-semibold">{numberCard}</p>
        </div>
        {icon}
      </div>
      <div className="flex items-center mt-2 justify-start gap-x-2">
        {trendIcon}
        <p
          className={`${
            isTrendUp ? "text-[#00B69B]" : "text-[#F93C65]"
          } text-base`}
        >
          {percentage}
        </p>
        <p className="text-base">{time}</p>
      </div>
    </Card>
  );
};

export default CardsDetail;
