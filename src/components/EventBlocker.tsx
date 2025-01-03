import React, { useState, useEffect, useId } from "react";
interface LongPressEnablerProps {
    doPropagate: boolean;
    children: React.ReactElement;
    onLongPress?: React.MouseEventHandler;
}

const LongPress = (props: LongPressEnablerProps) => {
    const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
    const id = useId();
    const [eventCaptureHandler, setEventCaptureHandler] =
        useState<
            React.EventHandler<
                React.MouseEvent | React.TouchEvent | React.ChangeEvent
            >
        >();

    useEffect(() => {
        if (props.doPropagate === false) {
            setEventCaptureHandler(
                (
                    e: React.MouseEvent | React.TouchEvent | React.ChangeEvent,
                ) => {
                    console.log(e);
                    e?.stopPropagation();
                },
            );
        }
    }, []);

    const handleMouseDown: React.MouseEventHandler = (e) => {
        const timer = setTimeout(() => {
            console.log(e);
            props.onLongPress?.(e);
        }, 1000);
        setPressTimer(timer);
    };

    const handleMouseUp: React.MouseEventHandler = (e) => {
        if (pressTimer) {
            clearTimeout(pressTimer);
            setPressTimer(null);
        }
    };

    /**
     * https://ui.toast.com/posts/ko_20220106
     */
    return (
        <>
            <label
                onMouseDownCapture={eventCaptureHandler}
                onMouseUpCapture={eventCaptureHandler}
                onClickCapture={eventCaptureHandler}
                // Ref: https://velog.io/@ckstn0777/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9B%B9-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-pinch-zoom-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-2
                onTouchStartCapture={(e)=>{
                    handleMouseDown(e);
                }}
                onTouchEnd={(e)=>{
                    handleMouseUp(e);
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                htmlFor={id}
            >
                {props.children}
            </label>
            <input id={id} type="hidden" />
        </>
    );
};

export { LongPress };
export type { LongPressEnablerProps };
