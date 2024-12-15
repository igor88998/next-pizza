import { InfoBlock } from "@/shared/components/shared";

export default function UnauthorizedPage() {
    return (
        <div className='flex flex-col items-center justify-center mt-40'>
            <InfoBlock
                title='Access Denied'
                text='Please log in to view this page'
                imageUrl=''
            />
        </div>
    )
}