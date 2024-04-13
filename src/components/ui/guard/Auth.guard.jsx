import React, {useEffect} from "react";

const AuthGuard = ({data, children}) => {
    useEffect(() => {
        if (data?.data?.success) {
            localStorage.setItem("token", JSON.stringify(data.data.token));
        }
    }, [data]);
    return <div>{children}</div>;
};

export default AuthGuard;
