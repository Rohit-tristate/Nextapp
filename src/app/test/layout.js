import Errorboundry from "@/Components/Errorboundry";

 export default function layout({children}){
    return(
        <div>
            <Errorboundry>

            {children}
            </Errorboundry>

        </div>
    )
 }