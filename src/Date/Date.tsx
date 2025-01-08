import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
export const Dates = ({ className = "" }) => {
  const [dateFuncState, setDatFunc] = useState(new Date());
  const [dayOfWeek, setDayOfWeek] = useState<number[]>([]);
  const [days, setDays] = useState<number[]>([]);
  const [currentMonthState, setcurrentMonth] = useState<number>(
    dateFuncState.getMonth()
  );
  const [currentYearState, setCurrentYear] = useState<number>(
    dateFuncState.getFullYear()
  );

  const [incrementCounterState, setIncrementCounter] = useState(
    dateFuncState.getMonth()
  );

  const monthsOfTheYear: Record<number, string> = {
    0: "january",
    1: "february",
    2: "march",
    3: "april",
    4: "may",
    5: "june",
    6: "july",
    7: "august",
    8: "september",
    9: "october",
    10: "november",
    11: "december",
  };

  const setCalender = () => {
    const daysArray = [];
    const beginningOfMonth = new Date(
      dateFuncState.getFullYear(),
      dateFuncState.getMonth()
    );
    const currentMonth = dateFuncState.getMonth();
    const currentYear = dateFuncState.getFullYear();
    const firstDayDate = beginningOfMonth.getDay();
    const firstDayDateArray = [];
    for (let i = 0; i <= firstDayDate; i++) {
      if (firstDayDate === 0) {
        for (let j = 0; j < 6; j++) {
          firstDayDateArray.push(j);
        }
      } else if (firstDayDate !== 0) {
        for (let k = 1; k < firstDayDate; k++) {
          firstDayDateArray.push(k);
        }
        break;
      }
    }
    setcurrentMonth(currentMonth);
    setCurrentYear(currentYear);
    while (beginningOfMonth.getMonth() === currentMonth) {
      daysArray.push(beginningOfMonth.getDate());
      beginningOfMonth.setDate(beginningOfMonth.getDate() + 1);
    }
    setDayOfWeek(firstDayDateArray);
    setDays(daysArray);
  };

  const forwardClick = () => {
    let actualYear = new Date().getFullYear();
    const newDate = new Date(actualYear, incrementCounterState + 1);
    actualYear = newDate.getFullYear();
    setDatFunc(newDate);
    setCurrentYear(newDate.getFullYear());
    setIncrementCounter(incrementCounterState + 1);
    // console.log(newDate, newDate.getFullYear());
  };
  const backwardClick = () => {
    let actualYear = new Date().getFullYear();
    const newDate = new Date(actualYear, incrementCounterState - 1);
    actualYear = newDate.getFullYear();
    setIncrementCounter(incrementCounterState - 1);
    setDatFunc(newDate);
    console.log(incrementCounterState);
  };

  useEffect(() => {
    setCalender();
  }, [dateFuncState]);

  const MyDate = () => {
    return (
      <div className="flex mt-3 w-full flex-wrap ml-1">
        {dayOfWeek.map((_, index) => (
          <div
            className="capitalize font-inter text-[13px] font-bold w-[14%] mb-2 flex justify-center"
            key={index}
          >
            <p></p>
          </div>
        ))}
        {days.map((day, index) => (
          <div
            className="capitalize font-inter text-[13px] font-bold w-[14%] mb-2 flex justify-center"
            key={index}
          >
            <p>{day}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`flex py-4 flex-col items-center justify-between px-2 border-solid border ${className} min-h-64`}
      style={{ border: `1px solid grey` }}
    >
      <div className="flex w-full items-center justify-between">
        <h3 className="capitalize font-black font-inter text-sm ml-3">{`${monthsOfTheYear[currentMonthState]} ${currentYearState}`}</h3>
        <div className="flex gap-4 mr-3">
          <ChevronLeft className=" cursor-pointer" onClick={backwardClick} />
          <ChevronRight className=" cursor-pointer" onClick={forwardClick} />
        </div>
      </div>

      <div className="flex mt-4 w-full flex-wrap">
        <div className="capitalize font-inter text-[13px] font-bold w-[14.2%] flex justify-center">
          <p>mon</p>
        </div>
        <div className="capitalize font-inter text-[13px] font-bold w-[14.2%] flex justify-center">
          <p>tue</p>
        </div>
        <div className="capitalize font-inter text-[13px] font-bold w-[14.2%] flex justify-center">
          <p>wed</p>
        </div>
        <div className="capitalize font-inter text-[13px] font-bold w-[14.2%] flex justify-center">
          <p>thur</p>
        </div>
        <div className="capitalize font-inter text-[13px] font-bold w-[14.2%] flex justify-center">
          <p>fri</p>
        </div>
        <div className="capitalize font-inter text-sm font-bold w-[14.2%] flex justify-center">
          <p>sat</p>
        </div>
        <div className="capitalize font-inter text-[13px] font-bold w-[14.2%] flex justify-center">
          <p>sun</p>
        </div>
      </div>
      <MyDate />
    </div>
  );
};
