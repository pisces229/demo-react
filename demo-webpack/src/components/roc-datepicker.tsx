import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const WeekTitleItems: string[] = ['日', '一', '二', '三', '四', '五', '六'];

const MonthOptions: { value: number; text: string }[] = [];
for (let i = 0; i < 12; i++) {
  let text = (i + 1).toString();
  if (text.length !== 2) {
    text = '0' + text;
  }
  MonthOptions.push({
    value: i,
    text: `${text}月`,
  });
}

const DatepickerInput = styled.input`
  font-size: 1.125rem;
  width: 5rem;
  padding: 0.1rem
  border: 0.1rem solid #ccc;
  outline: none;
`;

const CalendarWrapper = styled.div`
  position: absolute;
  border: 0.1rem DarkGray solid;
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  border-radius: 0.3rem;
  background-color: White;
  z-index: 1;
`;

const YearMonthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
`;

const YearMonthSelect = styled.select`
  font-size: 1.125rem;
  line-height: 1.5rem;
  border-radius: 0.2rem;
`;

const YearMonthChange = styled.div`
  font-size: 1.125rem;
  line-height: 1.5rem;
  width: 1.4rem;
  text-align: center;
  cursor: pointer;
  opacity: 0.4;
  outline: none;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const WeekWrapper = styled.div`
  display: flex;
`;

const WeekItem = styled.div`
  width: 1.4rem;
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  margin: 0.1rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
`;

const DateWrapper = styled.div`
  display: flex;
`;

const DateDefaultItem = styled.div`
  width: 1.4rem;
  font-size: 1.125rem;
  text-align: center;
  margin: 0.1rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  cursor: pointer;
  &:hover {
    border-radius: 50%;
    background-color: LightGray;
  }
`;

const DateCurrentItem = styled(DateDefaultItem)`
  border-radius: 50%;
  background-color: LightGray;
`;

const DateOtherItem = styled(DateDefaultItem)`
  opacity: 0.4;
`;

const DateSpaceItem = styled.div`
  width: 1.4rem;
  font-size: 1.125rem;
  text-align: center;
  margin: 0.1rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
`;

const Index = (props: { value: string; disabled?: boolean; hidden?: boolean; onChange: (value: string) => void}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [calendarPosition, setCalendarPosition] = useState<{
    style: { top: number; left: number };
  }>({ style: { top: 0, left: 0 } });
  const [display, setDisplay] = useState(false);
  const [yearValue, setYearValue] = useState(1911);
  const [monthValue, setMonthValue] = useState(0);
  const [dateValue, setDateValue] = useState(0);
  const calendarRefCallback = useCallback(
    (node: HTMLDivElement) => {
      if (node !== null) {
        const inputNode = inputRef!.current!;
        setCalendarPosition({
          style: {
            top:
              inputNode.getBoundingClientRect().top +
                inputNode.getBoundingClientRect().height +
                node.getBoundingClientRect().height <
              window.innerHeight - 20
                ? inputNode.getBoundingClientRect().bottom + window.document!.scrollingElement!.scrollTop + 5
                : inputNode.getBoundingClientRect().top -
                  node.getBoundingClientRect().height +
                  window.document!.scrollingElement!.scrollTop -
                  5,
            left:
              inputNode.getBoundingClientRect().left + node.getBoundingClientRect().width < window.innerWidth - 20
                ? inputNode.getBoundingClientRect().left + window.document!.scrollingElement!.scrollLeft
                : inputNode.getBoundingClientRect().left +
                  inputNode.getBoundingClientRect().width -
                  node.getBoundingClientRect().width +
                  window.document!.scrollingElement!.scrollLeft,
          },
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [yearValue, monthValue],
  );
  const renderInput = () => {
    const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      event.preventDefault();
      displayCalendar(true);
    };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange(event.target.value);
    };
    const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      if (validateValue(event.target.value)) {
        props.onChange(event.target.value);
      } else {
        props.onChange('');
      }
    };
    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      // const eventKey = event.key;
      // if (eventKey === 'Tab') {
      //   displayCalendar(false);
      // }
    };
    return (
      <DatepickerInput
        type="text"
        maxLength={7}
        ref={inputRef}
        value={props.value}
        disabled={props.disabled}
        hidden={props.hidden}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    );
  };
  const renderCalendar = () => {
    const yearsVelue = yearValue - 20;
    const yeareVelue = yearValue + 20;
    const YearOption: { value: number; text: string }[] = [];
    for (let i = yearsVelue; i < yeareVelue; i++) {
      let text = (i - 1911).toString();
      if (text.length !== 3) {
        text = '0' + text;
      }
      YearOption.push({
        value: i,
        text: `${text}年`,
      });
    }
    const theMonthBegin = new Date(yearValue, monthValue, 0);
    const theMonthEnd = new Date(yearValue, monthValue + 1, 0);
    const theMonthDays = Math.round(Math.abs((theMonthEnd.getTime() - theMonthBegin.getTime()) / (24 * 60 * 60 * 1000)));
    const weekItems: Date[][] = [];
    weekItems.push([]);
    const firstDay = new Date(yearValue, monthValue, 1);
    for (let i = 0; i < firstDay.getDay(); i++) {
      weekItems[0].push(new Date(yearValue, monthValue, i - firstDay.getDay()));
    }
    for (let i = 1; i <= theMonthDays; i++) {
      if (weekItems[weekItems.length - 1].length === 7) {
        weekItems.push([]);
      }
      weekItems[weekItems.length - 1].push(new Date(yearValue, monthValue, i));
    }
    const lastDay = weekItems[weekItems.length - 1][weekItems[weekItems.length - 1].length - 1].getDay();
    for (let i = 1; i < 7 - lastDay; i++) {
      weekItems[weekItems.length - 1].push(new Date(yearValue, monthValue, theMonthDays + i));
    }
    const spaceItems: string[] = [];
    for (let i = weekItems.length; i < 6; i++) {
      spaceItems.push('');
    }
    const renderDateItem = (value: Date) => {
      return (
        <>
          {value.getFullYear() === yearValue && value.getMonth() === monthValue && value.getDate() !== dateValue && (
            <DateDefaultItem onClick={onClickDateItem(value)}>{value.getDate()}</DateDefaultItem>
          )}
          {value.getFullYear() === yearValue && value.getMonth() === monthValue && value.getDate() === dateValue && (
            <DateCurrentItem tabIndex={0} onClick={onClickDateItem(value)}>
              {value.getDate()}
            </DateCurrentItem>
          )}
          {(value.getFullYear() !== yearValue || value.getMonth() !== monthValue) && (
            <DateOtherItem onClick={onClickDateItem(value)}>{value.getDate()}</DateOtherItem>
          )}
        </>
      );
    };
    const onClickDateItem = (value: Date) => () => {
      const year = '00' + (value.getFullYear() - 1911).toString();
      const month = '0' + (value.getMonth() + 1).toString();
      const date = '0' + value.getDate().toString();
      const changeValue =
        year.substring(year.length - 3, year.length) +
        month.substring(month.length - 2, month.length) +
        date.substring(date.length - 2, date.length);
      props.onChange(changeValue);
      setDisplay(false);
    };
    const onClickYearMonthChange = (value: number) => () => {
      if (monthValue + value < 0) {
        setMonthValue(11);
        setYearValue((state) => state - 1);
      } else if (monthValue + value > 11) {
        setMonthValue(0);
        setYearValue((state) => state + 1);
      } else {
        setMonthValue((state) => state + value);
      }
    };
    const onKeyboardYearMonthChange = (value: number) => (event: React.KeyboardEvent<HTMLDivElement>) => {
      const eventKey = event.key;
      if (eventKey === 'Escape') {
        event.preventDefault();
        setDisplay(false);
      } else if (eventKey === 'Enter') {
        event.preventDefault();
        onClickYearMonthChange(value)();
      }
    };
    const onKeyboardYearMonthSelect = (event: React.KeyboardEvent<HTMLSelectElement>) => {
      const eventKey = event.key;
      if (eventKey === 'Escape') {
        event.preventDefault();
        setDisplay(false);
      }
    };
    return (
      <>
        {display && (
          <CalendarWrapper ref={calendarRefCallback} {...calendarPosition}>
            <YearMonthWrapper>
              <YearMonthChange
                tabIndex={0}
                onClick={onClickYearMonthChange(-1)}
                onKeyDown={onKeyboardYearMonthChange(-1)}
              >
                ◀
              </YearMonthChange>
              <YearMonthSelect
                tabIndex={0}
                value={yearValue}
                onChange={(e) => setYearValue(Number(e.target.value))}
                onKeyDown={onKeyboardYearMonthSelect}
              >
                {YearOption.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.text}
                  </option>
                ))}
              </YearMonthSelect>
              <YearMonthSelect
                tabIndex={0}
                value={monthValue}
                onChange={(e) => setMonthValue(Number(e.target.value))}
                onKeyDown={onKeyboardYearMonthSelect}
              >
                {MonthOptions.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.text}
                  </option>
                ))}
              </YearMonthSelect>
              <YearMonthChange
                tabIndex={0}
                onClick={onClickYearMonthChange(1)}
                onKeyDown={onKeyboardYearMonthChange(1)}
              >
                ▶
              </YearMonthChange>
            </YearMonthWrapper>
            <WeekWrapper>
              {WeekTitleItems.map((item, index) => (
                <WeekItem key={index}>{item}</WeekItem>
              ))}
            </WeekWrapper>
            {weekItems.map((items, index) => (
              <DateWrapper key={index}>
                {items.map((item, index) => (
                  <Fragment key={index}>{renderDateItem(item)}</Fragment>
                ))}
              </DateWrapper>
            ))}
            {spaceItems.map((_, index) => (
              <DateWrapper key={index}>
                <DateSpaceItem>&nbsp;</DateSpaceItem>
              </DateWrapper>
            ))}
          </CalendarWrapper>
        )}
      </>
    );
  };
  const displayCalendar = (value: boolean) => {
    if (props.disabled || props.hidden) {
      return;
    }
    setDisplay((state) => {
      if (state !== value) {
        if (value) {
          if (props.value && !state) {
            const defaultDate = new Date();
            if (props.value.length === 7) {
              const date = new Date(
                Number(props.value.substring(0, 3)) + 1911,
                Number(props.value.substring(3, 5)) - 1,
                Number(props.value.substring(5, 7)),
              );
              if (validateValue(props.value)) {
                setYearValue(date.getFullYear());
                setMonthValue(date.getMonth());
                setDateValue(date.getDate());
              } else {
                setYearValue(defaultDate.getFullYear());
                setMonthValue(defaultDate.getMonth());
                setDateValue(defaultDate.getDate());
              }
            } else {
              setYearValue(defaultDate.getFullYear());
              setMonthValue(defaultDate.getMonth());
              setDateValue(defaultDate.getDate());
            }
          }
        }
      }
      return value;
    });
  };
  const validateValue = (value: string) => {
    if (value.length === 7) {
      const date = new Date(
        Number(value.substring(0, 3)) + 1911,
        Number(value.substring(3, 5)) - 1,
        Number(value.substring(5, 7)),
      );
      return date.toString() !== 'Invalid Date';
    } else {
      return false;
    }
  };
  return (
    <>
      <PopperComponent
        datepickerInput={renderInput()}
        datepickerCalendar={renderCalendar()}
        openCalendar={() => displayCalendar(true)}
        closeCalendar={() => displayCalendar(false)}
      ></PopperComponent>
    </>
  );
};

const PopperWrapper = styled.div`
  display: inline-block;
  width: auto;
  padding: 0;
  border: 0;
  z-index: 1;
`;

const PopperComponent = (props: {
  datepickerInput: JSX.Element;
  datepickerCalendar: JSX.Element;
  openCalendar: () => void;
  closeCalendar: () => void;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const musedownOutside = (event: MouseEvent) => {
      if (wrapperRef.current) {
        if (event.target instanceof Node) {
          if (!wrapperRef.current.contains(event.target)) {
            props.closeCalendar();
          } else {
            props.openCalendar();
          }
        }
      }
    };
    const focusoutOutside = (event: FocusEvent) => {
      // if (wrapperRef.current) {
      //   if (event.target instanceof Node) {
      //     if (!wrapperRef.current.contains(event.target)) {
      //       props.closeCalendar();
      //     } else {
      //       props.openCalendar();
      //     }
      //   }
      // }
    };
    document.addEventListener('mousedown', musedownOutside);
    document.addEventListener('focusout', focusoutOutside);
    return () => {
      document.removeEventListener('mousedown', musedownOutside);
      document.removeEventListener('focusout', focusoutOutside);
    };
  }, [props, wrapperRef]);
  return (
    <>
      <PopperWrapper ref={wrapperRef}>
        {props.datepickerInput}
        <TabLoopComponent>{props.datepickerCalendar}</TabLoopComponent>
      </PopperWrapper>
    </>
  );
};

const TabLoopWrapper = styled.div`
  display: block;
`;
const TabLoopStart = styled.div`
  display: block;
`;
const TabLoopEnd = styled.div`
  display: block;
`;

const TabLoopComponent = (props: { children: JSX.Element }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const getChildren = () =>
    Array.prototype.slice
      .call(wrapperRef!.current!.querySelectorAll('[tabindex]'), 1, -1)
      .filter((node: { disabled: boolean; tabIndex: number }) => !node.disabled && node.tabIndex !== -1);
  const onFocusStart = (event: React.FocusEvent<HTMLDivElement>) => {
    const tabChildren = getChildren();
    tabChildren && tabChildren.length > 1 && tabChildren[tabChildren.length - 1].focus();
  };
  const onFocusEnd = (event: React.FocusEvent<HTMLDivElement>) => {
    const tabChildren = getChildren();
    tabChildren && tabChildren.length > 1 && tabChildren[0].focus();
  };
  return (
    <>
      <TabLoopWrapper ref={wrapperRef}>
        <TabLoopStart tabIndex={0} onFocus={onFocusStart} />
        {props.children}
        <TabLoopEnd tabIndex={0} onFocus={onFocusEnd} />
      </TabLoopWrapper>
    </>
  );
};

export default Index;
