interface UserIdPage{
    params:{
        userId: string;
    }
}


const Page = ({
    params
}: UserIdPage ) =>{
    return (
        <div>
            User ID: {params.userId}
        </div>
    )
}


export default Page;