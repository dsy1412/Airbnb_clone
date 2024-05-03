'use client';


// interface containerprops is going to be children which is a type of react.react node
// then we can assign this props to the elements so react functional component container'
// in this way ,we can no longer write anything in the container.tsx but in the navbar.tsx file
interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = (
    // // then extract the children from the props
    {children}
) => {
    return (
        //  so we can replace the children like this
        <div
            className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            {children}
        </div>)
}
export default Container