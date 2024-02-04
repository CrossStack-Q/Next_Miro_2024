interface LayoutProps {
    children : React.ReactNode;
};

const layout = ({
    children
}:LayoutProps) =>{
    return (
        <div>
            hi
            {children}
        </div>
    )
}

export default layout;