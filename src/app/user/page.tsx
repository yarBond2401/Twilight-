'use client';

import {useAppDispatch} from "@/hooks";
import UserPage from "@/currentPages/user/user";
import {useEffect} from "react";
import {fetchUserInfo} from "@/redux/user/thunks";

export default function Page() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUserInfo());
    }, [dispatch]);

    return <UserPage/>
}
