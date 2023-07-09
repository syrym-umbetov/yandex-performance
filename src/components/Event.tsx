import React, { useRef } from "react";

interface Props {
  onSize?: (size: { width: number; height: number }) => void;
  slim?: boolean;
  icon: string;
  iconLabel: string;
  title: string;
  subtitle?: string;
}

function Event(props: Props) {
  const ref = useRef<HTMLLIElement>(null);

  const { onSize } = props;

  React.useEffect(() => {
    if (onSize && ref.current) {
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;
      onSize({ width, height });
    }
  }, [onSize]);

  return (
    <li ref={ref} className={"event" + (props.slim ? " event_slim" : "")}>
      <button className='event__button'>
        <span className={`event__icon event__icon_${props.icon}`} role='img' aria-label={props.iconLabel}></span>
        <h4 className='event__title'>{props.title}</h4>
        {props.subtitle && <span className='event__subtitle'>{props.subtitle}</span>}
      </button>
    </li>
  );
}

export default Event;
