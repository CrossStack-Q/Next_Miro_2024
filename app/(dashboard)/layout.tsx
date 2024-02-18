interface DashboardLayoutprops {
    children : React.ReactNode
}

const DashboardLayout =({
    children,
}: DashboardLayoutprops) =>{
    return (
        <div>
            {children}
        </div>
    )
}
export default DashboardLayout