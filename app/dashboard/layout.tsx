import SideNav from "@/app/ui/dashboard/sidenav";
import { roboto } from '@/app/ui/fonts';


export default function Layout({children}: {children: React.ReactNode}) {
    return( 

        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-nde md:w-64">
                <SideNav/>
            </div>
            <div className={`${roboto.className} flex-grow p-6 md:overflow-y-auto md:p-12`}>{children}</div>
            
        </div>
    );
}