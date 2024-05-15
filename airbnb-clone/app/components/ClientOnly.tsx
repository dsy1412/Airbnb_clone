'use client'
import {useEffect,useState} from "react";

interface ClientOnlyProps {
    children: React.ReactNode
}
const ClientOnly = ({children}: {children: React.ReactNode}) =>
{ const [hasMounted, setHasMounted] = useState(false);
 useEffect(() => {
     setHasMounted(true); // we can now use this hook in our component
 },[]);
 if (!hasMounted) return null;
 return (
     <>{children}</>
 );
}
export default ClientOnly