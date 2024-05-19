'use client'
import {useCallback, useEffect, useState} from "react";
import {IoMdClose} from "react-icons/io";
import Button from "../Button";
interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}
const Modal: React.FC<ModalProps> = ({
        isOpen,
        onClose,
        onSubmit,
        title,
        body,
        footer,
        actionLabel,
        disabled,
        secondaryAction,
        secondaryActionLabel

    }
    ) => {

    // the following  is the some callbacks and some use effects and some states
    // useState 和 useEffect 是 React Hooks

    //useState(isOpen) 创建了一个名为 showModal 的状态变量，初始值为 isOpen 参数的值。setShowModal 是一个函数，用来更新 showModal 的值。
    const [showModal, setShowModal] = useState(isOpen);

    // if we use the useEffect we will add the use client at the top of the file

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    //useEffect 用来处理副作用。这里的副作用是根据外部传入的 isOpen 参数更新 showModal 状态。依赖数组 [isOpen] 表示只有当 isOpen 发生变化时，这个副作用才会重新执行。


    // something to mention for the above code: when using the useEffect we need to make sure that the state is not updated before the component is mounted, so we need to add the dependency array as an empty array[].
    const handleClose = useCallback(() => {
        if (disabled) {
            return;
    }
        setShowModal(false);
        setTimeout(() => {
            onClose();
        },300);
    },[disabled, onClose]);


    //定义了三个函数 handleClose, handleSubmit, handleSecondaryAction。每个函数都使用 useCallback 缓存，只有在依赖的参数（如 disabled, onClose, onSubmit, secondaryAction）发生变化时，这些函数才会重新创建。

//     handleClose：当模态框的关闭按钮被点击时调用，它会检查 disabled 状态，如果不是禁用状态，则关闭模态框，并在 300 毫秒后调用 onClose 函数。
// handleSubmit：当提交按钮被点击时调用，它同样会检查 disabled 状态，如果不是禁用状态，则调用 onSubmit 函数。
// handleSecondaryAction：当次要操作按钮被点击时调用，它会检查 disabled 状态和 secondaryAction 函数是否存在，如果满足条件，则调用 secondaryAction 函数。

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
        onSubmit();
    },[disabled, onSubmit]);


    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }
        secondaryAction();
    },[disabled, secondaryAction]);


    if (!isOpen) {
        return null;
    }
    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-netural-800/70">
            <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
                {/*content*/}
                <div
                    className={`translate duration-300 h-full
                    ${showModal ? 'translate-y-0' : 'translate-y-full'}
                    ${showModal ? 'opacity-100' : 'opacity-0'}`}>
                    <div
                        className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div
                            className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                            <button
                                onClick={handleClose}
                                className="p-1 border-0 hover:opacity-70 transition absolute left-9">
                                <IoMdClose size={18} />
                            </button>
                            <div className="text-lg font-semibold">
                                {title}
                            </div>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            {body}
                        </div>
                        {/*footer*/}
                        <div className="flex flex-col gap-2 p-6">
                            <div
                                className="flex flex-row items-center gap-4 w-full">
                                {secondaryAction && secondaryActionLabel && (
                                    <Button
                                        outline
                                        disabled={disabled}
                                        label={secondaryActionLabel}
                                        onClick={handleSecondaryAction}

                                    />
                                    )
                                }
                                <Button
                                    disabled={disabled}
                                    label={actionLabel}
                                    onClick={handleSubmit}
                                />
                            </div>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal ;